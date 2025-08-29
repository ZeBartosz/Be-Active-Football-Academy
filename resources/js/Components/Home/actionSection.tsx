import { Link } from "@inertiajs/react";

export default function ActionSection() {
    return (
        <>
            <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/30 to-yellow-400/20 p-8 ring-1 ring-blue-300/10">
                    <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
                    <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                Join the Academy
                            </h3>
                            <p className="mt-2 max-w-2xl text-blue-50/90">
                                Become part of a growing community that
                                champions development, teamwork, and fun.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href={route("auth.login")}
                                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:shadow-yellow-400/20 focus:ring-2 focus:ring-yellow-300/40 focus:outline-none"
                            >
                                Join Now
                            </Link>
                            <Link
                                href={route("faq.index")}
                                className="inline-flex items-center justify-center rounded-xl bg-blue-900/30 px-6 py-3 text-base font-semibold text-white/90 ring-1 ring-blue-300/10 backdrop-blur-md transition hover:bg-blue-900/50"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
