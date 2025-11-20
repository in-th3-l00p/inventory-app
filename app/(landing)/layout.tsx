import Header from "./components/header";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}