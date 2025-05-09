function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white">
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
                                <span className="text-secondary">
                                    Football Academy
                                </span>
                            </h2>
                        </div>
                        <p className="mt-4 max-w-md text-lg leading-relaxed font-light text-gray-300">
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
                                className="social_icon"
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
                                className="social_icon"
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
                                className="social_icon"
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
                                className="social_icon"
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
                                className="social_icon"
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
            <div className="border-t border-gray-800 bg-black/80">
                <div className="container mx-auto flex flex-col justify-between px-4 py-6 md:flex-row md:items-center">
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                        <a
                            href="#"
                            className="hover:text-secondary text-sm text-gray-400 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-secondary text-sm text-gray-400 transition-colors"
                        >
                            Terms and Conditions
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 md:mt-0">
                        &copy; {currentYear} Be Active Football Academy - All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
