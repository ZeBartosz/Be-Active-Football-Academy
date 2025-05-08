import TopNavBar from "../Components/NavBar/TopNavBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import FlashCard from "../Components/FlashCard.jsx";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <TopNavBar />
                <main>{children}</main>
                <Footer />
                <FlashCard />
            </header>
        </>
    );
}
