import {
  Activity,
  ShieldCheck,
  Droplets,
  HeartPulse,
  Waves,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Activity,
    title: 'تحكم في النشاط البكتيري',
  },
  {
    icon: ShieldCheck,
    title: 'تقليل من الالتهابات البكتيرية',
  },
  {
    icon: Droplets,
    title: 'تحسين تدفق الدم في مكان الإصابة',
  },
  {
    icon: HeartPulse,
    title: 'تعزيز التئام الجروح المزمنة',
  },
  {
    icon: Waves,
    title: 'يساعد في تخفيف الألم',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
            مميزات ووندكس
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من المزايا التي يوفرها الجهاز اعتماداً على تقنية الترددات.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-navy group-hover:text-navy-foreground">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-pretty font-heading text-xl font-bold text-navy">
                  {f.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
