import React from "react";

const Steps = () => {
    return (
        <section className="py-16 md:py-24 max-w-5xl bg-gray-50 mx-auto">
            <div className="text-center px-4 mb-12">
                <span className="text-sm text-blue-500 shiny-text tracking-tighter">
                    How it works
                </span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight my-2">
                    Generate in 3 Simple Steps
                </h2>
                <p className="max-w-2xl mx-auto text-sm  text-gray-600">
                    Transform your documents with minimal effort. Here’s how
                    TemplAI works.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 relative">
                <div className="relative flex flex-col items-center text-center">
                    <div className="flex items-center justify-center size-12 rounded-full primary-gradient-bg text-white font-bold text-xl mb-4 border-4 border-gray-50 ">
                        1
                    </div>
                    <h3 className="text-lg font-bold mb-2">Upload Document</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        Start by uploading your existing document or template in
                        any common format.
                    </p>
                </div>
                <div className="relative flex flex-col items-center text-center">
                    <div className="flex items-center justify-center size-12 rounded-full primary-gradient-bg text-white font-bold text-xl mb-4 border-4 border-gray-50 ">
                        2
                    </div>
                    <h3 className="text-lg font-bold mb-2">Fill the form</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        Map data fields, set up rules, and connect your data
                        sources with a few clicks.
                    </p>
                </div>
                <div className="relative flex flex-col items-center text-center">
                    <div className="flex items-center justify-center size-12 rounded-full primary-gradient-bg text-white font-bold text-xl mb-4 border-4 border-gray-50 ">
                        3
                    </div>
                    <h3 className="text-lg font-bold mb-2">Generate & Share</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        Generate your new, populated documents instantly and
                        share them with your team.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Steps;
