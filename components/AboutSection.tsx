import { Building2, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    title: "Tata Kelola yang Elegan",
    description:
      "Kami merancang katalog ini sebagai wajah digital yang bersih dan profesional untuk membantu instansi melihat portofolio aplikasi SPBE dengan lebih percaya diri.",
    icon: Sparkles
  },
  {
    title: "Informasi yang Mudah Dipahami",
    description:
      "Setiap aplikasi ditampilkan dengan struktur yang sederhana, jelas, dan dapat langsung dibaca oleh pimpinan, operator, maupun tim teknis.",
    icon: Building2
  },
  {
    title: "Kepercayaan Melalui Keteraturan",
    description:
      "Pendekatan visual yang rapi, data yang terstruktur, dan interaksi yang halus membantu membangun pengalaman dashboard yang terasa matang dan dapat diandalkan.",
    icon: ShieldCheck
  }
];

export function AboutSection() {
  return (
    <section id="tentang" className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Tentang Platform
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">
            Katalog SPBE yang dirancang seperti dashboard SaaS modern
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Platform ini dibuat untuk menyajikan katalog aplikasi dan website SPBE dalam format yang sangat bersih, minimalis, dan mewah. Tujuannya bukan hanya menampilkan daftar aplikasi, tetapi juga menghadirkan pengalaman visual yang matang untuk kebutuhan evaluasi, presentasi, dan pengambilan keputusan.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-[28px] border border-slate-100 bg-slate-50 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
