import { Link, usePage } from "@inertiajs/react";

export default function FAQList({ faqs }) {
    const { authUser } = usePage().props;

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
                </div>
            ))}
        </>
    );
}
