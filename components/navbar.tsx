import Link from "next/link";
import { LayoutGrid } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">SPBE Portal</p>
            <p className="text-base font-semibold text-slate-900">Katalog Aplikasi & Website SPBE</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Beranda
          </Link>
          <Link href="#katalog" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Katalog
          </Link>
          <Link href="#tentang" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Tentang
          </Link>
        </nav>
      </div>
    </header>
  );
}
