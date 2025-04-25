import { useForm, usePage } from "@inertiajs/react";

export default function UserTable({ users }) {
    const { authUser } = usePage().props;
    const {
        post: postCoach,
        delete: deleteCoach,
        put: putAdmin,
        processing,
    } = useForm();

    function handleCoachPost(user, e) {
        e.preventDefault();
        postCoach(route("coach.store", { user: user.id }));
    }

    function handleCoachDelete(user, e) {
        e.preventDefault();
        deleteCoach(route("coach.destroy", { user: user.id }));
    }

    function toggleAdminStatus(user, e) {
        e.preventDefault();
        putAdmin(route("admin.toggleAdmin", { user: user.id }));
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">User Management</h1>
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>DoB</th>
                            <th>Address</th>
                            <th>Post Code</th>
                            <th>Admin</th>
                            <th>Coach</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                                <td>{user.date_of_birth}</td>
                                <td>{user.address}</td>
                                <td>{user.post_code}</td>

                                {/* Admin toggle */}
                                <td>
                                    {!user.is_admin ? (
                                        <button
                                            onClick={(e) =>
                                                toggleAdminStatus(user, e)
                                            }
                                            className="btn-sm btn-green"
                                        >
                                            Grant
                                        </button>
                                    ) : authUser.id === user.id ? (
                                        <button className="btn-sm btn-gray">
                                            You
                                        </button>
                                    ) : (
                                        <button
                                            onClick={(e) =>
                                                toggleAdminStatus(user, e)
                                            }
                                            className="btn-sm btn-red"
                                        >
                                            Revoke
                                        </button>
                                    )}
                                </td>

                                <td>
                                    {!user.is_coach ? (
                                        <button
                                            onClick={(e) =>
                                                handleCoachPost(user, e)
                                            }
                                            className="btn-sm btn-green"
                                        >
                                            Make
                                        </button>
                                    ) : authUser.id === user.id ? (
                                        <button className="btn-sm btn-gray">
                                            You
                                        </button>
                                    ) : (
                                        <button
                                            onClick={(e) =>
                                                handleCoachDelete(user, e)
                                            }
                                            className="btn-sm btn-red"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
