import { Link, usePage } from "@inertiajs/react";

function TopNavBar() {
    const { authUser } = usePage().props;

    return (
        <>
            <nav className="shadow- flex flex-wrap justify-between px-8 py-2 shadow-2xl">
                <div className="flex items-center">
                    <Link href="/" className="top_navbar_link">
                        <img
                            src="https://img1.wsimg.com/isteam/ip/fc1e157d-0b27-43a1-8eb8-6eb4a390d896/Transparent1.png/:/rs=w:50,h:50,cg:true,m/cr=w:200,h:200/qt=q:95"
                            alt="logo"
                        />
                    </Link>
                    <h1 className="top_navbar_link text-2xl font-bold">
                        Be Active Football Academy
                    </h1>
                </div>
                <div className="flex items-center">
                    {authUser ? (
                        <>
                            <Link className="top_navbar_link" href="/">
                                <h1>{authUser.first_name}</h1>
                            </Link>
                            <Link
                                className="top_navbar_link"
                                href={route("player.create")}
                                method="get"
                                type="button"
                            >
                                Add player
                            </Link>
                            <Link
                                href={route(`faq.index`)}
                                className="top_navbar_link"
                            >
                                FAQ
                            </Link>
                            {authUser.is_admin ? (
                                <>
                                    <Link
                                        className="top_navbar_link"
                                        href={route("admin.index")}
                                        method="get"
                                        type="button"
                                    >
                                        Admin Dashboard
                                    </Link>
                                </>
                            ) : (
                                ""
                            )}
                            {authUser.is_coach ? (
                                <>
                                    <Link
                                        className="top_navbar_link"
                                        href={route("coach.edit", {
                                            user: authUser.id,
                                        })}
                                        method="get"
                                        type="button"
                                    >
                                        Edit coach
                                    </Link>
                                </>
                            ) : (
                                ""
                            )}
                            <Link
                                className="top_navbar_link"
                                href={route(`auth.logout`)}
                                method="post"
                                type="button"
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route(`faq.index`)}
                                className="top_navbar_link"
                            >
                                FAQ
                            </Link>
                            <Link href={"/"} className="top_navbar_link">
                                Coach
                            </Link>
                            <Link href={"/"} className="top_navbar_link">
                                Programs
                            </Link>

                            <button className="bg-primary font-display hover:bg-primary/95 ml-1 rounded-md border p-2 text-sm text-black text-white">
                                <Link href={route(`auth.login`)} c>
                                    Join Now
                                </Link>
                            </button>
                            <h1 className="top_navbar_link">More</h1>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}

export default TopNavBar;
