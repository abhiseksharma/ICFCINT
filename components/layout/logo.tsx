import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00629B] text-lg font-bold text-white shadow-md">
        IEEE
      </div>

      <div>

        <h2 className="text-lg font-bold leading-none">
          Conference
        </h2>

        <p className="text-sm text-slate-500">
          Template
        </p>

      </div>
    </Link>
  );
}