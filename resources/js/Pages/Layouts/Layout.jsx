import TopNavBar from "../Components/NavBar/TopNavBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import FlashCard from "../Components/FlashCard.jsx";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <TopNavBar />
                <div className="relative min-h-screen w-full">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background:
                                "linear-gradient(180deg, #010133 0%, #000814 80%, #000000 100%)",
                        }}
                    />

                    <div
                        className="pointer-events-none fixed inset-0 z-0"
                        style={{
                            background:
                                "radial-gradient(40vw 30vh at 50% 88vh, rgba(255,235,130,0.28) 0%, rgba(255,235,130,0.12) 12%, transparent 40%)",
                            mixBlendMode: "screen",
                            filter: "blur(36px)",
                        }}
                    />

                    <main className="relative z-10">{children}</main>
                </div>
                <Footer />

                <FlashCard />
            </header>
        </>
    );
}
