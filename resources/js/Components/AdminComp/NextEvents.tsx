import { Link } from "@inertiajs/react";
import useData from "../../hooks/useData.tsx";

export default function NextEvents() {
    const {
        data: events,
        loading,
        error,
    } = useData<Event[]>(route("api.admin.next.events"), true);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center">Error: {error}</div>;

    if (!events?.length) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <svg
                    className="h-16 w-16 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
                <h1 className="mt-4 text-2xl font-bold text-gray-700">
                    No Events Found
                </h1>
                <p className="mt-2 text-gray-500">
                    Check back later for upcoming events
                </p>
            </div>
        );
    }

    return (
        <div className="mb-10">
            <div className="mb-10 text-center">
                <h1 className="text-primary text-3xl font-bold md:text-4xl">
                    Upcoming Events
                </h1>
                <div className="bg-secondary mx-auto mt-2 h-1 w-20 rounded-full"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events?.map((event: Event) => (
                    <div
                        key={event.id}
                        className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="bg-primary group-hover:bg-primary/90 p-5 transition-all duration-300">
                            <div className="flex justify-between">
                                <div>
                                    <span className="bg-secondary/20 text-secondary inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase">
                                        {event.type}
                                    </span>
                                </div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                                    <svg
                                        className="text-secondary h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                                {event.title}
                            </h2>
                            {event.team && (
                                <div className="mt-2 flex items-center text-white/80">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span>{event.team.team_name}</span>
                                </div>
                            )}
                        </div>

                        <div className="p-5">
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <svg
                                        className="text-primary mr-3 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        {event.date.toString()}
                                    </span>
                                </div>

                                <div className="flex items-center">
                                    <svg
                                        className="text-primary mr-3 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        {event.time}
                                    </span>
                                </div>

                                <div className="flex items-center">
                                    <svg
                                        className="text-primary mr-3 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        {event.post_code}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href={route("event.show", {
                                        event: event.id,
                                    })}
                                    className="bg-secondary hover:bg-secondary/90 flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium text-black transition-colors"
                                >
                                    View Details
                                    <svg
                                        className="ml-2 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
