import { Link, useForm, usePage } from "@inertiajs/react";

export default function FAQList({ faqs }) {
    const { authUser } = usePage().props;
    const { delete: deleteFAQ, processing } = useForm();

    function handleDeleteFAQ(faq, e) {
        e.preventDefault();
        deleteFAQ(route("faq.destroy", { faq: faq.id }));
    }

    return (
        <>
            <h1>This is the FAQ</h1>
            <Link href={route(`faq.create`)}>Add FAQ</Link>
            {faqs.map((faq) => (
                <div key={faq.id}>
                    <h2>Question:</h2>
                    <p>{faq.question}</p>
                    <h2>Answer:</h2>
                    <p>{faq.answer}</p>
                    {authUser ? (
                        <>
                            <button
                                className="rounded-lg border bg-red-600 p-2"
                                onClick={(e) => handleDeleteFAQ(faq, e)}
                                disabled={processing} // Disable button during deletion
                            >
                                {processing ? "Deleting..." : "Delete"}
                            </button>
                            <Link href={route("faq.edit", { faq: faq.id })}>
                                Edit
                            </Link>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </>
    );
}
