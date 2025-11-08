import Features from "./_components/Features";
import Hero from "./_components/Hero";
import TrustedBrands from "./_components/TrustedBrands";

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto contianer">
            <Hero />
            {/* <TrustedBrands /> */}
            <Features />
        </main>
    );
}
