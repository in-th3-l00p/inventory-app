import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen overflow-x-hidden">
                <Header />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
}