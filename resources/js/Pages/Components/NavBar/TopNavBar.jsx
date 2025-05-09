import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function TopNavBar() {
    const { authUser } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo and Brand Name */}
                    <div className="flex items-center">
                        <Link
                            href={route("home")}
                            className="flex items-center"
                        >
                            <img
                                src="storage/assets/logo.png"
                                alt="logo"
                                className="h-10 w-auto"
                            />
                            <span className="ml-3 hidden text-xl font-bold text-gray-800 md:block">
                                Be Active Football Academy
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {authUser ? (
                                <>
                                    <Link
                                        className="top_navbar_link"
                                        href={route("home")}
                                    >
                                        {authUser.first_name}
                                    </Link>

                                    <Link
                                        href={route(`faq.index`)}
                                        className="top_navbar_link"
                                    >
                                        FAQ
                                    </Link>

                                    <Link
                                        className="top_navbar_link"
                                        href={route("user.index")}
                                    >
                                        Dashboard
                                    </Link>

                                    {authUser.is_admin && (
                                        <Link
                                            className="top_navbar_link"
                                            href={route("admin.index")}
                                        >
                                            Admin
                                        </Link>
                                    )}

                                    {authUser.is_coach && (
                                        <Link
                                            className="top_navbar_link"
                                            href={route("coach.edit", {
                                                user: authUser.id,
                                            })}
                                        >
                                            Coach Profile
                                        </Link>
                                    )}

                                    <Link
                                        className="rounded-md bg-red-100 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-200"
                                        href={route(`auth.logout`)}
                                        method="post"
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

                                    <Link
                                        href={"/"}
                                        className="top_navbar_link"
                                    >
                                        Coach
                                    </Link>

                                    <Link
                                        href={route("program_group.index")}
                                        className="top_navbar_link"
                                    >
                                        Programs
                                    </Link>

                                    <Link
                                        href={route("auth.login")}
                                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        Join Now
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <XMarkIcon
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Bars3Icon
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menushow/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {authUser ? (
                            <>
                                <Link
                                    className="top_navbar_link_mobile"
                                    href={route("home")}
                                >
                                    {authUser.first_name}
                                </Link>
                                <Link
                                    href={route(`faq.index`)}
                                    className="top_navbar_link_mobile"
                                >
                                    FAQ
                                </Link>
                                <Link
                                    className="top_navbar_link_mobile"
                                    href={route("user.index")}
                                >
                                    Dashboard
                                </Link>
                                {authUser.is_admin && (
                                    <Link
                                        className="top_navbar_link_mobile"
                                        href={route("admin.index")}
                                    >
                                        Admin
                                    </Link>
                                )}
                                {authUser.is_coach && (
                                    <Link
                                        className="top_navbar_link_mobile"
                                        href={route("coach.edit", {
                                            user: authUser.id,
                                        })}
                                    >
                                        Coach Profile
                                    </Link>
                                )}
                                <Link
                                    className="block rounded-md bg-red-100 px-3 py-2 text-base font-medium text-red-600 hover:bg-red-200"
                                    href={route(`auth.logout`)}
                                    method="post"
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route(`faq.index`)}
                                    className="top_navbar_link_mobile"
                                >
                                    FAQ
                                </Link>
                                <Link
                                    href={"/"}
                                    className="top_navbar_link_mobile"
                                >
                                    Coach
                                </Link>
                                <Link
                                    href={route("program_group.index")}
                                    className="top_navbar_link_mobile"
                                >
                                    Programs
                                </Link>
                                <Link
                                    href={route("auth.login")}
                                    className="block rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-700"
                                >
                                    Join Now
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default TopNavBar;
