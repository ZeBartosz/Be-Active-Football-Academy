function ContactUsSection() {
    return (
        <section className="bg-primary py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <div className="max-w-xl">
                            <h2 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
                                Ready To{" "}
                                <span className="text-secondary">Join Us?</span>
                            </h2>
                            <div className="bg-secondary mt-4 h-1 w-full rounded-full"></div>

                            <p className="mx-auto mt-6 max-w-3xl text-2xl leading-relaxed font-light text-white/80">
                                Take the first step in your child's football
                                journey. Contact us to arrange a free trial
                                session or to learn more about our programs.
                            </p>

                            <div className="mt-10 space-y-6">
                                <div className="flex items-start">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-3">
                                        <img
                                            src="/storage/assets/icons/location.svg"
                                            alt="Location Icon"
                                            className="h-6 w-6"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-secondary text-xl font-semibold">
                                            Location
                                        </h3>
                                        <p className="mt-1 text-lg font-light text-white/80">
                                            Peterborough, UK
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-3">
                                        <img
                                            src="/storage/assets/icons/phone.svg"
                                            alt="Phone Icon"
                                            className="h-6 w-6"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-secondary text-xl font-semibold">
                                            Call us
                                        </h3>
                                        <p className="mt-1 text-lg font-light text-white/80">
                                            1234567890
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-3">
                                        <img
                                            src="/storage/assets/icons/email.svg"
                                            alt="Email Icon"
                                            className="h-6 w-6"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-secondary text-xl font-semibold">
                                            Email
                                        </h3>
                                        <p className="mt-1 text-lg font-light text-white/80">
                                            beActiveFootball@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2">
                        <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)]">
                            <img
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                src="/storage/coaches/joinus.webp"
                                alt="Join our football academy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsSection;
