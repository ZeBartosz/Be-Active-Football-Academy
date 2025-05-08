import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";

export default function TeamTable({ teams, activeTab, tableId }) {
    if (activeTab !== tableId) return null;

    return (
        <div>
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Player Count</th>
                            <th>Event Count</th>
                            <th>Coaches</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.data.map((team) => (
                            <tr key={team.id}>
                                <td>{team.team_name}</td>
                                <td>{team.players_count}</td>
                                <td>{team.events_count}</td>
                                <td className="group relative px-3 py-2">
                                    <span className="cursor-default">
                                        {team.coaches.length}
                                    </span>
                                    {team.coaches.length > 0 && (
                                        <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white shadow-lg group-hover:block">
                                            {team.coaches.map((c) => (
                                                <div key={c.id}>
                                                    {c.user.first_name}{" "}
                                                    {c.user.last_name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </td>
                                <td>
                                    <Link
                                        href={route("team.edit", {
                                            team: team.id,
                                        })}
                                        className="btn-sm btn-yellow"
                                    >
                                        Edit
                                    </Link>

                                    <ConfirmButton
                                        id={team.id}
                                        routeName="team.destroy"
                                        routeParamKey="team"
                                        className="btn-sm btn-red"
                                        method="delete"
                                        children="Delete"
                                        message="Are you sure you want delete this team?"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="my-4 flex justify-center space-x-2">
                    {teams.links.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.url || "#"}
                            className={`rounded px-3 py-1 ${
                                link.active
                                    ? "bg-secondary text-black"
                                    : "bg-primary hover:bg-secondary text-white hover:text-black"
                            }`}
                            preserveState
                        >
                            {/* link.label comes as "&laquo; Previous", page numbers, "Next &raquo;" */}
                            <span
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
