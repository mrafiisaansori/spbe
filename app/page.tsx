"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CatalogCard } from "@/components/catalog-card";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { StatCards } from "@/components/StatCards";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { AboutSection } from "@/components/AboutSection";
import { apps, appOwners, type SpbeApp } from "@/data/apps";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeOwner, setActiveOwner] = useState("Semua");
  const [selectedApp, setSelectedApp] = useState<SpbeApp | null>(null);

  const filteredApps = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return apps.filter((app) => {
      const ownerMatch = activeOwner === "Semua" || app.owner === activeOwner;
      const searchMatch =
        normalizedQuery.length === 0 ||
        app.name.toLowerCase().includes(normalizedQuery) ||
        app.description.toLowerCase().includes(normalizedQuery) ||
        app.owner.toLowerCase().includes(normalizedQuery) ||
        app.subServices.some((service) => service.toLowerCase().includes(normalizedQuery));

      return ownerMatch && searchMatch;
    });
  }, [activeOwner, query]);

  const dashboardStats = useMemo(() => {
    const active = apps.filter((app) => app.status === "AKTIF").length;
    const maintenance = apps.filter((app) => app.status === "MAINTENANCE").length;
    const inactive = apps.filter((app) => app.status === "NON-AKTIF").length;
    const owners = new Set(apps.map((app) => app.owner)).size;
    const latestUpdate = apps
      .map((app) => app.lastUpdate)
      .sort((left, right) => new Date(right).getTime() - new Date(left).getTime())[0];

    return {
      active,
      maintenance,
      inactive,
      owners,
      latestUpdate
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.16),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(226,232,240,0.8),transparent_30%)]" />
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-16">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
              Dashboard Premium SPBE
            </span>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Katalog Aplikasi & Website SPBE dengan nuansa SaaS yang bersih, minimalis, dan mewah
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Jelajahi portofolio aplikasi SPBE dengan pengalaman visual yang modern, informatif, dan sangat nyaman dibaca untuk kebutuhan monitoring, presentasi, maupun evaluasi layanan digital.
            </p>
          </div>

          <StatCards
            totalApps={apps.length}
            totalOwners={dashboardStats.owners}
            activeApps={dashboardStats.active}
            latestUpdate={dashboardStats.latestUpdate}
          />
        </section>

        <AnalyticsSection
          active={dashboardStats.active}
          maintenance={dashboardStats.maintenance}
          inactive={dashboardStats.inactive}
        />

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Filter & Search</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                  Temukan aplikasi berdasarkan nama atau pemilik
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                Menampilkan <span className="font-semibold text-slate-900">{filteredApps.length}</span> aplikasi
              </p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto]">
              <label className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  placeholder="Cari aplikasi, sub layanan, atau pemilik..."
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </label>

              <div className="flex flex-wrap gap-3">
                {appOwners.map((owner) => {
                  const isActive = owner === activeOwner;

                  return (
                    <button
                      key={owner}
                      type="button"
                      onClick={() => setActiveOwner(owner)}
                      className={`rounded-full border px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                      }`}
                    >
                      {owner}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="katalog" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Modern Catalog Grid</h2>
            <p className="mt-2 text-sm text-slate-600">
              Setiap kartu dirancang minimalis agar informasi aplikasi terlihat jelas, rapi, dan premium.
            </p>
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredApps.map((app) => (
                <CatalogCard key={app.id} app={app} onOpenDetail={setSelectedApp} />
              ))}
            </div>
          ) : (
            <div className="rounded-[28px] border border-dashed border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Aplikasi tidak ditemukan</h3>
              <p className="mt-2 text-sm text-slate-600">Coba ubah kata kunci pencarian atau pilih filter pemilik yang lain.</p>
            </div>
          )}
        </section>

        <AboutSection />
      </main>

      <Footer />
      <ProjectDetailModal app={selectedApp} open={selectedApp !== null} onClose={() => setSelectedApp(null)} />
    </div>
  );
}
