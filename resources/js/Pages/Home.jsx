import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <section className="relative h-screen">
                {/* Background container */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/storage/coaches/default_pfp.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-[rgba(10,76,173,0.95)]"></div>
                </div>

                {/* content */}
                <div className="font-display relative z-10 m-auto flex h-full w-[70%] flex-col justify-center text-white">
                    <h1 className="p-2 text-8xl font-bold">
                        Be Active <br /> Be healthy <br /> Be Happy
                    </h1>
                    <p className="p-2 text-2xl font-light">
                        Step up your play! Enroll at Be Active Football Academy
                        for premier training and top-tier competition.
                    </p>
                    <div className="p-2">
                        <button className="bg-secondary mr-2 rounded px-4 py-2 text-2xl text-black shadow-lg">
                            <Link href={route("auth.register")}>
                                Join Our Academy
                            </Link>
                        </button>
                        <button className="bg-accent mr-2 rounded px-4 py-2 text-2xl text-black shadow-lg">
                            <Link href={route("faq.index")}>Learn More</Link>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <h1 className="bg-yellow-200 p-2 text-3xl font-bold underline">
                    Hello
                </h1>
            </section>
        </>
    );
}
