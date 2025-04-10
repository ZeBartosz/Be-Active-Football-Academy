import { Link } from "@inertiajs/react";

function CoachTable({ coaches }) {
    return (
        <>
            <h1>This is a coaches table</h1>
            <div className="bg-opacity-75 mt-5 flex flex-col justify-center bg-[#05283d] text-white">
                <table className="table-fixed border-collapse rounded-md border border-[#9dbebb] text-center">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>about</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coaches.map((coach) => (
                            <tr key={coach.id}>
                                <td>
                                    <img src={coach.avatar} width="50" />
                                </td>
                                <td>{coach.first_name}</td>
                                <td>{coach.last_name}</td>
                                <td>{coach.email}</td>
                                <td>{coach.about}</td>
                                <td>
                                    <Link
                                        className="pr-1"
                                        href={route("coach.edit", {
                                            user: coach.user_id,
                                        })}
                                        method="get"
                                        type="button"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CoachTable;
