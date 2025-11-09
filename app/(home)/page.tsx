import FAQ from "./_components/FAQ";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import PricingPlans from "./_components/PricingPlans";
import Steps from "./_components/Steps";
import Testimony from "./_components/Testimony";
import TrustedBrands from "./_components/TrustedBrands";

export default function Home() {
    return (
        <main className=" bg-gray-50">
            <div className="max-w-7xl mx-auto contianer">
                <Hero />
                {/* <TrustedBrands /> */}
                <Features />
                <Steps />
                <Testimony />
                <PricingPlans />
                <FAQ />
            </div>
        </main>
    );
}
