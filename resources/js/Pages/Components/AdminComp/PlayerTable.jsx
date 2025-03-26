import { Link } from "@inertiajs/react";

function PlayerTable({ players }) {
    return (
        <>
            <h1>This is a Players table</h1>
            <div className="bg-opacity-75 mt-5 flex flex-col justify-center bg-[#05283d] text-white">
                <table className="table-fixed border-collapse rounded-md border border-[#9dbebb] text-center">
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
                                <td>{player.team_name}</td>
                                <td>
                                    {`${player.user_first_name} ${player.user_last_name}`}
                                </td>
                                <td>
                                    <Link
                                        className="pr-1"
                                        href={`/player/edit/${player.id}`}
                                        method="get"
                                        type="button"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PlayerTable;
