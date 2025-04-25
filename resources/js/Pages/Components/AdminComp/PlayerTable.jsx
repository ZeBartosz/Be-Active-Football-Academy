import { Link } from "@inertiajs/react";

export default function PlayerTable({ players, activeTab, tableId }) {
    return (
        <div
            className={`table-content ${
                activeTab === tableId ? "active" : "hidden"
            }`}
        >
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>DoB</th>
                            <th>Address</th>
                            <th>Post Code</th>
                            <th>Team Name</th>
                            <th>Guardian</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.data.map((player) => (
                            <tr key={player.id}>
                                <td>{player.first_name}</td>
                                <td>{player.last_name}</td>
                                <td>{player.date_of_birth}</td>
                                <td>{player.address}</td>
                                <td>{player.post_code}</td>
                                <td>{player.team.team_name}</td>
                                <td>
                                    {`${player.user.first_name} ${player.user.last_name}`}
                                </td>
                                <td>
                                    <Link
                                        href={route("home", {
                                            player: player.id,
                                        })}
                                        className="btn-sm btn-green"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="my-4 flex justify-center space-x-2">
                    {players.links.map((link, idx) => (
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
