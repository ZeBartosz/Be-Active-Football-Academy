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
