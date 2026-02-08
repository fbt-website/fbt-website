import Container from "@/components/layout/Container";
import {defaultMetadata} from "@/lib/seo";

export const metadata = defaultMetadata(
    "How We Work",
    "Secure, scalable, and intelligent software engineering for startups and security-critical organizations."
);
const principles = [
    "Security-first engineering",
    "Clean Architecture & SOLID principles",
    "Clear documentation and maintainability",
    "Thoughtful, deliberate technical decisions",
    "No shortcuts, no fragile systems",
];

export default function HowWeWorkPage() {
    return (
        <section className="py-20 sm:py-24 lg:py-32" aria-labelledby="how-we-work-heading">
            <Container>
                <div className="mx-auto max-w-3xl space-y-8 sm:space-y-10">
                    <header>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
                            Methodology
                        </p>
                        <h1 id="how-we-work-heading" className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                            How We Work
                        </h1>
                    </header>

                    <p className="text-sm text-slate-600 sm:text-base leading-relaxed">
                        At FBT, we approach every project with a security-first mindset
                        and long-term ownership. Our goal is not just to deliver software,
                        but to build systems that remain reliable, maintainable, and secure
                        over time.
                    </p>

                    <ul className="space-y-3 text-sm text-slate-700 sm:space-y-4 sm:text-base" role="list">
                        {principles.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
