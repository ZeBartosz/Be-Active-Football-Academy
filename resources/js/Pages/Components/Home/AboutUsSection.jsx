function AboutUsSection() {
    return (
        <section className="font-display bg-gray-50 py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-primary text-3xl font-bold sm:text-4xl md:text-5xl">
                        About Us
                    </h2>
                    <div className="bg-secondary mx-auto mt-4 h-1 w-24 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Mission Card */}
                    <div className="about_container">
                        <div className="p-8">
                            <div className="about_icon_container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-primary h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="about_title">Our Mission</h3>
                            <p className="about_text">
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
                    </div>

                    {/* Facilities Card */}
                    <div className="about_container">
                        <div className="p-8">
                            <div className="about_icon_container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-primary h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="about_title">Our Facilities</h3>
                            <p className="about_text">
                                We are using a wide range of top-quality
                                facilities including Peterborough United's
                                training facility, Thomas Deacon Academy and
                                Vivacity venues. These great facilities are
                                inspiring players to try their best on every
                                training session and making them want to return
                                for more.
                            </p>
                        </div>
                    </div>

                    {/* Programmes Card */}
                    <div className="about_container">
                        <div className="p-8">
                            <div className="about_icon_container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-primary h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <h3 className="about_title">Our Programmes</h3>
                            <p className="about_text">
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
            </div>
        </section>
    );
}

export default AboutUsSection;
