"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { ChartPie } from "lucide-react";

type AnalyticsSectionProps = {
  active: number;
  maintenance: number;
  inactive: number;
};

const chartColors = ["#2563eb", "#93c5fd", "#dbeafe"];

export function AnalyticsSection({ active, maintenance, inactive }: AnalyticsSectionProps) {
  const data = [
    { name: "Aktif", value: active },
    { name: "Maintenance", value: maintenance },
    { name: "Non-Aktif", value: inactive }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ChartPie className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Dashboard Analytics</p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Status Aplikasi SPBE</h2>
            </div>
          </div>

          <div className="mt-6 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={84}
                  outerRadius={122}
                  paddingAngle={3}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={entry.name} fill={chartColors[index]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "18px",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    color: "#0f172a",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-600">Distribusi Persentase</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                Komposisi Portofolio
              </h3>
            </div>
            <div className="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              Total {total} aplikasi
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {data.map((item, index) => {
              const percent = total === 0 ? 0 : Math.round((item.value / total) * 100);

              return (
                <div key={item.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: chartColors[index] }} />
                      <span className="text-sm font-semibold text-slate-900">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{percent}%</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.value} aplikasi terdaftar</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
