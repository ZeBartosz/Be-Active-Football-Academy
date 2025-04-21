import { usePage } from "@inertiajs/react";
import TopNavBar from "../Components/NavBar/TopNavBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";

export default function Layout({ children }) {
    const { authUser } = usePage().props;

    return (
        <>
            <header>
                <TopNavBar />
                <main>{children}</main>
                <Footer />
            </header>
        </>
    );
}
