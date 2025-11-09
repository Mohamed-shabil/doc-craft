import React from "react";

const Testimony = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 mx-auto max-w-5xl">
            <div className="text-center px-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
                    Loved by Teams Worldwide
                </h2>
                <p className="max-w-2xl mx-auto text-base  text-gray-600">
                    Don't just take our word for it. Here's what our users have
                    to say.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-col">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-base mb-4 flex-grow">
                        "TemplAI has been a game-changer for our team. We've cut
                        down document processing time by over 70%. It's
                        incredibly intuitive and powerful."
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                        <img
                            alt="Sarah L."
                            className="size-10 rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBlIrLtoYSooXX9kUY6hItx9cz2bADhK8QDIU8qFMdGyUesbXP_fL6jluIYjmpMl-OwTrcG2DIJ42jIJoOBpDI_bN5897aJQjNBh9sgYNVoxNzIvIHU4onH5hHdNquiLl0TBJYnsXagZgFLnN_k80mjVyPYi5ePjRuFPXaVJd4B3aSzfF3F3NrRXkA1XtKGUfdX2mm_9dd9rC_UhKGQTh13SyLoIOzETeLvvxY1aGiwDaYdBgFIj1uB8VggEwd8yDb4HaGyY2mQQ"
                        />
                        <div>
                            <p className="font-bold text-sm">Sarah L.</p>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">
                                Operations Manager, Innovate Inc.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-col">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-base mb-4 flex-grow">
                        "The automation capabilities are top-notch. What used to
                        take hours of manual data entry now takes minutes.
                        Highly recommended!"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                        <img
                            alt="Mark T."
                            className="size-10 rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9jqvwCWpbf-RvVEMYcTWvyvoUtLb_fuFFyxE96iH9un8xRzx4iWCLI6mDM0E8vRRJGJKu4OOY1vwESESwYU5tFDeszp3DPUwaIsgKjVuRIlKnvCueCkgLRDMDTuk-JjcxcSovJaGd4PxD7Cw6x_GKPIkSWCHFkvWl0_PRo6kl0wILkV8RdcAZNwcSDl8Ehmba2Oh0kg7mERspYgZ4jFqrhzolhI6ov8Ksjw7X2x_VP35NERrrIEHFhvqLe7xPUEwpQJELGPfHHg"
                        />
                        <div>
                            <p className="font-bold text-sm">Mark T.</p>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">
                                Lead Developer, Tech Solutions
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-col">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-base mb-4 flex-grow">
                        "Simple, elegant, and effective. TemplAI streamlined our
                        entire client onboarding process. The support team is
                        also fantastic."
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                        <img
                            alt="Jessica P."
                            className="size-10 rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6KdNzeTc3SA8ECUOhPahC_baeoZ9VNreM9fOeRSuLEytuJCQmVn9g68JHGrjnCKGG-t8045wwk7PjeU3aPfHbymZx4BcZhysIgpSt_EnNcgOnuSKdbTqlgEl5WI--C1AYfvRfwyT9KumwNK9PeHzld9SAYlq7DncCNBjOQcR4I7-oJxBsnmYDeUCwBq7VbG4fNClvYDnHwr_HxrP3gewcf18Ng7dkG09hAuIcV2V6XzoS8JPBZ9SeuFEE-xGyi9hyP24VrYyVcA"
                        />
                        <div>
                            <p className="font-bold text-sm">Jessica P.</p>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">
                                Founder, Creative Co.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimony;
