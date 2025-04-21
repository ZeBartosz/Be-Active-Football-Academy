function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="text-accent m-auth flex w-full flex-col justify-center bg-black p-4 text-center">
                <div className="flex items-center justify-center p-2">
                    <div className="footer_containers">
                        <div className="flex items-center justify-center">
                            <img
                                src="/storage/coaches/default_pfp.png"
                                alt="Logo"
                                width="50px"
                                height="50px"
                            />
                            <h1 className="p-1 text-center text-2xl font-bold">
                                Be Active Football Academy
                            </h1>
                        </div>
                        <p className="text-lg font-light">
                            Your premier destination for football training and
                            competition.
                        </p>
                    </div>
                    <div className="footer_containers">
                        <p className="text-lg font-light">
                            Follow us on social media:
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.facebook.com/BeActiveFootballAcademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-secondary"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/BeActiveFootballAcademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-secondary"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://twitter.com/BeActiveFootballAcademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-secondary"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
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
