import UserTable from "../Components/AdminComp/UserTable.jsx";
import { Link } from "@inertiajs/react";
import CoachTable from "../Components/AdminComp/CoachTable.jsx";
import TeamTable from "../Components/AdminComp/TeamTable.jsx";

export default function Dashboard({ users, coaches, teams }) {
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

            <UserTable users={users} />
            <CoachTable coaches={coaches} />
            <TeamTable teams={teams} />
        </>
    );
}
