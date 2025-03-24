import AdminUserTable from "../Components/AdminUserTable.jsx";
import { Link } from "@inertiajs/react";

export default function Dashboard({ users }) {
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

            <AdminUserTable users={users} />
        </>
    );
}
