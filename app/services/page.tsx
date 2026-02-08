import {defaultMetadata} from "@/lib/seo";

export const metadata = defaultMetadata(
    "Service",
    "Secure, scalable, and intelligent software engineering for startups and security-critical organizations."
);
export default function ServicesPage() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-6xl space-y-16 px-4">
                <header className="text-center">
                    <h1 className="text-3xl font-semibold">Our Services</h1>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        We help organizations build secure, scalable, and intelligent
                        systems — designed for longevity, not shortcuts.
                    </p>
                </header>

                <div className="grid gap-12 md:grid-cols-2">
                    <Service
                        title="Product Engineering"
                        description="We design and build production-grade software products using clean architecture, modern stacks, and scalable system design."
                    />
                    <Service
                        title="Security & Vulnerability Engineering"
                        description="We identify and mitigate risks early through threat modeling, vulnerability assessment, and secure-by-design practices."
                    />
                    <Service
                        title="AI Automation"
                        description="We apply AI responsibly to automate analysis, decision support, and security workflows — enhancing human expertise."
                    />
                    <Service
                        title="Architecture & Consulting"
                        description="We guide teams in making the right technical decisions early, avoiding costly rewrites and architectural debt."
                    />
                </div>
            </div>
        </section>
    );
}

function Service({
                     title,
                     description,
                 }: {
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-xl border p-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-4 text-slate-600">{description}</p>
        </div>
    );
}
