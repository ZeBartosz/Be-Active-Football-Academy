import { Link, usePage } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";
import useData from "../../hooks/useData.tsx";
import type {
    Auth,
    User,
    Pagination,
    Link as LinkType,
} from "../../types/index";

interface UserTableProps {
    activeTab: string;
    tableId: string;
}

export default function UserTable({ activeTab, tableId }: UserTableProps) {
    const { props } = usePage();
    const { auth } = props as unknown as { auth: Auth };
    const {
        data: users,
        loading,
        error,
    } = useData<Pagination<User>>(
        route("api.admin.users"),
        activeTab === tableId,
    );

    if (activeTab !== tableId) return null;
    if (!users && loading) return <div className="text-center">Loading...</div>;
    if (!users && error)
        return <div className="text-center">Error: {error}</div>;

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
                            <th>Staff</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                                <td>{user.date_of_birth.toString()}</td>
                                <td>{user.address}</td>
                                <td>{user.post_code}</td>

                                {/* Admin toggle */}
                                <td>
                                    {!user.roles?.some(
                                        (role) => role.name === "Admin",
                                    ) ? (
                                        <ConfirmButton
                                            id={user.id}
                                            routeName="admin.grant"
                                            routeParamKey="user"
                                            className="btn-sm btn-yellow"
                                            method="put"
                                            children="Grant"
                                            message="Are you sure you want to grant admin status?"
                                        />
                                    ) : auth.user.id === user.id ? (
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
                                    {!user.roles?.some(
                                        (role) => role.name === "Staff",
                                    ) ? (
                                        <Link
                                            href={route("staff.create", {
                                                user: user.id,
                                            })}
                                            className="btn-sm btn-yellow py-2"
                                        >
                                            Make
                                        </Link>
                                    ) : auth?.user.id === user.id ? (
                                        <button className="btn-sm btn-gray">
                                            You
                                        </button>
                                    ) : (
                                        <ConfirmButton
                                            id={user.id}
                                            routeName="staff.destroy"
                                            routeParamKey="user"
                                            className="btn-sm btn-red"
                                            method="delete"
                                            children="Remove"
                                            message="Are you sure you want to remove staff?"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="my-4 flex justify-center space-x-2">
                    {users?.links.map((link: LinkType, idx: number) => (
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
