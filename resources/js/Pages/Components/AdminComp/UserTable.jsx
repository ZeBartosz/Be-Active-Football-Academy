import { useForm, usePage } from "@inertiajs/react";

function UserTable({ users }) {
    const { authUser } = usePage().props;

    const { post: postCoach } = useForm();
    const { delete: deleteCoach } = useForm();

    const { put: putAdmin } = useForm();

    function handleCoachPost(user, e) {
        e.preventDefault();
        postCoach(`/admin/create/coach/${user.id}`);
    }

    function handleCoachdelet(user, e) {
        e.preventDefault();
        deleteCoach(`/admin/delete/coach/${user.id}`);
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
                            <th>Number</th>
                            <th>DoB</th>
                            <th>Address</th>
                            <th>Post Code</th>
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
                                <td>{user.number}</td>
                                <td>{user.date_of_birth}</td>
                                <td>{user.address}</td>
                                <td>{user.post_code}</td>
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
                                                handleCoachPost(user, e)
                                            }
                                        >
                                            False
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                disabled={
                                                    authUser.id === user.id
                                                }
                                                className="rounded-lg border bg-red-600 p-2"
                                                onClick={(e) =>
                                                    handleCoachdelet(user, e)
                                                }
                                            >
                                                True
                                            </button>
                                        </>
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

export default UserTable;
