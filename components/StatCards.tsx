import { AppWindow, Building2, CheckCircle2, CalendarClock } from "lucide-react";

type StatCardsProps = {
  totalApps: number;
  totalOwners: number;
  activeApps: number;
  latestUpdate: string;
};

const items = [
  {
    key: "totalApps",
    label: "Total Aplikasi",
    icon: AppWindow
  },
  {
    key: "totalOwners",
    label: "Total Instansi",
    icon: Building2
  },
  {
    key: "activeApps",
    label: "Aplikasi Aktif",
    icon: CheckCircle2
  },
  {
    key: "latestUpdate",
    label: "Update Terbaru",
    icon: CalendarClock
  }
] as const;

export function StatCards({ totalApps, totalOwners, activeApps, latestUpdate }: StatCardsProps) {
  const values = { totalApps, totalOwners, activeApps, latestUpdate };

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.key}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-600">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                    {values[item.key]}
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
