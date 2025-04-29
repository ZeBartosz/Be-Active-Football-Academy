export default function PlayerList({ players }) {
    console.log(players.data);
    return (
        <div>
            <h1 className="text-primary text-center text-4xl font-bold">
                Player List
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {players.data.map((player) => (
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
                    </div>
                ))}
            </div>
        </div>
    );
}
