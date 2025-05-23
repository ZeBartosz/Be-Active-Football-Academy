import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";

export default function EventTable({ events, activeTab, tableId }) {
    if (activeTab !== tableId) return null;
    return (
        <div>
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Team</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Address</th>
                            <th>Post Code</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.data.map((event) => (
                            <tr key={event.id}>
                                <td>{event.title}</td>
                                <td>{event.description}</td>
                                <td>{event.type}</td>
                                <td>
                                    {event.team
                                        ? event.team.team_name
                                        : "Everyone"}
                                </td>
                                <td>{event.date}</td>
                                <td>{event.time}</td>
                                <td>{event.address}</td>
                                <td>{event.post_code}</td>
                                <td>
                                    <Link
                                        href={route("event.show", {
                                            event: event.id,
                                        })}
                                        className="btn-sm btn-yellow"
                                        method="get"
                                        type="button"
                                    >
                                        Show
                                    </Link>

                                    <Link
                                        href={route("event.edit", {
                                            event: event.id,
                                        })}
                                        className="btn-sm btn-yellow"
                                        method="get"
                                        type="button"
                                    >
                                        Edit
                                    </Link>

                                    <ConfirmButton
                                        id={event.id}
                                        routeName="event.destroy"
                                        routeParamKey="event"
                                        className="btn-sm btn-red"
                                        method="delete"
                                        children="Delete"
                                        message="Are you sure you want delete this event?"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="my-4 flex justify-center space-x-2">
                    {events.links.map((link, idx) => (
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
