function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="text-accent m-auth flex w-full flex-col justify-center bg-black p-4 text-center">
                <div className="flex items-center justify-center p-2">
                    <div className="footer_containers">
                        <div className="flex items-center justify-center">
                            <img
                                className="h-14 w-16 pr-2"
                                src="/storage/assets/logo.png"
                                alt="Logo"
                            />
                            <h1 className="p-1 text-center text-2xl font-bold">
                                Be Active Football Academy
                            </h1>
                        </div>
                        <p className="text-lg font-light">
                            Your premier destination for football training and
                            competition.
                        </p>
                        <div>
                            <a
                                className="social_icon"
                                href="https://www.facebook.com/people/Be-Active-Football-Academy/100083073291647/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="Facebook"
                                    src="storage/assets/socials/facebook.svg"
                                />
                            </a>
                            <a
                                className="social_icon"
                                href="https://www.instagram.com/beactivefootballacademy/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="Instagram"
                                    src="storage/assets/socials/instagram.svg"
                                />
                            </a>
                            <a
                                className="social_icon"
                                href="https://www.linkedin.com/in/lukasz-stachowiak-74318423b/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="LinkedIn"
                                    src="storage/assets/socials/linkedIn.svg"
                                />
                            </a>
                            <a
                                className="social_icon"
                                href="https://www.tiktok.com/@bafateam22oficial"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="TikTok"
                                    src="storage/assets/socials/tiktok.svg"
                                />
                            </a>
                            <a
                                className="social_icon"
                                href="https://www.youtube.com/channel/UC_OVY2_01d84rF-Id7COWwg"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="Youtube"
                                    src="storage/assets/socials/youtube.svg"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="footer_containers"></div>
                </div>
                <div className="flex items-center justify-center p-2 text-2xl">
                    <h1 className="p-2">Privacy Policy</h1>
                    <h1 className="p-2">Terms and Conditions</h1>
                </div>
                <hr className="my-4 border-gray-800" />
                <p>
                    &copy; {currentYear} Be Active Football Academy - All Rights
                    Reserved.
                </p>
            </footer>
        </>
    );
}

export default Footer;
