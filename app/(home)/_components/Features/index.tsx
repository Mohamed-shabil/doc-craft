import { Braces, BrainCircuit, Cable, Sparkles } from "lucide-react";
import React from "react";

const Features = () => {
    return (
        <section
            className="py-16 md:pb-24 pt-28 max-w-5xl mx-auto"
            id="features"
        >
            <div className="text-center px-4 mb-12">
                <span className="text-sm text-blue-500 shiny-text tracking-tighter">
                    Features
                </span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight my-2">
                    Powerful Features, Effortless Results
                </h2>
                <p className="max-w-2xl mx-auto text-sm  text-gray-600">
                    Everything you need to automate your document workflow and
                    boost <br />
                    productivity.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-center size-12 bg-primary/10 rounded-lg mb-4">
                        <BrainCircuit className="text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                        AI-Powered Templates
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Instantly generate high-quality documents from your
                        existing files with intelligent content suggestions.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                        <Braces className="text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                        Dynamic Data Mapping
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Automatically populate your documents with data from
                        spreadsheets, forms, or any other source.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                        <Cable className="text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                        Seamless Integrations
                    </h3>
                    <p className="text-gray-600  text-sm">
                        Connect TemplAI to your favorite apps and services for a
                        fully automated workflow.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
