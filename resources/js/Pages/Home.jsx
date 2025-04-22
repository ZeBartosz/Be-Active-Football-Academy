import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <section className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/storage/coaches/default_pfp.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-[rgba(10,76,173,0.95)]"></div>
                </div>
                <div className="home_container relative z-10 h-full flex-col text-white">
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
                <div className="home_container">
                    <h1 className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, cumque! Quisquam, voluptatibus. Quod,
                        cumque. Quisquam
                    </h1>
                </div>
            </section>

            <section className="bg-primary">
                <div className="home_container flex flex-wrap text-white">
                    <div className="max-w-1/2">
                        <h1 className="pt-20 text-6xl font-bold">
                            Ready To Join Us?
                        </h1>
                        <p className="py-3 text-2xl font-light text-wrap">
                            Take the first step in your child's football
                            journey. Contact us to arrange a free trial session
                            or to learn more about our programs.
                        </p>
                        <div className="flex flex-col pb-20 pl-2">
                            <div className="flex">
                                <img
                                    src="/storage/assets/icons/location.svg"
                                    alt="Location Icon"
                                />
                                <div className="flex flex-col pt-3 pl-5">
                                    <h1 className="text-2xl font-bold">
                                        Location
                                    </h1>
                                    <p className="text-xl font-light">
                                        Peterborough, UK
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <img
                                    src="/storage/assets/icons/phone.svg"
                                    alt="Phone Icon"
                                />
                                <div className="flex flex-col pt-3 pl-5">
                                    <h1 className="text-2xl font-bold">
                                        Call us
                                    </h1>
                                    <p className="text-xl font-light">
                                        1234567890
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <img
                                    src="/storage/assets/icons/email.svg"
                                    alt="Email Icon"
                                />
                                <div className="flex flex-col pt-3 pl-5">
                                    <h1 className="text-2xl font-bold">
                                        Email
                                    </h1>
                                    <p className="text-xl font-light">
                                        beActiveFootball@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-auto flex flex-col items-center justify-center">
                        <img
                            height={300}
                            width={800}
                            className="rounded border shadow-2xs"
                            src="/storage/coaches/joinus.webp"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
