import { siteConfig } from "@/lib/siteConfig";
import Container from "@/components/layout/Container";

export default function Hero() {
    return (
        <section className="py-32">
            <Container>
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        {siteConfig.tagline}
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                        We design and build secure, scalable, and intelligent technology
                        solutions for startups and security-critical organizations.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <button className="rounded-lg bg-slate-900 px-6 py-3 text-white text-sm font-medium">
                            Start a Conversation
                        </button>
                        <button className="rounded-lg border px-6 py-3 text-sm font-medium">
                            Explore Services
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
