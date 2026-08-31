import Image from 'next/image'
import { Monitor, SquareStack, Move } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const callouts = [
  {
    icon: Monitor,
    title: 'شاشة لمس تفاعلية',
    desc: 'واجهة تشغيل رقمية لعرض حالة الجلسة.',
  },
  {
    icon: SquareStack,
    title: 'وحدة الترددات',
    desc: 'قلب الجهاز المعتمد على تقنية PD.',
  },
  {
    icon: Move,
    title: 'قاعدة متنقلة',
    desc: 'عجلات لسهولة الحركة داخل المنشأة.',
  },
]

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-cyan">
            PD Technology
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-navy sm:text-5xl">
            تعرّف على جهاز ووندكس
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative flex justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-secondary to-transparent"
            />
            <Image
              src="/wundx-device.png"
              alt="عرض جهاز ووندكس WUNDX من الأمام"
              width={560}
              height={560}
              className="relative h-auto w-full max-w-[440px] drop-shadow-2xl"
            />
          </Reveal>

          <div className="space-y-5">
            {callouts.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-cyan/50">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
