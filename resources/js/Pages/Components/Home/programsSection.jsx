import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function ProgramsSection() {
    const [programGroups, setProgramGroups] = useState([]);

    useEffect(() => {
        axios.get(route("home.program.groups")).then((response) => {
            setProgramGroups(response.data);
        });
    }, []);

    return (
        <>
            {programGroups.length > 0 && (
                <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Programs
                            </h2>
                            <p className="mt-2 text-blue-200/80">
                                Structured pathways tailored to age and ability.
                            </p>
                        </div>
                        <Link
                            href={route("program_group.index")}
                            className="hidden rounded-xl bg-blue-900/30 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-blue-300/10 hover:bg-blue-900/50 sm:inline-flex"
                        >
                            View all
                        </Link>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {programGroups.slice(0, 6).map((group) => (
                            <div
                                key={group.id}
                                className="group relative overflow-hidden rounded-2xl bg-blue-900/30 ring-1 ring-blue-300/10 transition hover:ring-yellow-300/20"
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={
                                            group.image ||
                                            "/storage/assets/program-fallback.jpg"
                                        }
                                        alt={group.title}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-white">
                                        {group.title}
                                    </h3>
                                    {group.age_range && (
                                        <p className="mt-1 text-sm text-yellow-300/90">
                                            {group.age_range}
                                        </p>
                                    )}
                                    {group.description && (
                                        <p className="mt-3 line-clamp-2 text-sm text-blue-200/80">
                                            {group.description}
                                        </p>
                                    )}
                                    <div className="mt-4">
                                        <Link
                                            href={route("program_group.index")}
                                            className="inline-flex items-center text-sm font-semibold text-yellow-300 hover:text-yellow-200"
                                        >
                                            Learn more
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 sm:hidden">
                        <Link
                            href={route("program_group.index")}
                            className="inline-flex rounded-xl bg-blue-900/30 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-blue-300/10 hover:bg-blue-900/50"
                        >
                            View all
                        </Link>
                    </div>
                </section>
            )}
        </>
    );
}
