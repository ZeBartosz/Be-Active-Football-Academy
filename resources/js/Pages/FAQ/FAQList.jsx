import { Link, usePage } from "@inertiajs/react";

export default function FAQList({ faqs }) {
    const { authUser } = usePage().props;

    return (
        <>
            <h1>This is the FAQ</h1>
            <Link href="/FAQ/create">Add FAQ</Link>
        </>
    );
}
