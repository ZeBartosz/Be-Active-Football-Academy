import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";

export default function PlayerList({ players }) {
    const shouldScroll = players.length > 3;

    return (
        <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-primary text-3xl font-bold">
                        Player List
                    </h1>
                    <div className="bg-secondary mt-2 h-1 w-16 rounded-full"></div>
                </div>
                <Link
                    href={route("player.create")}
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
                    Add Player
                </Link>
            </div>

            <div
                className={`${shouldScroll ? "max-h-[550px] overflow-y-auto pr-2" : ""} space-y-4`}
            >
                {players.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 py-12">
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
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <h2 className="mt-4 text-xl font-medium text-gray-600">
                            No Players Added
                        </h2>
                        <p className="mt-2 text-gray-500">
                            Add your first player to get started
                        </p>
                    </div>
                ) : (
                    players.map((player) => (
                        <div
                            key={player.id}
                            className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                        >
                            <div className="flex flex-col sm:flex-row">
                                <div className="bg-primary flex items-center justify-center p-6 text-white sm:w-[120px]">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl font-bold uppercase">
                                        {player.first_name.charAt(0)}
                                        {player.last_name.charAt(0)}
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-5">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {player.first_name}{" "}
                                            {player.last_name}
                                        </h2>
                                        <div className="bg-secondary/20 text-secondary inline-flex rounded-full px-3 py-1 text-xs font-semibold">
                                            {player.team.team_name}
                                        </div>
                                    </div>

                                    <div className="mb-5 grid grid-cols-1 gap-2 text-gray-600 sm:grid-cols-2">
                                        <div className="flex items-center">
                                            <svg
                                                className="text-primary mr-2 h-4 w-4"
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
                                            <span>{player.date_of_birth}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg
                                                className="text-primary mr-2 h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                />
                                            </svg>
                                            <span>{player.address}</span>
                                        </div>
                                        <div className="flex items-center sm:col-span-2">
                                            <svg
                                                className="text-primary mr-2 h-4 w-4"
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
                                            <span>{player.post_code}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex gap-3">
                                        <Link
                                            href={route("player.edit", {
                                                player: player.id,
                                            })}
                                            className="bg-primary/10 text-primary hover:bg-primary/20 flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors"
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
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                            </svg>
                                            Edit
                                        </Link>
                                        <ConfirmButton
                                            id={player.id}
                                            routeName="player.destroy"
                                            routeParamKey="player"
                                            className="flex items-center rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
                                            method="delete"
                                            message="Are you sure you want to delete this player?"
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
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
