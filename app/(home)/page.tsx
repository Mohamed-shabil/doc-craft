import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto contianer">
            <div className="text-center py-20 md:pt-32 px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-4">
                    Automate Your Documents.
                    <br />
                    Reclaim Your Time.
                </h1>
                <h2 className="max-w-2xl mx-auto text-base md:text-lg text-text-secondary-light dark:text-text-secondary-dark mb-8">
                    TemplAI uses AI to streamline document creation and
                    management, saving you valuable time and effort so you can
                    focus on what matters most.
                </h2>
                <Button className="inline-flex  items-center justify-center rounded-lg h-12 px-8 text-white text-base font-bold leading-normal tracking-[0.015em]">
                    Get Started for Free
                </Button>
            </div>
            <div className="px-4">
                <div
                    className="w-full h-64 md:h-[500px] bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl hero-visual-bg"
                    data-alt="Abstract representation of document flow with flowing shapes and lines in blue and purple hues."
                ></div>
            </div>
        </main>
    );
}
