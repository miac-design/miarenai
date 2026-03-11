import Link from "next/link";
import NodeNetwork from "@/components/NodeNetwork";

export default function NotFound() {
    return (
        <section className="relative bg-soft-white min-h-[60vh] flex items-center justify-center overflow-hidden">
            <NodeNetwork opacity={0.15} />
            <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
                <p className="text-sm font-mono tracking-wider text-teal uppercase mb-4">
                    PAGE NOT FOUND
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4">404</h1>
                <p className="text-warm-gray text-lg mb-8">
                    This page doesn&apos;t exist. It may have been moved or removed.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/" className="btn-primary">
                        Back to Home
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <Link
                        href="/methodology"
                        className="inline-flex items-center gap-2 border-2 border-navy text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy hover:text-white transition-colors"
                    >
                        View Methodology
                    </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-4 justify-center text-sm text-warm-gray">
                    <Link href="/services" className="hover:text-teal transition-colors">Services</Link>
                    <span>·</span>
                    <Link href="/results" className="hover:text-teal transition-colors">Case Studies</Link>
                    <span>·</span>
                    <Link href="/faq" className="hover:text-teal transition-colors">FAQ</Link>
                    <span>·</span>
                    <Link href="/insights" className="hover:text-teal transition-colors">Insights</Link>
                    <span>·</span>
                    <Link href="/contact" className="hover:text-teal transition-colors">Contact</Link>
                </div>
            </div>
        </section>
    );
}
