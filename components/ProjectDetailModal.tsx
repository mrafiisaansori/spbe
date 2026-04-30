"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, Globe, ListChecks, X } from "lucide-react";
import type { SpbeApp } from "@/data/apps";

type ProjectDetailModalProps = {
  app: SpbeApp | null;
  open: boolean;
  onClose: () => void;
};

const statusClasses: Record<SpbeApp["status"], string> = {
  AKTIF: "bg-emerald-50 text-emerald-700 border-emerald-100",
  MAINTENANCE: "bg-amber-50 text-amber-700 border-amber-100",
  "NON-AKTIF": "bg-slate-100 text-slate-700 border-slate-200"
};

export function ProjectDetailModal({ app, open, onClose }: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      {open && app ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-2xl flex-col border-l border-slate-200 bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-6 sm:px-8">
              <div>
                <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[app.status]}`}>
                  {app.status}
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{app.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{app.description}</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
                aria-label="Tutup panel detail"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Deskripsi Lengkap</p>
                <p className="mt-4 text-base leading-8 text-slate-600">{app.fullDescription}</p>
              </section>

              <section className="mt-8 rounded-3xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Sub Layanan</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {app.subServices.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-900">Pemilik Aplikasi</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{app.owner}</p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-900">Website</h3>
                  </div>
                  <a
                    href={app.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    {app.websiteUrl}
                  </a>
                </div>
              </section>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
