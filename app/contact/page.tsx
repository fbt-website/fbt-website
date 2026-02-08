import {defaultMetadata} from "@/lib/seo";
import Container from "@/components/layout/Container";

export const metadata = defaultMetadata(
    "Contact",
    "Secure, scalable, and intelligent software engineering for startups and security-critical organizations."
);

export default function ContactPage() {
    return (
        <section className="py-28">
            <Container>
                <div className="mx-auto max-w-2xl">
                    <header className="text-center">
                        <h1 className="text-3xl font-semibold">Contact FBT</h1>
                        <p className="mt-4 text-slate-600">
                            Start a conversation with us. No sales pressure — just a thoughtful
                            discussion about your needs and goals.
                        </p>
                    </header>

                    <form className="mt-16 space-y-6">
                        <Input label="Name" placeholder="Your full name" />
                        <Input label="Email" placeholder="you@example.com" type="email" />
                        <Input label="Company" placeholder="Company or startup name" />
                        <Textarea
                            label="Message"
                            placeholder="Tell us briefly about your project, challenge, or idea."
                        />

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-slate-500">
                        Prefer email? Reach us at{" "}
                        <span className="font-medium text-slate-700">
              futurebeyond.tech@gmail.com
            </span>
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
    return (
        <div>
            <label className="block text-sm font-medium">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
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
    return (
        <div>
            <label className="block text-sm font-medium">{label}</label>
            <textarea
                rows={5}
                placeholder={placeholder}
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
        </div>
    );
}
