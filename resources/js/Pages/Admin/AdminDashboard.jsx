import UserTable from "../Components/AdminComp/UserTable.jsx";
import CoachTable from "../Components/AdminComp/CoachTable.jsx";
import TeamTable from "../Components/AdminComp/TeamTable.jsx";
import PlayerTable from "../Components/AdminComp/PlayerTable.jsx";
import EventTable from "../Components/AdminComp/EventTable.jsx";

export default function AdminDashboard({
    users,
    coaches,
    teams,
    players,
    events,
}) {
    return (
        <>
            <div className="mx-auto my-10 h-screen w-[70%]">
                <h1> this is an admin page </h1>

                <UserTable users={users} />
                <PlayerTable players={players} />
                <CoachTable coaches={coaches} />
                <TeamTable teams={teams} />
                <EventTable events={events} />
            </div>
        </>
    );
}
