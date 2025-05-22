import NextEvents from "../Components/AdminComp/NextEvents.jsx";
import PlayerList from "../Components/UserComp/PlayerList.jsx";

export default function UserDashboard({ user, players, nextEvents }) {
    return (
        <div className="font-display min-h-screen bg-gray-50 px-4 py-10">
            <div className="mx-auto max-w-7xl">
                {/* Dashboard Header */}
                <div className="mb-10">
                    <h1 className="text-primary text-center text-4xl font-bold md:text-5xl">
                        User Dashboard
                    </h1>
                    <div className="bg-secondary mx-auto mt-3 h-1 w-24 rounded-full"></div>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
                        Welcome back, {user.first_name}! Manage your players and
                        stay updated with upcoming events.
                    </p>
                </div>

                {/* Dashboard Content */}
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <PlayerList players={players} />
                    </div>
                    
                    <div className="lg:col-span-2">
                        <NextEvents events={nextEvents} />
                    </div>
                </div>
            </div>
        </div>
    );
}
