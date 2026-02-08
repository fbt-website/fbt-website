import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Container from "@/components/layout/Container";

export default function Hero() {
    return (
        <section className="py-20 sm:py-28 lg:py-36" aria-labelledby="hero-heading">
            <Container>
                <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
                        Secure, intelligent systems
                    </p>
                    <h1 id="hero-heading" className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                        {siteConfig.tagline}
                    </h1>

                    <p className="mt-5 max-w-2xl mx-auto text-base text-slate-600 sm:mt-6 sm:text-lg">
                        We design and build secure, scalable, and intelligent technology
                        solutions for startups and security-critical organizations.
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                        >
                            Start a Conversation
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
