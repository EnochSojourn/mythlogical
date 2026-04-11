import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center grid-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent-green/5 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center px-6">
        <span className="text-8xl font-black gradient-text block mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Node Not Found</h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          This endpoint doesn&apos;t exist on the network.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-background bg-accent-green rounded-lg hover:bg-accent-green/90 transition-colors"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
}
