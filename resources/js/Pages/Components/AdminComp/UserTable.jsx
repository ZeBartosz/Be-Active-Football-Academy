import { Link, useForm, usePage } from "@inertiajs/react";

export default function UserTable({ users, activeTab, tableId }) {
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

    if (activeTab !== tableId) return null;

    return (
        <div>
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
                        {users.data.map((user) => (
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
                <div className="my-4 flex justify-center space-x-2">
                    {users.links.map((link, idx) => (
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
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
