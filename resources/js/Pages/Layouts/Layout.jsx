import { Link, useForm, usePage } from "@inertiajs/react";

export default function Layout({ children }) {
    const { authUser } = usePage().props;

    return (
        <>
            <header>
                <nav className="flex">
                    {authUser ? (
                        <>
                            <Link className="pr-1" href="/">
                                <h1>{authUser.first_name}</h1>
                            </Link>
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
                <main>{children}</main>
            </header>
        </>
    );
}
