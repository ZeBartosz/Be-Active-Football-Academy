import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ContactUsSection() {
    const [contact, setContact] = useState({
        id: 0,
        description: "",
        email: "",
        number: "",
        address_line1: "",
        address_line2: "",
    });

    useEffect(() => {
        fetch(route("api.home.contact"))
            .then((res) => res.json())
            .then((data) => {
                if (data) setContact(data);
            })
            .catch(() => {});
    }, []);

    return (
        <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-blue-900/30 p-6 ring-1 ring-blue-300/10">
                <div className="grid gap-8 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <div className="flex justify-between gap-2">
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Contact Us
                            </h2>
                            <Link
                                href={route("contact-info.update", {
                                    contactInfo: contact?.id,
                                })}
                                className="mr-2 inline-flex items-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-yellow-400/20 focus:ring-2 focus:ring-yellow-300/40 focus:outline-none"
                            >
                                Update
                            </Link>
                        </div>
                        {contact.description && (
                            <p className="mt-2 text-blue-200/80">
                                {contact.description}
                            </p>
                        )}

                        <div className="mt-6 space-y-4 text-blue-100/90">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900/30 ring-1 ring-blue-300/10">
                                    <img
                                        src="/storage/assets/icons/email.svg"
                                        alt="Email"
                                    />
                                </span>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="hover:text-yellow-300"
                                >
                                    {contact.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900/30 ring-1 ring-blue-300/10">
                                    <img
                                        src="/storage/assets/icons/phone.svg"
                                        alt="Phone"
                                    />
                                </span>
                                <a
                                    href={`tel:${contact.number?.replace?.(/\s/g, "")}`}
                                    className="hover:text-yellow-300"
                                >
                                    {contact.number}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900/30 ring-1 ring-blue-300/10">
                                    <img
                                        src="/storage/assets/icons/location.svg"
                                        alt="Location"
                                    />
                                </span>
                                <div>
                                    <p>{contact.address_line1}</p>
                                    <p className="text-blue-200/80">
                                        {contact.address_line2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <form
                            className="grid grid-cols-1 gap-4 rounded-2xl bg-blue-900/30 p-6 ring-1 ring-blue-300/10 sm:grid-cols-2"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="sm:col-span-1">
                                <label className="block text-sm font-medium text-blue-100/90">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 w-full rounded-lg border-0 bg-blue-950/60 p-3 text-white ring-1 ring-blue-300/10 ring-inset placeholder:text-blue-200/60 focus:ring-2 focus:ring-yellow-300/40"
                                    placeholder="John"
                                />
                            </div>
                            <div className="sm:col-span-1">
                                <label className="block text-sm font-medium text-blue-100/90">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 w-full rounded-lg border-0 bg-blue-950/60 p-3 text-white ring-1 ring-blue-300/10 ring-inset placeholder:text-blue-200/60 focus:ring-2 focus:ring-yellow-300/40"
                                    placeholder="Doe"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-blue-100/90">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 w-full rounded-lg border-0 bg-blue-950/60 p-3 text-white ring-1 ring-blue-300/10 ring-inset placeholder:text-blue-200/60 focus:ring-2 focus:ring-yellow-300/40"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-blue-100/90">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="mt-1 w-full rounded-lg border-0 bg-blue-950/60 p-3 text-white ring-1 ring-blue-300/10 ring-inset placeholder:text-blue-200/60 focus:ring-2 focus:ring-yellow-300/40"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:shadow-yellow-400/20 focus:ring-2 focus:ring-yellow-300/40 focus:outline-none"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
