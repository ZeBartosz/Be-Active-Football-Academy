import { Link } from "@inertiajs/react";

export default function TotalCount({ userCount, coachCount, playerCount }) {
    return (
        <div>
            <div className="mb-6 flex justify-between space-x-4">
                <h1 className="text-primary text-4xl font-bold">
                    Total Amounts
                </h1>
                <div className="flex">
                    <Link
                        href={route("team.create")}
                        className="btn-sm btn-yellow"
                        method="get"
                        type="button"
                    >
                        + Add Team
                    </Link>
                    <Link
                        href={route("event.create")}
                        className="btn-sm btn-yellow"
                        method="get"
                        type="button"
                    >
                        + Add Event
                    </Link>
                </div>
            </div>

            <div className="total-container">
                <h2 className="total-subTitle">Total Users: {userCount}</h2>
            </div>
            <div className="total-container">
                <h2 className="total-subTitle">Total Coaches: {coachCount}</h2>
            </div>
            <div className="total-container">
                <h2 className="total-subTitle">Total Players: {playerCount}</h2>
            </div>
        </div>
    );
}
