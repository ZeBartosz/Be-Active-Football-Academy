import { Link, usePage } from "@inertiajs/react";
import {
    CalendarIcon,
    ClockIcon,
    MapPinIcon,
    TagIcon,
} from "@heroicons/react/24/outline";
import ConfirmButton from "../Components/Confirmation/ConfirmButton.jsx";
import Background from "../Components/Background/Background.jsx";

export default function ShowEvent({ event }) {
    const { authUser } = usePage().props;

    const canManage =
        authUser?.is_admin || authUser?.is_coach || authUser?.is_staff;

    // Format date to be more readable
    const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="relative flex min-h-screen items-center justify-center">
            <Background background={null} />

            <div className="relative inset-10 mx-auto w-full max-w-4xl rounded-lg border bg-white p-6 shadow-md">
                <div className="font-display rounded-lg bg-white p-8 shadow-md">
                    <h1 className="mb-6 text-3xl font-bold text-gray-800">
                        {event.title}
                    </h1>

                    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-2">
                            <TagIcon className="text-primary h-5 w-5" />
                            <span className="font-medium">Type:</span>{" "}
                            {event.type}
                        </div>

                        <div className="flex items-center gap-2">
                            <CalendarIcon className="text-primary h-5 w-5" />
                            <span className="font-medium">Date:</span>{" "}
                            {formattedDate}
                        </div>

                        <div className="flex items-center gap-2">
                            <ClockIcon className="text-primary h-5 w-5" />
                            <span className="font-medium">Time:</span>{" "}
                            {event.time}
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPinIcon className="text-primary h-8 w-8" />
                            <span className="font-medium">Location:</span>{" "}
                            {event.address}, {event.post_code}
                        </div>
                    </div>

                    <div className="mb-8 rounded-md bg-gray-50 p-4">
                        <h2 className="mb-2 text-xl font-medium text-gray-800">
                            Description
                        </h2>
                        <p className="text-gray-700">{event.description}</p>
                    </div>

                    {canManage && (
                        <div className="mt-8 space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Responsibilities
                                </h2>
                                <Link
                                    href={route("responsibility.create", {
                                        event: event.id,
                                    })}
                                    className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none"
                                >
                                    + Add Responsibility
                                </Link>
                            </div>

                            {event.responsibilities.length === 0 ? (
                                <div className="rounded-md bg-gray-50 p-6 text-center">
                                    <p className="text-gray-500">
                                        No responsibilities assigned yet.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {event.responsibilities.map((r) => (
                                        <div
                                            key={r.id}
                                            className="rounded-md border border-gray-200 bg-gray-50 p-4"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-medium text-gray-800">
                                                        {
                                                            r.staff.user
                                                                .first_name
                                                        }{" "}
                                                        {r.staff.user.last_name}
                                                        <span className="ml-2 text-sm text-gray-500">
                                                            ({r.staff.role})
                                                        </span>
                                                    </h3>
                                                    <p className="mt-1 text-gray-600">
                                                        {r.description}
                                                    </p>
                                                </div>
                                                {authUser?.is_admin && (
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={route(
                                                                "responsibility.edit",
                                                                {
                                                                    responsibility:
                                                                        r.id,
                                                                },
                                                            )}
                                                            className="btn-sm btn-yellow"
                                                        >
                                                            Edit
                                                        </Link>

                                                        <ConfirmButton
                                                            id={r.id}
                                                            routeName="responsibility.destroy"
                                                            routeParamKey="responsibility"
                                                            className="btn-sm btn-red"
                                                            method="delete"
                                                            children="Delete"
                                                            message="Are you sure you want to remove this responsibility?"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
