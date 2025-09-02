import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";
import useData from "../../hooks/useData.tsx";
import type { Link as LinkType, Pagination, Player } from "../../types/index";

interface PlayerTableProps {
    activeTab: string;
    tableId: string;
}

export default function PlayerTable({ activeTab, tableId }: PlayerTableProps) {
    const {
        data: players,
        loading,
        error,
        setUrl,
    } = useData<Pagination<Player>>(
        route("api.admin.players"),
        activeTab === tableId,
    );

    if (activeTab !== tableId) return null;
    if (!players && loading)
        return <div className="text-center">Loading...</div>;
    if (!players && error)
        return <div className="text-center">Error: {error}</div>;

    return (
        <div>
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DoB</th>
                            <th>Address</th>
                            <th>Post Code</th>
                            <th>Team Name</th>
                            <th>Guardian</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players?.data.map((player: Player) => (
                            <tr key={player.id}>
                                <td>{player.first_name}</td>
                                <td>{player.last_name}</td>
                                <td>{player.date_of_birth.toString()}</td>
                                <td>{player.address}</td>
                                <td>{player.post_code}</td>
                                <td>{player.team.team_name}</td>
                                <td>
                                    {`${player.user.first_name} ${player.user.last_name}`}
                                </td>
                                <td>
                                    <Link
                                        href={route("player.edit", {
                                            player: player.id,
                                        })}
                                        className="btn-sm btn-yellow"
                                    >
                                        Edit
                                    </Link>
                                    <ConfirmButton
                                        id={player.id}
                                        routeName="player.destroy"
                                        routeParamKey="player"
                                        className="btn-sm btn-red"
                                        method="delete"
                                        children="Delete"
                                        message="Are you sure you want delete this player?"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="my-4 flex justify-center space-x-2">
                    {players?.links.map((link: LinkType, idx: number) => (
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
