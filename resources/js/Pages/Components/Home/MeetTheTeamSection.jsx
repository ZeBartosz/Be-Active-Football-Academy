function MeetTheTeamSection({ staff }) {
    const allTeamMembers = [
        ...staff.staff.map((member) => ({
            ...member,
            fullName: `${member.user.first} ${member.user.last_name}`,
            position: member.role,
            image: member.image,
        })),
        ...staff.coaches.map((coach) => ({
            ...coach,
            fullName: `${coach.user.first_name} ${coach.user.last_name}`,
            position: "Coach",
            image: coach.image,
        })),
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="mb-16 text-center">
                    <h1 className="text-primary mb-6 text-5xl font-bold md:text-6xl">
                        Meet Our Team
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-700">
                        Our highly qualified coaches are passionate about youth
                        development, combining football expertise with child
                        development knowledge.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {allTeamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="transform overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex flex-col items-center p-6">
                                <div className="relative mb-6">
                                    <div className="border-primary h-40 w-40 overflow-hidden rounded-full border-4">
                                        <img
                                            src={member.image}
                                            alt={member.fullName}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h2 className="text-primary mb-2 text-2xl font-bold">
                                    {member.fullName}
                                </h2>
                                <p className="mb-2 text-lg font-medium text-gray-800">
                                    {member.position}
                                </p>
                                {member.skills && (
                                    <p className="text-center text-gray-600">
                                        {member.skills}
                                    </p>
                                )}
                                {member.about && (
                                    <p className="mt-3 line-clamp-3 text-center text-gray-600">
                                        {member.about}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MeetTheTeamSection;
