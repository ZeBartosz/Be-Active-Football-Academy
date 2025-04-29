import NextEvents from "../Components/AdminComp/NextEvents.jsx";
import PlayerList from "../Components/UserComp/PlayerList.jsx";

export default function userDashboard({ user, players, nextEvents }) {
    console.log(nextEvents);
    return (
        <div className="font-display mx-auto flex h-screen w-[70%] flex-col">
            <h1 className="text-primary text-center text-4xl font-bold">
                User Dashboard
            </h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-auto">
                    <PlayerList players={players} />
                </div>
                <div className="col-span-2">
                    <NextEvents events={nextEvents} />
                </div>
            </div>
        </div>
    );
}
