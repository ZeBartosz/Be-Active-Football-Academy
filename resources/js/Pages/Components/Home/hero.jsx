import { Link } from "@inertiajs/react";

export default function Hero() {
    return (
        <section className="relative mx-auto h-svh max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid h-svh items-center gap-10 pl-10 md:grid-cols-2">
                <div>
                    <div className="inline-flex items-center space-x-2 rounded-full bg-blue-900/40 px-3 py-1 ring-1 ring-blue-300/20">
                        <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                        <span className="text-xs font-medium tracking-wide text-blue-100/90">
                            Peterborough, UK
                        </span>
                    </div>
                    <h1 className="mt-5 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
                        Elevate Your Game
                        <span className="block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                            Be Active Football Academy
                        </span>
                    </h1>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100/90">
                        World‑class coaching, elite training programs, and a
                        culture of excellence for all ages and abilities.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href={route("program_group.index")}
                            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:shadow-yellow-400/20 focus:ring-2 focus:ring-yellow-300/40 focus:outline-none"
                        >
                            Explore Programs
                        </Link>
                        <Link
                            href={route("faq.index")}
                            className="inline-flex items-center justify-center rounded-xl bg-blue-900/30 px-6 py-3 text-base font-semibold text-white/90 ring-1 ring-blue-300/10 backdrop-blur-md transition hover:bg-blue-900/50"
                        >
                            FAQs
                        </Link>
                    </div>
                    <div className="mt-8 flex items-center space-x-6 text-sm text-blue-100/80">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/storage/assets/ball.svg"
                                alt="Ball"
                                className="h-5 w-5 opacity-80"
                            />
                            <span>UEFA‑inspired drills</span>
                        </div>
                        <div className="hidden items-center space-x-2 sm:flex">
                            <img
                                src="/storage/assets/shield.svg"
                                alt="Shield"
                                className="h-5 w-5 opacity-80"
                            />
                            <span>Safeguarding first</span>
                        </div>
                    </div>
                </div>

                {/* Visual Card */}
                <div className="relative">
                    <div className="relative mx-auto max-w-md rounded-3xl bg-blue-900/30 p-4 shadow-2xl ring-1 ring-blue-300/10 backdrop-blur-md">
                        <img
                            src="/storage/assets/hero.jpg"
                            alt="Be Active Football Academy training"
                            className="h-72 w-full rounded-2xl object-cover"
                        />
                        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-yellow-400/15 via-blue-500/10 to-transparent blur-2xl" />
                        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-blue-100/80">
                            <div className="rounded-lg bg-blue-950/60 px-3 py-2 ring-1 ring-blue-300/10">
                                Ages 5–18
                            </div>
                            <div className="rounded-lg bg-blue-950/60 px-3 py-2 ring-1 ring-blue-300/10">
                                Elite & Grassroots
                            </div>
                            <div className="rounded-lg bg-blue-950/60 px-3 py-2 ring-1 ring-blue-300/10">
                                Match Days
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
