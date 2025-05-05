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
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.data.map((team) => (
                            <tr key={team.id}>
                                <td>{team.team_name}</td>
                                <td>{team.players_count}</td>
                                <td>{team.events_count}</td>
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
