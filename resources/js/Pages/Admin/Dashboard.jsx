import AdminUserTable from "../Components/AdminUserTable.jsx";

export default function Dashboard({ users }) {
    return (
        <>
            <h1> this is an admin page </h1>

            <AdminUserTable users={users} />
        </>
    );
}
