import { Link, usePage } from "@inertiajs/react";

function ProgramGroupSection({ programs }) {
    const { authUser } = usePage().props;

    return (
        <section className="bg-primary relative py-24 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h1 className="mb-3 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
                        Our Programs
                    </h1>
                    <div className="bg-secondary mx-auto mb-6 h-1 w-24 rounded-full"></div>

                    <p className="mx-auto mt-6 max-w-3xl text-2xl leading-relaxed font-light text-white/80">
                        We provide age-appropriate coaching to ensure every
                        child develops at their own pace, with programs designed
                        to match their physical and cognitive development.
                    </p>
                </div>

                <div className="flex flex-col space-y-12">
                    {programs.map((program, index) => (
                        <div
                            key={program.id}
                            className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
                        >
                            <div
                                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                            >
                                {/* Image Section */}
                                <div className="relative lg:w-1/2">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="h-64 w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent lg:hidden"></div>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col justify-center p-8 lg:w-1/2">
                                    <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
                                        {program.title}
                                    </h3>
                                    <p className="mb-6 text-base leading-relaxed font-light text-white/80">
                                        {program.description}
                                    </p>

                                    <Link
                                        href={route(
                                            "program_group.show",
                                            program.id,
                                        )}
                                        className="group bg-secondary hover:bg-secondary/90 mt-2 flex w-fit items-center rounded-full px-5 py-2 text-black transition-colors"
                                    >
                                        Learn more
                                        <svg
                                            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProgramGroupSection;
