import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";

export default function CoachTable({ coaches, activeTab, tableId }) {
    if (activeTab !== tableId) return null;
    return (
        <div>
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>About</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coaches.data.map((coach) => (
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
                                        className="btn-sm btn-yellow"
                                    >
                                        Edit
                                    </Link>
                                    <ConfirmButton
                                        id={coach.user.id}
                                        routeName="coach.destroy"
                                        routeParamKey="user"
                                        className="btn-sm btn-red"
                                        method="delete"
                                        children="Remove"
                                        message="Are you sure you want remove this coach?"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="my-4 flex justify-center space-x-2">
                    {coaches.links.map((link, idx) => (
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
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
