import { useForm, usePage } from "@inertiajs/react";

function AdminUserTable({ users }) {
    const { authUser } = usePage().props;

    const { put: putCoach } = useForm();
    const { put: putAdmin } = useForm();

    function toggleCoachStatus(user, e) {
        e.preventDefault();
        putCoach(`/admin/update/coach/${user.id}`);
    }

    // Function to toggle admin status
    function toggleAdminStatus(user, e) {
        e.preventDefault();
        putAdmin(`/admin/update/admin/${user.id}`);
    }

    return (
        <>
            <h1>This is a user table</h1>
            <div className="bg-opacity-75 mt-5 flex flex-col justify-center bg-[#05283d] text-white">
                <table className="table-fixed border-collapse rounded-md border border-[#9dbebb] text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Is_Admin</th>
                            <th>Is_Coach</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {!user.is_admin ? (
                                        <button
                                            className="rounded-lg border bg-green-600 p-2"
                                            onClick={(e) =>
                                                toggleAdminStatus(user, e)
                                            }
                                        >
                                            False
                                        </button>
                                    ) : (
                                        <button
                                            disabled={authUser.id === user.id}
                                            className="rounded-lg border bg-red-600 p-2"
                                            onClick={(e) =>
                                                toggleAdminStatus(user, e)
                                            }
                                        >
                                            True
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {!user.is_coach ? (
                                        <button
                                            className="rounded-lg border bg-green-600 p-2"
                                            onClick={(e) =>
                                                toggleCoachStatus(user, e)
                                            }
                                        >
                                            False
                                        </button>
                                    ) : (
                                        <button
                                            disabled={authUser.id === user.id}
                                            className="rounded-lg border bg-red-600 p-2"
                                            onClick={(e) =>
                                                toggleCoachStatus(user, e)
                                            }
                                        >
                                            True
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminUserTable;
