import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="text-center px-4 mb-12">
                <span className="text-sm text-blue-500 shiny-text tracking-tighter">
                    FAQs
                </span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
                    Frequently Asked Questions
                </h2>
                <p className="max-w-2xl mx-auto text-sm  text-gray-600">
                    Have questions? We've got answers. If you can't find what
                    you're looking for, <br />
                    feel free to contact us.
                </p>
            </div>
            <div className="max-w-xl mx-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            What types of documents can I use with TemplAI?
                        </AccordionTrigger>
                        <AccordionContent>
                            TemplAI supports a wide variety of document formats,
                            including DOCX, PDF, PPTX, and XLSX. You can upload
                            your existing templates, and our AI will
                            intelligently parse them for automation.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is my data secure?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely. We take data security very seriously.
                            All data is encrypted in transit and at rest using
                            industry-standard protocols. We are fully GDPR and
                            CCPA compliant.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Can I integrate TemplAI with other software?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes! TemplAI offers native integrations with popular
                            platforms like Salesforce, HubSpot, Google Drive,
                            and Dropbox. Our Pro and Enterprise plans also
                            include API access for custom integrations.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            What happens if I go over my monthly document limit?
                        </AccordionTrigger>
                        <AccordionContent>
                            We'll notify you when you're approaching your limit.
                            If you need more, you can easily upgrade to a higher
                            plan at any time directly from your account
                            dashboard.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;
