import { Link } from "@inertiajs/react";

function EventTable({ events }) {
    return (
        <>
            <h1>This is a Event table</h1>
            <div className="bg-opacity-75 mt-5 flex flex-col justify-center bg-[#05283d] text-white">
                <table className="table-fixed border-collapse rounded-md border border-[#9dbebb] text-center">
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
                            <th>Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event.id}>
                                <td>{event.title}</td>
                                <td>{event.description}</td>
                                <td>{event.type}</td>
                                {event.team_id ? (
                                    <td>{event.team_id}</td>
                                ) : (
                                    <td> Everyone</td>
                                )}
                                <td>{event.date}</td>
                                <td>{event.time}</td>
                                <td>{event.address}</td>
                                <td>{event.post_code}</td>
                                <td>
                                    <Link
                                        className="pr-1"
                                        href={`/admin/event/edit/${event.id}`}
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
        </>
    );
}

export default EventTable;
