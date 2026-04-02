import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center grid-pattern">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="relative text-center px-6">
        <span className="text-8xl font-black gradient-text block mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-accent to-accent-cyan rounded-full hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-muted border border-border rounded-full hover:text-foreground hover:border-foreground/20 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
