import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";

export default function StuffTable({ stuff, activeTab, tableId }) {
    if (activeTab !== tableId) return null;
    return (
        <div>
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>About</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stuff.data.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img
                                        src={item.avatar}
                                        alt={`${item.user.first_name} avatar`}
                                        className="mx-auto h-12 w-12 rounded-full object-cover"
                                    />
                                </td>
                                <td>{item.role}</td>
                                <td>{item.user.first_name}</td>
                                <td>{item.user.last_name}</td>
                                <td>{item.user.email}</td>
                                <td>{item.about}</td>
                                <td>
                                    <Link
                                        href={route("coach.edit", {
                                            user: item.user.id,
                                        })}
                                        className="btn-sm btn-yellow"
                                    >
                                        Edit
                                    </Link>
                                    <ConfirmButton
                                        id={item.id}
                                        routeName="stuff.destroy"
                                        routeParamKey="stuff"
                                        className="btn-sm btn-red"
                                        method="delete"
                                        children="Remove"
                                        message="Are you sure you want remove this stuff?"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="my-4 flex justify-center space-x-2">
                    {stuff.links.map((link, idx) => (
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
