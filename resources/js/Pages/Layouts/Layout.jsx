import { usePage } from "@inertiajs/react";
import TopNavBar from "../Components/TopNavBar.jsx";

export default function Layout({ children }) {
    const { authUser } = usePage().props;

    return (
        <>
            <header>
                <TopNavBar />
                <main>{children}</main>
            </header>
        </>
    );
}
