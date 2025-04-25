import { Link } from "@inertiajs/react";

export default function TeamTable({ teams }) {
    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Teams</h1>
                <Link
                    href={route("team.create")}
                    className="btn-sm btn-green"
                    method="get"
                    type="button"
                >
                    + Add Team
                </Link>
            </div>

            {/* Table container */}
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Team Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team) => (
                            <tr key={team.id}>
                                <td>{team.team_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
