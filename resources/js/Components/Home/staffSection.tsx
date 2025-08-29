import { useState, useEffect } from "react";

export default function StaffSection() {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        axios.get(route("home.staff")).then((response) => {
            setStaff(response.data);
        });
    }, []);

    return (
        <>
            {/* Team Section */}
            {staff.length > 0 && (
                <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Meet the Team
                            </h2>
                            <p className="mt-2 text-blue-200/80">
                                Dedicated coaches and staff driving player
                                development.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {staff.map((member) => (
                            <div
                                key={member.id}
                                className="group rounded-2xl bg-blue-900/30 p-5 ring-1 ring-blue-300/10 transition hover:ring-yellow-300/20"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={
                                            member.avatar ||
                                            "/storage/assets/avatar-fallback.png"
                                        }
                                        alt={
                                            member.user?.first_name ||
                                            member.user?.roles[0]?.name
                                        }
                                        className="h-16 w-16 rounded-xl object-cover ring-1 ring-blue-300/10"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-white">
                                            {member.user?.first_name}{" "}
                                            {member.user?.last_name}
                                        </h3>
                                        <p className="text-sm text-yellow-300/90">
                                            {member.user?.roles[0]?.name}
                                        </p>
                                    </div>
                                </div>
                                {member.about && (
                                    <p className="mt-4 line-clamp-3 text-sm text-blue-200/80">
                                        {member.about}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
