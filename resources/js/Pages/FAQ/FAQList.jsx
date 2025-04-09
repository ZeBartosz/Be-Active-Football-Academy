import { Link, useForm, usePage } from "@inertiajs/react";

export default function FAQList({ faqs }) {
    const { authUser } = usePage().props;
    const { delete: deleteFAQ } = useForm();

    function handleDeleteFAQ(FAQ, e) {
        e.preventDefault();
        deleteFAQ(`/FAQ/delete/${FAQ.id}`);
    }

    return (
        <>
            <h1>This is the FAQ</h1>
            <Link href="/FAQ/create">Add FAQ</Link>
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
                            >
                                Delete
                            </button>
                            <Link href={`/FAQ/update/${faq.id}`}>Edit</Link>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </>
    );
}
