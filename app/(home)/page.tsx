import FAQ from "./_components/faq";
import Features from "./_components/features";
import Hero from "./_components/hero";
import PricingPlans from "./_components/pricing-plans";
import Steps from "./_components/steps";
import Testimony from "./_components/testimony";

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
