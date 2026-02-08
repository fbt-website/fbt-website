import Container from "@/components/layout/Container";

const capabilities = [
    {
        title: "Product Engineering",
        desc: "Designing and building scalable, production-ready products with clean architecture.",
    },
    {
        title: "Security Engineering",
        desc: "Threat modeling, vulnerability assessment, and secure-by-design systems.",
    },
    {
        title: "AI Automation",
        desc: "Responsible AI applied to automation, analysis, and decision support.",
    },
    {
        title: "Architecture & Consulting",
        desc: "Guiding teams to make the right technical decisions early.",
    },
];

export default function Capabilities() {
    return (
        <section className="py-28 bg-slate-50">
            <Container>
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">What We Do</h2>
                    <p className="mt-4 text-slate-600 max-w-xl mx-auto">
                        Our work focuses on long-term impact, security, and clarity.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {capabilities.map((c) => (
                        <div
                            key={c.title}
                            className="rounded-xl border bg-white p-8"
                        >
                            <h3 className="text-lg font-semibold">{c.title}</h3>
                            <p className="mt-3 text-slate-600">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
