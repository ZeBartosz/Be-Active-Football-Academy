import { Link } from "@inertiajs/react";

export default function PlayerTable({ players }) {
    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">Players</h1>
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
                        {players.map((player) => (
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
            </div>
        </div>
    );
}
