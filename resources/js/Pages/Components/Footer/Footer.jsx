function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative text-white">
            {/* Background Accents */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(30rem 18rem at 25% 20%, rgba(37,99,235,0.18), transparent 60%), radial-gradient(26rem 16rem at 80% 50%, rgba(250,204,21,0.12), transparent 60%)",
                    filter: "blur(8px)",
                }}
            />
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center md:grid-cols-3 lg:grid-cols-4">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-2">
                        <div className="flex items-center">
                            <img
                                className="h-14 w-16"
                                src="/storage/assets/logo.png"
                                alt="Logo"
                            />
                            <h2 className="ml-3 text-2xl font-bold text-white">
                                Be Active{" "}
                                <span className="text-yellow-400">
                                    Football Academy
                                </span>
                            </h2>
                        </div>
                        <p className="mt-4 max-w-md text-lg leading-relaxed font-light text-blue-100/90">
                            Your premier destination for football training and
                            competition in Peterborough, UK. Excellence through
                            passion and dedication.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex space-x-4">
                            <a
                                href="https://www.facebook.com/people/Be-Active-Football-Academy/100083073291647/"
                                rel="noreferrer"
                                target="_blank"
                                className="social_icon rounded-lg bg-blue-900/30 p-2 ring-1 ring-blue-300/10 backdrop-blur-md transition hover:bg-blue-900/50"
                                aria-label="Facebook"
                            >
                                <img
                                    alt="Facebook"
                                    src="/storage/assets/socials/facebook.svg"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/beactivefootballacademy/"
                                rel="noreferrer"
                                target="_blank"
                                className="social_icon rounded-lg bg-blue-900/30 p-2 ring-1 ring-blue-300/10 backdrop-blur-md transition hover:bg-blue-900/50"
                                aria-label="Instagram"
                            >
                                <img
                                    alt="Instagram"
                                    src="/storage/assets/socials/instagram.svg"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lukasz-stachowiak-74318423b/"
                                rel="noreferrer"
                                target="_blank"
                                className="social_icon rounded-lg bg-blue-900/30 p-2 ring-1 ring-blue-300/10 backdrop-blur-md transition hover:bg-blue-900/50"
                                aria-label="LinkedIn"
                            >
                                <img
                                    alt="LinkedIn"
                                    src="/storage/assets/socials/linkedIn.svg"
                                />
                            </a>
                            <a
                                href="https://www.tiktok.com/@bafateam22oficial"
                                rel="noreferrer"
                                target="_blank"
                                className="social_icon rounded-lg bg-blue-900/30 p-2 ring-1 ring-blue-300/10 backdrop-blur-md transition hover:bg-blue-900/50"
                                aria-label="TikTok"
                            >
                                <img
                                    alt="TikTok"
                                    src="/storage/assets/socials/tiktok.svg"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UC_OVY2_01d84rF-Id7COWwg"
                                rel="noreferrer"
                                target="_blank"
                                className="social_icon rounded-lg bg-blue-900/30 p-2 ring-1 ring-blue-300/10 backdrop-blur-md transition hover:bg-blue-900/50"
                                aria-label="Youtube"
                            >
                                <img
                                    alt="Youtube"
                                    src="storage/assets/socials/youtube.svg"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-200/10 bg-blue-950/70 backdrop-blur-md">
                <div className="container mx-auto flex flex-col justify-between px-4 py-6 md:flex-row md:items-center">
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                        <a
                            href="#"
                            className="text-sm text-blue-200/80 transition-colors hover:text-yellow-300"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-blue-200/80 transition-colors hover:text-yellow-300"
                        >
                            Terms and Conditions
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-blue-200/70 md:mt-0">
                        &copy; {currentYear} Be Active Football Academy - All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
