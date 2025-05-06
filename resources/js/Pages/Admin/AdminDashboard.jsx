import UserTable from "../Components/AdminComp/UserTable.jsx";
import CoachTable from "../Components/AdminComp/CoachTable.jsx";
import TeamTable from "../Components/AdminComp/TeamTable.jsx";
import PlayerTable from "../Components/AdminComp/PlayerTable.jsx";
import EventTable from "../Components/AdminComp/EventTable.jsx";
import { useState } from "react";
import TotalCount from "../Components/AdminComp/TotalCount.jsx";
import NextEvents from "../Components/AdminComp/NextEvents.jsx";
import StuffTable from "../Components/AdminComp/StuffTable.jsx";

export default function AdminDashboard({
    users,
    coaches,
    stuff,
    teams,
    players,
    events,
    userCount,
    coachCount,
    playerCount,
    nextEvent,
}) {
    const [activeTab, setActiveTab] = useState("users");

    return (
        <>
            <div className="font-display mx-auto my-10 w-[70%]">
                <h1 className="text-primary text-center text-4xl font-bold">
                    Admin Dashboard
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    <TotalCount
                        userCount={userCount}
                        coachCount={coachCount}
                        playerCount={playerCount}
                    />
                    <div className="col-span-2">
                        <NextEvents events={nextEvent} />
                    </div>
                </div>
                <div className="mb-4 flex justify-evenly border-b">
                    {[
                        { key: "users", label: "Users" },
                        { key: "stuff", label: "Stuff" },
                        { key: "coaches", label: "Coaches" },
                        { key: "players", label: "Players" },
                        { key: "teams", label: "Teams" },
                        { key: "events", label: "Events" },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`relative px-4 py-2 text-2xl font-medium ${
                                activeTab === key
                                    ? "text-primary border-accent border-b-4"
                                    : "hover:text-primary"
                            } `}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <UserTable
                    users={users}
                    activeTab={activeTab}
                    tableId={"users"}
                />
                <PlayerTable
                    players={players}
                    activeTab={activeTab}
                    tableId={"players"}
                />
                <CoachTable
                    coaches={coaches}
                    activeTab={activeTab}
                    tableId={"coaches"}
                />
                <TeamTable
                    teams={teams}
                    activeTab={activeTab}
                    tableId={"teams"}
                />
                <EventTable
                    events={events}
                    activeTab={activeTab}
                    tableId={"events"}
                />
                <StuffTable
                    stuff={stuff}
                    activeTab={activeTab}
                    tableId={"stuff"}
                />
            </div>
        </>
    );
}
