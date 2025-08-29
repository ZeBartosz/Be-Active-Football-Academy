import { Link } from "@inertiajs/react";

export default function TotalCount({ userCount, coachCount, playerCount }) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-primary text-3xl font-bold">
                        System Overview
                    </h1>
                    <div className="bg-secondary mt-2 h-1 w-16 rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Link
                        href={route("team.create")}
                        className="bg-secondary hover:bg-secondary/90 flex items-center justify-center rounded-full px-5 py-2.5 font-medium text-black shadow-md transition-all hover:shadow-lg"
                        method="get"
                        type="button"
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
                        Add Team
                    </Link>
                    <Link
                        href={route("event.create")}
                        className="bg-secondary hover:bg-secondary/90 flex items-center justify-center rounded-full px-5 py-2.5 font-medium text-black shadow-md transition-all hover:shadow-lg"
                        method="get"
                        type="button"
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
                        Add Event
                    </Link>
                    <Link
                        href={route("program_group.create")}
                        className="bg-secondary hover:bg-secondary/90 flex items-center justify-center rounded-full px-5 py-2.5 font-medium text-black shadow-md transition-all hover:shadow-lg"
                        method="get"
                        type="button"
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
                        Add Program
                    </Link>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Users Card */}
                <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col">
                        <div className="bg-primary flex items-center justify-center p-5 text-white">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl">
                                <svg
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5 text-center">
                            <h2 className="mb-2 text-xl font-semibold text-gray-800">
                                Users
                            </h2>
                            <p className="text-primary text-4xl font-bold">
                                {userCount}
                            </p>
                            <span className="mt-1 text-sm text-gray-500">
                                Total registered accounts
                            </span>
                        </div>
                    </div>
                </div>

                {/* Coaches Card */}
                <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center bg-indigo-600 p-5 text-white">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl">
                                <svg
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5 text-center">
                            <h2 className="mb-2 text-xl font-semibold text-gray-800">
                                Coaches
                            </h2>
                            <p className="text-4xl font-bold text-indigo-600">
                                {coachCount}
                            </p>
                            <span className="mt-1 text-sm text-gray-500">
                                Active coaching staff
                            </span>
                        </div>
                    </div>
                </div>

                {/* Players Card */}
                <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col">
                        <div className="bg-secondary flex items-center justify-center p-5 text-white">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl">
                                <svg
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5 text-center">
                            <h2 className="mb-2 text-xl font-semibold text-gray-800">
                                Players
                            </h2>
                            <p className="text-secondary text-4xl font-bold">
                                {playerCount}
                            </p>
                            <span className="mt-1 text-sm text-gray-500">
                                Registered players
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
