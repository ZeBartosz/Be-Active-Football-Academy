import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Background from "../Components/Background/Background.jsx";
import ConfirmButton from "../Components/Confirmation/ConfirmButton.jsx";

export default function FAQList({ faqs }) {
    const { authUser } = usePage().props;

    const [openIds, setOpenIds] = useState([]);

    function toggle(id) {
        setOpenIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
        );
    }

    return (
        <>
            <div className="relative flex h-fit items-center justify-center">
                <Background background={null} />

                <div className="relative inset-10 h-fit text-white">
                    <div className="font-display mx-auto h-fit max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                        <h1 className="mb-12 text-center text-5xl font-bold">
                            Frequently Asked Questions
                        </h1>

                        {authUser && (
                            <div className="mb-6 text-right">
                                <Link
                                    href={route("faq.create")}
                                    className="inline-block rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
                                >
                                    + Add FAQ
                                </Link>
                            </div>
                        )}

                        <div className="space-y-4">
                            {faqs.map((faq) => {
                                const isOpen = openIds.includes(faq.id);

                                return (
                                    <div key={faq.id} className="border-b">
                                        <button
                                            onClick={() => toggle(faq.id)}
                                            className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                                        >
                                            <span className="text-5xl font-bold">
                                                {faq.question}
                                            </span>
                                            <span className="ml-4">
                                                {isOpen ? (
                                                    <XMarkIcon className="h-10 w-10 text-white" />
                                                ) : (
                                                    <PlusIcon className="h-10 w-10 text-white" />
                                                )}
                                            </span>
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${
                                                isOpen
                                                    ? "max-h-screen pb-4"
                                                    : "max-h-0"
                                            }`}
                                        >
                                            <p className="text-2xl text-gray-300">
                                                {faq.answer}
                                            </p>

                                            {authUser && (
                                                <div className="relative mt-4 flex items-center justify-end space-x-2 text-end text-2xl">
                                                    <Link
                                                        href={route(
                                                            "faq.edit",
                                                            {
                                                                faq: faq.id,
                                                            },
                                                        )}
                                                        className="pr-3 text-center text-white hover:underline"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <ConfirmButton
                                                        id={faq.id}
                                                        routeName="faq.destroy"
                                                        routeParamKey="faq"
                                                        className="btn-sm btn-red"
                                                        method="delete"
                                                        children="Delete"
                                                        message="Are you sure you want to delete this FAQ?"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
