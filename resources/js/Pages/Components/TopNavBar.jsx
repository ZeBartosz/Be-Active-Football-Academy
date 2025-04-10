import { Link, usePage } from "@inertiajs/react";

function TopNavBar() {
    const { authUser } = usePage().props;

    return (
        <>
            <nav className="flex">
                {authUser ? (
                    <>
                        <Link className="pr-1" href="/">
                            <h1>{authUser.first_name}</h1>
                        </Link>
                        <Link
                            className="pr-1"
                            href={route("player.create")}
                            method="get"
                            type="button"
                        >
                            Add player
                        </Link>
                        <Link href={route(`faq.index`)} className="pr-1">
                            FAQ
                        </Link>
                        {authUser.is_admin ? (
                            <>
                                <Link
                                    className="pr-1"
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
                                    className="pr-1"
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
                            className="pr-1"
                            href={route(`auth.logout`)}
                            method="post"
                            type="button"
                        >
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href={route(`auth.login`)} className="pr-1">
                            Login
                        </Link>
                        <Link href={route(`auth.register`)} className="pr-1">
                            Register
                        </Link>
                        <Link href={route(`faq.index`)} className="pr-1">
                            FAQ
                        </Link>
                    </>
                )}
            </nav>
        </>
    );
}

export default TopNavBar;
