import Background from "../Background/Background.jsx";
import { Link, usePage } from "@inertiajs/react";

function MainSection({ background }) {
    const { authUser } = usePage().props;

    return (
        <>
            <section className="relative h-screen">
                <Background background={null} />
                <div className="home_container relative z-10 h-full flex-col text-white">
                    <h1 className="p-2 text-8xl font-bold">
                        Be Active <br /> Be healthy <br /> Be Happy
                    </h1>
                    <p className="p-2 text-2xl font-light">
                        Step up your play! Enroll at Be Active Football Academy
                        for premier training and top-tier competition.
                    </p>
                    <div className="p-2">
                        {authUser ? (
                            ""
                        ) : (
                            <button className="bg-secondary mr-2 rounded px-4 py-2 text-2xl text-black shadow-lg">
                                <Link href={route("auth.register")}>
                                    Join Our Academy
                                </Link>
                            </button>
                        )}
                        <button className="bg-accent mr-2 rounded px-4 py-2 text-2xl text-black shadow-lg">
                            <Link href={route("faq.index")}>Learn More</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainSection;
