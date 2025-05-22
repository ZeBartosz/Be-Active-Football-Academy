import UserTable from "../Components/AdminComp/UserTable.jsx";
import CoachTable from "../Components/AdminComp/CoachTable.jsx";
import TeamTable from "../Components/AdminComp/TeamTable.jsx";
import PlayerTable from "../Components/AdminComp/PlayerTable.jsx";
import EventTable from "../Components/AdminComp/EventTable.jsx";
import { useState } from "react";
import TotalCount from "../Components/AdminComp/TotalCount.jsx";
import NextEvents from "../Components/AdminComp/NextEvents.jsx";
import StaffTable from "../Components/AdminComp/StaffTable.jsx";

export default function AdminDashboard({ data }) {
    const {
        users,
        coaches,
        staff,
        teams,
        players,
        events,
        userCount,
        coachCount,
        playerCount,
        nextEvent,
    } = data;
    const [activeTab, setActiveTab] = useState("users");

    const tabs = [
        {
            key: "users",
            label: "Users",
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
        },
        {
            key: "stuff",
            label: "Staff",
            icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        },
        {
            key: "coaches",
            label: "Coaches",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        },
        {
            key: "players",
            label: "Players",
            icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        },
        {
            key: "teams",
            label: "Teams",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        },
        {
            key: "events",
            label: "Events",
            icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
    ];

    return (
        <div className="font-display min-h-screen bg-gray-50 pb-12">
            {/* Dashboard Header */}
            <div className="bg-primary mb-8 px-6 py-10 shadow-md">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
                        Admin Dashboard
                    </h1>
                    <div className="bg-secondary mx-auto mt-3 h-1 w-24 rounded-full"></div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4">
                {/* Dashboard Overview Cards */}
                <div className="mb-10 grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <TotalCount
                            userCount={userCount}
                            coachCount={coachCount}
                            playerCount={playerCount}
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <NextEvents events={nextEvent} />
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="mb-8 overflow-x-auto">
                    <div className="inline-flex min-w-full rounded-lg bg-white p-1 shadow-sm">
                        {tabs.map(({ key, label, icon }) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition-all md:text-base ${
                                    activeTab === key
                                        ? "bg-primary text-white shadow-sm"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={icon}
                                    />
                                </svg>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table Container */}
                <div className="rounded-xl bg-white shadow-md">
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
                    <StaffTable
                        staff={staff}
                        activeTab={activeTab}
                        tableId={"stuff"}
                    />
                </div>
            </div>
        </div>
    );
}
