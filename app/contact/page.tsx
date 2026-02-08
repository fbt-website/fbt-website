import {defaultMetadata} from "@/lib/seo";
import Container from "@/components/layout/Container";

export const metadata = defaultMetadata(
    "Contact",
    "Secure, scalable, and intelligent software engineering for startups and security-critical organizations."
);

export default function ContactPage() {
    return (
        <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="contact-heading">
            <Container>
                <div className="mx-auto max-w-2xl">
                    <header className="text-center">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
                            Get in touch
                        </p>
                        <h1 id="contact-heading" className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                            Contact FBT
                        </h1>
                        <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-base">
                            Start a conversation with us. No sales pressure — just a thoughtful
                            discussion about your needs and goals.
                        </p>
                    </header>

                    <form className="mt-12 space-y-5 sm:mt-16 sm:space-y-6" noValidate>
                        <Input label="Name" placeholder="Your full name" />
                        <Input label="Email" placeholder="you@example.com" type="email" />
                        <Input label="Company" placeholder="Company or startup name" />
                        <Textarea
                            label="Message"
                            placeholder="Tell us briefly about your project, challenge, or idea."
                        />

                        <div className="pt-2 sm:pt-4">
                            <button
                                type="submit"
                                className="w-full min-h-[44px] rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-slate-500 sm:mt-10">
                        Prefer email? Reach us at{" "}
                        <a
                            href="mailto:contact@futurebeyondtech.in"
                            className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-slate-900 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                        >
                            contact@futurebeyondtech.in
                        </a>
                    </p>
                </div>
            </Container>
        </section>
    );
}

function Input({
                   label,
                   type = "text",
                   placeholder,
               }: {
    label: string;
    type?: string;
    placeholder?: string;
}) {
    const id = label.toLowerCase().replace(/\s+/g, "-");
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="mt-2 w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-0"
            />
        </div>
    );
}

function Textarea({
                      label,
                      placeholder,
                  }: {
    label: string;
    placeholder?: string;
}) {
    const id = label.toLowerCase().replace(/\s+/g, "-");
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700">
                {label}
            </label>
            <textarea
                id={id}
                rows={5}
                placeholder={placeholder}
                className="mt-2 w-full min-h-[120px] rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-0"
            />
        </div>
    );
}
