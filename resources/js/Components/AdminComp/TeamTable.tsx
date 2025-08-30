import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";
import useData from "../../hooks/useData.tsx";
import type { Pagination, Team, Link as LinkType } from "../../types/index";

interface TeamTableProps {
    activeTab: string;
    tableId: string;
}

export default function TeamTable({ activeTab, tableId }: TeamTableProps) {
    const {
        data: teams,
        loading,
        error,
        setUrl,
    } = useData<Pagination<Team>>(
        route("api.admin.teams"),
        activeTab === tableId,
    );

    if (activeTab !== tableId) return null;
    if (!teams && loading) return <div className="text-center">Loading...</div>;
    if (!teams && error)
        return <div className="text-center">Error: {error}</div>;

    return (
        <div>
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Player Count</th>
                            <th>Event Count</th>
                            <th>Coaches</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams?.data.map((team: Team) => (
                            <tr key={team.id}>
                                <td>{team.team_name}</td>
                                <td>{team.players_count}</td>
                                <td>{team.events_count}</td>
                                <td className="group relative px-3 py-2">
                                    <span className="cursor-default">
                                        {team.staff?.length}
                                    </span>
                                    {team?.staff?.length &&
                                        team?.staff.length > 0 && (
                                            <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white shadow-lg group-hover:block">
                                                {team.staff?.map((c) => (
                                                    <div key={c.id}>
                                                        {c.user.first_name}{" "}
                                                        {c.user.last_name}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                </td>
                                <td>
                                    <Link
                                        href={route("team.edit", {
                                            team: team.id,
                                        })}
                                        className="btn-sm btn-yellow"
                                    >
                                        Edit
                                    </Link>

                                    <ConfirmButton
                                        id={team.id}
                                        routeName="team.destroy"
                                        routeParamKey="team"
                                        className="btn-sm btn-red"
                                        method="delete"
                                        children="Delete"
                                        message="Are you sure you want delete this team?"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="my-4 flex justify-center space-x-2">
                    {teams?.links?.map((link: LinkType, idx: number) => (
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
