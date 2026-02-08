import Container from "@/components/layout/Container";

export default function AboutPage() {
    return (
        <section className="py-28">
            <Container>
                <div className="mx-auto max-w-3xl space-y-8">
                    <h1 className="text-3xl font-semibold">About FBT</h1>

                    <p className="text-slate-600">
                        FBT (Future Beyond Technology) was founded with a clear purpose:
                        to build secure, scalable, and intelligent technology systems
                        that stand the test of time.
                    </p>

                    <p className="text-slate-600">
                        We believe strong engineering, security-first thinking, and
                        deliberate architectural decisions are essential to building
                        technology that organizations can trust.
                    </p>

                    <p className="text-slate-600">
                        Our work focuses on long-term impact — helping startups and
                        security-critical organizations grow with confidence, today
                        and in the future.
                    </p>
                </div>
            </Container>
        </section>
    );
}
