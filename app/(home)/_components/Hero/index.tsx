import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
    return (
        <>
            <div className="text-center py-20 md:pt-48 px-4">
                <div className="shiny-text text-primary mb-4 font-light tracking-tighter">
                    For fast moving engineering teams.
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-950 leading-tight tracking-tighter mb-4">
                    Automate Your Documents.
                    <br />
                    Reclaim <span className="text-primary">Your Time.</span>
                </h1>
                <h2 className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg text-secondary-light mb-8">
                    TemplAI uses AI to streamline document creation and
                    management, saving you valuable time and effort so you can
                    focus on what matters most.
                </h2>
                <Button className="inline-flex items-center justify-center rounded-lg h-12 px-8 text-white text-base font-bold leading-normal tracking-[0.015em]">
                    Get Started for Free
                </Button>
            </div>
            <div className="px-4">
                <AspectRatio
                    ratio={16 / 9}
                    className=" h-[600px] bg-muted rounded-lg primary-gradient-bg"
                >
                    {/* <HeroVideoDialog
                        className="block w-full h-f"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                    /> */}
                </AspectRatio>
            </div>
        </>
    );
};

export default Hero;
