import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { SpbeApp } from "@/data/apps";

type CatalogCardProps = {
  app: SpbeApp;
  onOpenDetail: (app: SpbeApp) => void;
};

const statusClasses: Record<SpbeApp["status"], string> = {
  AKTIF: "bg-emerald-50 text-emerald-700 border-emerald-100",
  MAINTENANCE: "bg-amber-50 text-amber-700 border-amber-100",
  "NON-AKTIF": "bg-slate-100 text-slate-700 border-slate-200"
};

export function CatalogCard({ app, onOpenDetail }: CatalogCardProps) {
  return (
    <article className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {app.owner}
          </span>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">{app.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{app.description}</p>
        </div>
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[app.status]}`}>
          {app.status}
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Sub Layanan</p>
        <p className="mt-2 text-sm text-slate-600">{app.subServices.slice(0, 3).join(", ")}</p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => onOpenDetail(app)}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Lihat Detail
          <ArrowUpRight className="h-4 w-4" />
        </button>

        <a
          href={app.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Kunjungi Website
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
