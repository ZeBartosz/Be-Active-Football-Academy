import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.tsx";
import useData from "../../hooks/useData.tsx";
import type { Pagination, Event, Link as LinkType } from "../../types/index";

interface EventTableProps {
    activeTab: string;
    tableId: string;
}

export default function EventTable({ activeTab, tableId }: EventTableProps) {
    const {
        data: events,
        loading,
        error,
        setUrl,
    } = useData<Pagination<Event>>(
        route("api.admin.events"),
        activeTab === tableId,
    );

    if (activeTab !== tableId) return null;
    if (!events && loading)
        return <div className="text-center">Loading...</div>;
    if (!events && error)
        return <div className="text-center">Error: {error}</div>;

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
                        {events?.data.map((event) => (
                            <tr key={event.id}>
                                <td>{event.title}</td>
                                <td>{event.description}</td>
                                <td>{event.type}</td>
                                <td>
                                    {event.team
                                        ? event.team.team_name
                                        : "Everyone"}
                                </td>
                                <td>{event.date.toString()}</td>
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
                    {events?.links?.map((link: LinkType, idx: number) => (
                        <button
                            key={idx}
                            type="button"
                            disabled={!link.url}
                            onClick={() => link.url && setUrl(link.url)}
                            className={`rounded px-3 py-1 ${
                                link.active
                                    ? "bg-secondary text-black"
                                    : link.url
                                      ? "bg-primary hover:bg-secondary text-white hover:text-black"
                                      : "cursor-not-allowed bg-gray-300 text-gray-500"
                            }`}
                        >
                            <span
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
