import { Link, usePage } from "@inertiajs/react";

function ProgramGroupSection({ programs }) {
    const { authUser } = usePage().props;

    return (
        <section className="bg-primary text-white">
            <div className="home_container pb-20">
                <div className="flex flex-col items-center justify-center pt-20">
                    <div className="flex w-full flex-col items-center justify-center">
                        <h1 className="text-center text-7xl">Our Programs</h1>
                        {authUser?.is_admin && (
                            <Link
                                href={route("program_group.create")}
                                className="btn-yellow mt-1 p-2 text-lg"
                            >
                                + Add Program Group
                            </Link>
                        )}
                    </div>
                    <p className="py-3 text-center text-2xl font-light">
                        We provide age-appropriate coaching to ensure every
                        child develops at their own pace, with programs designed
                        to match their physical and cognitive development.
                    </p>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {programs.map((program) => (
                            <>
                                <Link
                                    key={program.id}
                                    href={route(
                                        "program_group.show",
                                        program.id,
                                    )}
                                    className="group relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg bg-white text-black shadow-lg transition duration-300 ease-in-out hover:scale-105"
                                >
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-300 ease-in-out group-hover:scale-110"
                                    />
                                    <div className="relative z-10 p-6 text-center">
                                        <h2 className="text-2xl font-bold">
                                            {program.title}
                                        </h2>
                                        <p className="mt-4 text-lg font-light">
                                            {program.description}
                                        </p>
                                    </div>
                                    {authUser?.is_admin && (
                                        <>
                                            <div className="absolute top-2 right-2 flex flex-col space-y-1">
                                                <Link
                                                    href={route(
                                                        "program_group.edit",
                                                        program.id,
                                                    )}
                                                    className="btn-sm btn-yellow"
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                >
                                                    Update
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "program_group.destroy",
                                                        program.id,
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="btn-sm btn-red"
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </Link>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgramGroupSection;
