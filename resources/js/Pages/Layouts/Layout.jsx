import TopNavBar from "../Components/NavBar/TopNavBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import FlashCard from "../Components/FlashCard.jsx";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <div className="relative min-h-screen w-full overflow-hidden">
                    <TopNavBar />
                    {/* Base Gradient */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background:
                                "linear-gradient(180deg, #06102A 0%, #0A1850 65%, #030712 100%)",
                        }}
                    />

                    {/* Radial Glow */}
                    <div
                        className="pointer-events-none absolute inset-0 z-0"
                        style={{
                            background:
                                "radial-gradient(40vw 30vh at 50% 88vh, rgba(250,204,21,0.28) 0%, rgba(250,204,21,0.12) 12%, transparent 40%)",
                            mixBlendMode: "screen",
                            filter: "blur(36px)",
                        }}
                    />

                    {/* Animated Aurora Layer */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="aurora" />
                    </div>

                    {/* Page Content */}
                    <main className="relative z-10">{children}</main>
                    {/* Footer inside gradient container so it shares background */}
                    <div className="relative z-10">
                        <Footer />
                    </div>
                </div>
                <FlashCard />
            </header>

            {/* Aurora Animation Styles */}
            <style>{`
        .aurora {
          position: absolute;
          inset: 0;
          background: conic-gradient(
            from 180deg at 50% 50%,
            rgba(59, 130, 246, 0.12),
            rgba(14, 165, 233, 0.10),
            rgba(250, 204, 21, 0.12),
            rgba(37, 99, 235, 0.12),
            rgba(59, 130, 246, 0.12)
          );
          background-size: 200% 200%;
          animation: auroraMove 18s ease-in-out infinite alternate;
          filter: blur(120px);
          opacity: 0.6;
          mix-blend-mode: screen;
        }

        @keyframes auroraMove {
          0% { transform: translate(-10%, -10%) scale(1); }
          50% { transform: translate(10%, 10%) scale(1.1); }
          100% { transform: translate(-10%, 5%) scale(1); }
        }
      `}</style>
        </>
    );
}
