import UserTable from "../Components/AdminComp/UserTable.jsx";
import { Link } from "@inertiajs/react";
import CoachTable from "../Components/AdminComp/CoachTable.jsx";
import TeamTable from "../Components/AdminComp/TeamTable.jsx";
import PlayerTable from "../Components/AdminComp/PlayerTable.jsx";

export default function Dashboard({ users, coaches, teams, players }) {
    return (
        <>
            <h1> this is an admin page </h1>
            <Link
                className="pr-1"
                href="/admin/team"
                method="get"
                type="button"
            >
                Add Team
            </Link>
            <Link
                className="pr-1"
                href="/admin/event"
                method="get"
                type="button"
            >
                Add Event
            </Link>

            <UserTable users={users} />
            <PlayerTable players={players} />
            <CoachTable coaches={coaches} />
            <TeamTable teams={teams} />
        </>
    );
}
