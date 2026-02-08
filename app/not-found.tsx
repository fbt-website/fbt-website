import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center sm:py-24">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
                Error 404
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Page not found
            </h1>
            <p className="mt-3 max-w-sm text-sm text-slate-600 sm:text-base">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
                Back to home
            </Link>
        </div>
    );
}
