import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import React from "react";

const PricingPlans = () => {
    return (
        <section className="py-16 md:py-24 max-w-5xl mx-auto" id="pricing">
            <div className="text-center px-4 mb-12">
                <span className="text-sm text-blue-500 shiny-text tracking-tighter">
                    How it works
                </span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight my-2">
                    Find the Plan That's Right for You
                </h2>
                <p className="max-w-2xl mx-auto text-sm  text-gray-600">
                    Simple, transparent pricing. No hidden fees. Cancel anytime.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 items-start">
                <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col h-full">
                    <h3 className="text-lg font-bold mb-2 ">Starter</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4">
                        For individuals and small projects.
                    </p>
                    <p className="text-4xl font-black mb-6">
                        $19
                        <span className="text-base font-medium text-text-secondary-light dark:text-text-secondary-dark">
                            /mo
                        </span>
                    </p>
                    <ul className="space-y-3 text-sm mb-6 flex-grow">
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            50 Documents/Month
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            2 Users
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            Basic Integrations
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            Email Support
                        </li>
                    </ul>
                    <Button className="w-full font-bold" variant={"secondary"}>
                        Choose Plan
                    </Button>
                </div>
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border-2 border-primary flex flex-col h-full relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                    </div>
                    <h3 className="text-lg font-bold mb-2">Pro</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4">
                        For growing teams and businesses.
                    </p>
                    <p className="text-4xl font-black mb-6">
                        $49
                        <span className="text-base font-medium text-text-secondary-light dark:text-text-secondary-dark">
                            /mo
                        </span>
                    </p>
                    <ul className="space-y-3 text-sm mb-6 flex-grow">
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            500 Documents/Month
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            10 Users
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            Advanced Integrations
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            API Access
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            Priority Support
                        </li>
                    </ul>

                    <Button className="w-full font-bold" variant={"default"}>
                        Choose Plan
                    </Button>
                </div>
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-col h-full">
                    <h3 className="text-lg font-bold mb-2">Enterprise</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4">
                        For large-scale organizations.
                    </p>
                    <p className="text-4xl font-black mb-6">Custom</p>
                    <ul className="space-y-3 text-sm mb-6 flex-grow">
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            Unlimited Documents
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            Unlimited Users
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            Custom Integrations
                        </li>
                        <li className="flex items-center gap-3">
                            <CircleCheck
                                size={"1rem"}
                                className="text-primary"
                            />
                            Dedicated Account Manager
                        </li>
                    </ul>
                    <Button className="w-full font-bold" variant={"secondary"}>
                        Choose Plan
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
