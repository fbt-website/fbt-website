import Link from "next/link";
import Container from "./Container";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="font-semibold text-lg tracking-tight">
                        FBT
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-slate-900 transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                    >
                        Start a Conversation
                    </Link>
                </div>
            </Container>
        </header>
    );
}
