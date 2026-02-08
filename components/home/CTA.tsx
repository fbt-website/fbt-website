import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CTA() {
    return (
        <section className="py-20 sm:py-28 lg:py-36 bg-slate-900 text-white" aria-labelledby="cta-heading">
            <Container>
                <div className="text-center">
                    <h2 id="cta-heading" className="text-xl font-semibold text-white sm:text-2xl">
                        Let's build technology that lasts.
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-sm text-slate-300 sm:text-base">
                        Start a conversation with FBT — thoughtful, practical, and
                        pressure-free.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                        >
                            Contact FBT
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
