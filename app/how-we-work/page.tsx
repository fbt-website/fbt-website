import Container from "@/components/layout/Container";
import {defaultMetadata} from "@/lib/seo";

export const metadata = defaultMetadata(
    "How-we work",
    "Secure, scalable, and intelligent software engineering for startups and security-critical organizations."
);
export default function HowWeWorkPage() {
    return (
        <section className="py-24">
            <Container>
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="text-3xl font-semibold">How We Work</h1>

                    <p className="text-slate-600">
                        At FBT, we approach every project with a security-first mindset
                        and long-term ownership. Our goal is not just to deliver software,
                        but to build systems that remain reliable, maintainable, and secure
                        over time.
                    </p>

                    <ul className="space-y-4 text-slate-700">
                        <li>• Security-first engineering</li>
                        <li>• Clean Architecture & SOLID principles</li>
                        <li>• Clear documentation and maintainability</li>
                        <li>• Thoughtful, deliberate technical decisions</li>
                        <li>• No shortcuts, no fragile systems</li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}
