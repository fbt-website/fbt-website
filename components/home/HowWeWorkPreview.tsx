import Container from "@/components/layout/Container";

export default function HowWeWorkPreview() {
    return (
        <section className="py-28">
            <Container>
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">How We Work</h2>
                    <p className="mt-4 text-slate-600 max-w-xl mx-auto">
                        We approach every project with a security-first mindset and
                        long-term ownership.
                    </p>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 text-slate-700">
                    <p>• Security-first engineering</p>
                    <p>• Clean Architecture & SOLID principles</p>
                    <p>• Clear documentation & maintainability</p>
                    <p>• No shortcuts, no fragile systems</p>
                </div>
            </Container>
        </section>
    );
}
