import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <header className="w-full fixed top-5 z-50">
            <div className="max-w-5xl flex mx-auto border rounded-full backdrop-blur-sm border-gray-200 px-10 py-4">
                <div className="flex items-center">
                    <h1 className="text-2xl  text-secondary-foreground">
                        Automate
                    </h1>
                </div>
                <div className="flex-1 flex justify-end gap-8 items-center">
                    <Link
                        href={"/features"}
                        className="text-sm font-medium hover:text-primary"
                    >
                        Features
                    </Link>
                    <Link
                        href={"/features"}
                        className="text-sm font-medium hover:text-primary"
                    >
                        Pricing
                    </Link>
                    <div className="flex gap-2">
                        <Button
                            variant={"outline"}
                            className="text-sm font-semibold hover:text-primary tracking-[0.015em]"
                        >
                            Log in
                        </Button>
                        <Button
                            variant={"default"}
                            className="text-sm font-semibold tracking-[0.015em]"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
