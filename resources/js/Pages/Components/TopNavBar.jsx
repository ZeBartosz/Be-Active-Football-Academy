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
                            href="/player"
                            method="get"
                            type="button"
                        >
                            Add player
                        </Link>
                        {authUser.is_admin ? (
                            <>
                                <Link
                                    className="pr-1"
                                    href="/admin"
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
                                    href={`/coach/edit/${authUser.id}`}
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
                            href="/logout"
                            method="post"
                            type="button"
                        >
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="pr-1">
                            Login
                        </Link>
                        <Link href="/register" className="pr-1">
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </>
    );
}

export default TopNavBar;
