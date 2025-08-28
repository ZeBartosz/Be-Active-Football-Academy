import Background from "../Background/Background.jsx";
import { Link, usePage } from "@inertiajs/react";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function MainSection({}) {
    const { authUser } = usePage().props;

    return (
        <section className="h-screen">
            <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 text-white sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="mb-6 text-5xl font-bold sm:text-6xl md:text-7xl">
                        <span className="block text-white">Be Active</span>
                        <span className="text-secondary block">Be Healthy</span>
                        <span className="block text-white">Be Happy</span>
                    </h1>

                    <p className="mb-2 max-w-xl text-xl leading-relaxed font-light text-gray-100 md:text-2xl">
                        Step up your play! Enroll at Be Active Football Academy
                        for premier training and top-tier competition.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {!authUser && (
                            <Link
                                href={route("auth.register")}
                                className="group bg-secondary flex items-center rounded-lg px-6 py-3 text-lg font-medium text-gray-900 shadow-lg transition-all hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
                            >
                                Join Our Academy
                                <ArrowRightIcon className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                            </Link>
                        )}

                        <Link
                            href={route("faq.index")}
                            className="flex items-center rounded-lg bg-white/20 px-6 py-3 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:outline-none"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="motion-blur-in motion-delay-1000 absolute right-0 bottom-16 left-0 z-10 flex animate-bounce flex-col items-center">
                <span className="mb-1 text-sm font-medium text-white/80">
                    Scroll Down
                </span>
                <ChevronDownIcon className="h-6 w-6 text-white" />
            </div>
        </section>
    );
}

export default MainSection;
