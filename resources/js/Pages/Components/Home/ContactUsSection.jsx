function ContactUsSection() {
    return (
        <section className="bg-primary">
            <div className="home_container flex flex-wrap text-white">
                <div className="max-w-1/2">
                    <h1 className="pt-20 text-6xl font-bold">
                        Ready To Join Us?
                    </h1>
                    <p className="py-3 text-2xl font-light text-wrap">
                        Take the first step in your child's football journey.
                        Contact us to arrange a free trial session or to learn
                        more about our programs.
                    </p>
                    <div className="flex flex-col pb-20 pl-2">
                        <div className="flex">
                            <img
                                src="/storage/assets/icons/location.svg"
                                alt="Location Icon"
                            />
                            <div className="flex flex-col pt-3 pl-5">
                                <h1 className="text-2xl font-bold">Location</h1>
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
                                <h1 className="text-2xl font-bold">Call us</h1>
                                <p className="text-xl font-light">1234567890</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src="/storage/assets/icons/email.svg"
                                alt="Email Icon"
                            />
                            <div className="flex flex-col pt-3 pl-5">
                                <h1 className="text-2xl font-bold">Email</h1>
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
    );
}

export default ContactUsSection;
