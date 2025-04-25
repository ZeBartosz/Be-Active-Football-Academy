import { Link } from "@inertiajs/react";

export default function EventTable({ events }) {
    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Events</h1>
                <Link
                    href={route("event.create")}
                    className="btn-sm btn-green"
                    method="get"
                    type="button"
                >
                    + Add Event
                </Link>
            </div>

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
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
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
                                        href={route("home", {
                                            event: event.id,
                                        })}
                                        className="btn-sm btn-green"
                                        method="get"
                                        type="button"
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
