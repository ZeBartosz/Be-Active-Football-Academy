import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function TopNavBar() {
    const { auth } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-xl">
            <div className="motion-blur-in motion-duration-[1s] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-3 rounded-2xl bg-blue-950/60 shadow-lg ring-1 ring-blue-300/10">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6">
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
                                <h1 className="ml-3 hidden text-lg font-bold text-white md:block md:text-xl">
                                    Be Active Football Academy
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                {auth.user ? (
                                    <>
                                        <Link
                                            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                            href={route("home")}
                                        >
                                            {auth.user.first_name}
                                        </Link>

                                        <Link
                                            href={route(`faq.index`)}
                                            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                        >
                                            FAQ
                                        </Link>

                                        <Link
                                            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                            href={route("user.index")}
                                        >
                                            Dashboard
                                        </Link>

                                        {auth.roles.includes("Admin") && (
                                            <Link
                                                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                                href={route("admin.index")}
                                            >
                                                Admin
                                            </Link>
                                        )}

                                        {auth.roles.includes("Coach") && (
                                            <Link
                                                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                                href={route("coach.edit", {
                                                    user: auth.user.id,
                                                })}
                                            >
                                                Coach Profile
                                            </Link>
                                        )}

                                        <Link
                                            className="rounded-md bg-red-500/15 px-3 py-2 text-sm font-medium text-red-300 ring-1 ring-red-400/20 transition hover:bg-red-500/25"
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
                                            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                        >
                                            FAQ
                                        </Link>

                                        <Link
                                            href={route("program_group.index")}
                                            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                        >
                                            Programs
                                        </Link>

                                        <Link
                                            href={route("auth.login")}
                                            className="rounded-md bg-gradient-to-r from-yellow-400 to-yellow-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-yellow-400/20 focus:ring-2 focus:ring-yellow-300/40 focus:outline-none"
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
                                className="inline-flex items-center justify-center rounded-md p-2 text-blue-200 hover:bg-blue-900/30 hover:text-white focus:ring-2 focus:ring-yellow-300/40 focus:outline-none focus:ring-inset"
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
            </div>

            {/* Mobile menushow/hide based on menu state */}
            {isMenuOpen && (
                <div className="mx-4 mt-2 rounded-2xl bg-blue-950/60 shadow-lg ring-1 ring-blue-300/10 backdrop-blur-md md:hidden">
                    <div className="space-y-1 px-3 py-3">
                        {auth.user ? (
                            <>
                                <Link
                                    className="block rounded-md px-3 py-2 text-base font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                    href={route("home")}
                                >
                                    {auth.user.first_name}
                                </Link>
                                <Link
                                    href={route(`faq.index`)}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                >
                                    FAQ
                                </Link>
                                <Link
                                    className="block rounded-md px-3 py-2 text-base font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                    href={route("user.index")}
                                >
                                    Dashboard
                                </Link>
                                {auth.roles.includes("Admin") && (
                                    <Link
                                        className="block rounded-md px-3 py-2 text-base font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                        href={route("admin.index")}
                                    >
                                        Admin
                                    </Link>
                                )}
                                {auth.roles.includes("Coach") && (
                                    <Link
                                        className="block rounded-md px-3 py-2 text-base font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                        href={route("coach.edit", {
                                            user: auth.user.id,
                                        })}
                                    >
                                        Coach Profile
                                    </Link>
                                )}
                                <Link
                                    className="block rounded-md bg-red-500/15 px-3 py-2 text-base font-medium text-red-300 ring-1 ring-red-400/20 transition hover:bg-red-500/25"
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
                                    className="block rounded-md px-3 py-2 text-base font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                >
                                    FAQ
                                </Link>
                                <Link
                                    href={"/"}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                >
                                    Coach
                                </Link>
                                <Link
                                    href={route("program_group.index")}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-white/90 ring-1 ring-transparent transition hover:bg-blue-900/30 hover:text-white hover:ring-white/10"
                                >
                                    Programs
                                </Link>
                                <Link
                                    href={route("auth.login")}
                                    className="block rounded-md bg-gradient-to-r from-yellow-400 to-yellow-300 px-3 py-2 text-base font-semibold text-slate-900 transition hover:shadow-yellow-400/20"
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
