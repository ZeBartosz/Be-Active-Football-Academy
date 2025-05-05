import { Link, useForm, usePage } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";

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
        postCoach(
            route("coach.store", { user: user.id }),
            {},
            { preserveScroll: false },
        );
    }

    function handleCoachDelete(user, e) {
        e.preventDefault();
        deleteCoach(
            route("coach.destroy", { user: user.id }),
            {},
            { preserveScroll: false },
        );
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
                                        <ConfirmButton
                                            id={user.id}
                                            routeName="admin.grant"
                                            routeParamKey="user"
                                            className="btn-sm btn-yellow"
                                            method="put"
                                            children="Grant"
                                            message="Are you sure you want to grant admin status?"
                                        />
                                    ) : authUser.id === user.id ? (
                                        <button className="btn-sm btn-gray">
                                            You
                                        </button>
                                    ) : (
                                        <ConfirmButton
                                            id={user.id}
                                            routeName="admin.revoke"
                                            routeParamKey="user"
                                            className="btn-sm btn-red"
                                            method="put"
                                            children="Revoke"
                                            message="Are you sure you want to revoke admin status?"
                                        />
                                    )}
                                </td>

                                <td>
                                    {!user.is_coach ? (
                                        <ConfirmButton
                                            id={user.id}
                                            routeName="coach.store"
                                            routeParamKey="user"
                                            className="btn-sm btn-yellow"
                                            method="post"
                                            children="Make"
                                            message="Are you sure you want to make coach?"
                                        />
                                    ) : authUser.id === user.id ? (
                                        <button className="btn-sm btn-gray">
                                            You
                                        </button>
                                    ) : (
                                        <ConfirmButton
                                            id={user.id}
                                            routeName="coach.destroy"
                                            routeParamKey="user"
                                            className="btn-sm btn-red"
                                            method="delete"
                                            children="Remove"
                                            message="Are you sure you want to remove coach?"
                                        />
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
