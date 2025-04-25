import { Link } from "@inertiajs/react";

export default function CoachTable({ coaches }) {
    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">Coaches</h1>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>About</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coaches.map((coach) => (
                            <tr key={coach.id}>
                                <td>
                                    <img
                                        src={coach.avatar}
                                        alt={`${coach.user.first_name} avatar`}
                                        className="mx-auto h-12 w-12 rounded-full object-cover"
                                    />
                                </td>
                                <td>{coach.user.first_name}</td>
                                <td>{coach.user.last_name}</td>
                                <td>{coach.user.email}</td>
                                <td>{coach.about}</td>
                                <td>
                                    <Link
                                        href={route("coach.edit", {
                                            user: coach.user.id,
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
