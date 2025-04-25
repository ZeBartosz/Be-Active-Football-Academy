import { Link } from "@inertiajs/react";

export default function TeamTable({ teams, activeTab, tableId }) {
    console.log(teams);
    return (
        <div
            className={`table-content ${
                activeTab === tableId ? "active" : "hidden"
            }`}
        >
            <div className="mb-6 flex items-center justify-end">
                <Link
                    href={route("team.create")}
                    className="btn-sm btn-green"
                    method="get"
                    type="button"
                >
                    + Add Team
                </Link>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Player Count</th>
                            <th>Event Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.data.map((team) => (
                            <tr key={team.id}>
                                <td>{team.team_name}</td>
                                <td>{team.players_count}</td>
                                <td>{team.events_count}</td>
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
