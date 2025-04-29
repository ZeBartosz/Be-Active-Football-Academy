import { Link, usePage } from "@inertiajs/react";
import Background from "./Components/Background/Background.jsx";

export default function Home() {
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

            <section>
                <div className="home_container flex-col">
                    <div className="flex flex-col items-center justify-center pt-20">
                        <h1 className="text-primary text-center text-7xl">
                            About Us
                        </h1>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pb-20">
                        <div className="col-span-1">
                            <h1 className="text-primary pt-20 text-6xl font-bold">
                                Our Mission
                            </h1>
                            <p className="text-2xl">
                                Be Active Football Academy is dedicated to
                                promoting physical activity and healthy
                                lifestyles within the community. We strive to
                                create a welcoming environment that fosters
                                personal growth, teamwork, and social
                                connections. Through our programmes and
                                facilities, we aim to empower individuals to
                                reach their full potential.
                            </p>
                        </div>
                        <div className="col-span-1">
                            <h1 className="text-primary pt-20 text-6xl font-bold">
                                Our Facilities
                            </h1>
                            <p className="text-2xl">
                                We are using a wide range of top-quality
                                facilities including Peterborough United's
                                training facility, Thomas Deacon Academy and
                                Vivacity venues. These great facilities are
                                inspiring players to try their best on every
                                training session and making them want to return
                                for more.
                            </p>
                        </div>
                        <div className="col-span-1">
                            <h1 className="text-primary pt-20 text-6xl font-bold">
                                Our Programmes
                            </h1>
                            <p className="text-2xl">
                                At Be Active Football Academy, we offer programs
                                for people of all ages and skill levels. From
                                youth sports leagues to adult fitness classes,
                                we have something for everyone. Our experienced
                                coaches and instructors are committed to help
                                you achieve your goals and have fun in the
                                process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary text-white">
                <div className="home_container">
                    <div className="flex flex-col items-center justify-center pt-20">
                        <h1 className="text-center text-7xl">Our Programs</h1>
                        <p className="py-3 text-center text-2xl font-light">
                            We provide age-appropriate coaching to ensure every
                            child develops at their own pace, with programs
                            designed to match their physical and cognitive
                            development.
                        </p>
                    </div>
                    <div className="pb-20"></div>
                </div>
            </section>

            <section>
                <div className="home_container">
                    <div className="flex flex-col items-center justify-center pt-20">
                        <h1 className="text-primary text-center text-7xl">
                            Meet Our Team
                        </h1>
                        <p className="py-3 text-center text-2xl font-light">
                            Our highly qualified coaches are passionate about
                            youth development, combining football expertise with
                            child development knowledge.
                        </p>
                    </div>
                    <div className="pb-20"></div>
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
