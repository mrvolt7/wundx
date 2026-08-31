import { UserRound, Timer, CircleCheckBig } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: UserRound,
    step: '01',
    title: 'الدخول في نطاق العمل',
    desc: 'يجلس المريض في نطاق عمل الجهاز.',
  },
  {
    icon: Timer,
    step: '02',
    title: 'تشغيل الجهاز',
    desc: 'يعمل الجهاز لفترة زمنية محددة تختلف باختلاف درجة الإصابة وحجم وعمق الجرح.',
  },
  {
    icon: CircleCheckBig,
    step: '03',
    title: 'انتهاء الجلسة',
    desc: 'يشعر المريض بتحسن بعد جلسة واحدة إلى ثلاث جلسات فقط.',
  },
]

export function EasyToUse() {
  return (
    <section id="easy" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
            سهل الاستخدام
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            يتميز ووندكس بأنه جهاز سهل الاستخدام، حيث يجلس المريض في نطاق عمل
            الجهاز لفترة زمنية محددة تختلف باختلاف درجة الإصابة وحجم وعمق الجرح.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 120}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <span className="absolute left-6 top-6 font-heading text-4xl font-black text-secondary-foreground/10">
                  {s.step}
                </span>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-navy-foreground">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
