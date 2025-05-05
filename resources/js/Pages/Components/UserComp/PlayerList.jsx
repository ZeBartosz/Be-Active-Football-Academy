import { Link } from "@inertiajs/react";
import ConfirmButton from "../Confirmation/ConfirmButton.jsx";

export default function PlayerList({ players }) {
    const shouldScroll = players.length > 3;

    return (
        <div>
            <div className="flex justify-between pb-1">
                <h1 className="text-primary text-center text-4xl font-bold">
                    Player List
                </h1>
                <Link
                    href={route("player.create")}
                    className="btn-sm btn-yellow"
                    method="get"
                    type="button"
                >
                    + Add Player
                </Link>
            </div>

            <div
                className={`${shouldScroll ? "max-h-[550px] overflow-y-auto" : ""} space-y-4`}
            >
                {players.map((player) => (
                    <div
                        key={player.id}
                        className="rounded-lg border p-4 shadow-md"
                    >
                        <h2 className="text-xl font-semibold">
                            {player.first_name} {player.last_name}
                        </h2>
                        <p>{player.team.team_name}</p>
                        <p>{player.date_of_birth}</p>
                        <p>{player.address}</p>
                        <p>{player.post_code}</p>
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
                            message="Are you sure you want to delete this player?"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
