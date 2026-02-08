import Container from "@/components/layout/Container";

export default function CTA() {
    return (
        <section className="py-32 bg-slate-900 text-white">
            <Container>
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">
                        Let’s build technology that lasts.
                    </h2>
                    <p className="mt-4 text-slate-300 max-w-xl mx-auto">
                        Start a conversation with FBT — thoughtful, practical, and
                        pressure-free.
                    </p>

                    <div className="mt-8">
                        <button className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-900">
                            Contact FBT
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
