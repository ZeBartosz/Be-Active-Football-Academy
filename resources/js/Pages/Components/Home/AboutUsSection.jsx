function AboutUsSection() {
    return (
        <>
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
        </>
    );
}

export default AboutUsSection;
