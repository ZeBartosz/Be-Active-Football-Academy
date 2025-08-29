import { Link, usePage } from "@inertiajs/react";
import ConfirmButton from "../../Components/Confirmation/ConfirmButton.tsx";

export default function ShowProgramGroup({ programGroups, programs }) {
    const { authUser } = usePage().props;

    return (
        <div className="font-display relative min-h-screen">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="rounded-xl bg-white/95 p-8 shadow-lg backdrop-blur-sm">
                    {/* Header with actions */}
                    <div className="mb-10 flex flex-col items-center justify-between gap-4 border-b border-gray-100 pb-6 md:flex-row">
                        <div className="text-center md:text-left">
                            <h1 className="text-primary text-3xl font-bold md:text-4xl">
                                {programGroups.title}
                            </h1>
                            <div className="bg-secondary mt-2 h-1 w-20 rounded-full"></div>
                            <p className="mt-4 max-w-2xl text-gray-600">
                                {programGroups.description}
                            </p>
                        </div>

                        {authUser?.is_admin && (
                            <div className="flex items-center gap-3">
                                <Link
                                    href={route("program_group.edit", {
                                        programGroup: programGroups.id,
                                    })}
                                    className="flex items-center justify-center rounded-full bg-gray-100 px-5 py-2.5 font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-200"
                                >
                                    <svg
                                        className="mr-1.5 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                        />
                                    </svg>
                                    Edit Group
                                </Link>
                                <ConfirmButton
                                    id={programGroups.id}
                                    routeName="program_group.destroy"
                                    routeParamKey="programGroup"
                                    className="flex items-center justify-center rounded-full bg-red-100 px-5 py-2.5 font-medium text-red-700 shadow-sm transition-all hover:bg-red-200"
                                    method="delete"
                                    message="Are you sure you want delete this Program Group?"
                                >
                                    <svg
                                        className="mr-1.5 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                    Delete Group
                                </ConfirmButton>
                            </div>
                        )}
                    </div>

                    {/* Add Program Button */}
                    {authUser?.is_admin && (
                        <div className="mb-8">
                            <Link
                                href={route("program.create", {
                                    programGroup: programGroups.id,
                                })}
                                className="border-secondary bg-secondary/5 text-secondary hover:bg-secondary/10 flex w-full items-center justify-center rounded-xl border-2 border-dashed px-6 py-4 text-center font-medium transition-all sm:w-auto"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                                Add New Program
                            </Link>
                        </div>
                    )}

                    {/* Programs Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="mb-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-gray-800">
                                            {program.title}
                                        </h2>
                                        <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold">
                                            ${program.price}
                                        </span>
                                    </div>
                                    <div className="mt-2 h-0.5 w-12 rounded-full bg-gray-200"></div>
                                </div>

                                <p className="text-gray-600">
                                    {program.description}
                                </p>

                                {authUser?.is_admin && (
                                    <div className="mt-6 flex items-center justify-between gap-2">
                                        <Link
                                            href={route("program.edit", {
                                                programGroup: programGroups.id,
                                                program: program.id,
                                            })}
                                            className="bg-secondary hover:bg-secondary/90 flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-black shadow-sm transition-all"
                                        >
                                            <svg
                                                className="mr-1.5 h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                />
                                            </svg>
                                            Edit
                                        </Link>
                                        <ConfirmButton
                                            id={program.id}
                                            routeName="program.destroy"
                                            routeParamKey="program"
                                            className="flex items-center justify-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 shadow-sm transition-all hover:bg-red-200"
                                            method="delete"
                                            message="Are you sure you want delete this Program?"
                                        >
                                            <svg
                                                className="mr-1.5 h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                            Delete
                                        </ConfirmButton>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
