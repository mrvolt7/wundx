import { HandHeart, Ban, Smile } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FrequencyWave } from '@/components/frequency-wave'

const points = [
  { icon: Ban, text: 'لا يحتاج لملامسة المريض بأي صورة' },
  { icon: HandHeart, text: 'جهاز غير تدخلي وغير جراحي' },
  { icon: Smile, text: 'لا يسبب أي ألم أو إزعاج أثناء الجلسات' },
]

export function NonInvasive() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-primary">
              تقنية غير ملامِسة
            </span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-navy sm:text-5xl">
              لا تدخلي
            </h2>
            <p className="mt-5 text-pretty text-lg leading-loose text-foreground/85">
              ينتمي ووندكس للأجهزة الطبية غير التدخلية (غير الجراحية) والتي لا
              تحتاج لملامسة المريض بأي صورة، لذا فإن ووندكس لا يسبب أي ألم أو
              إزعاج للمريض أثناء تلقي الجلسات.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <span className="text-base font-medium text-foreground/90">
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-navy">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* concentric field rings radiating without contact */}
                <div className="relative flex items-center justify-center">
                  {[0, 1, 2, 3].map((r) => (
                    <span
                      key={r}
                      className="absolute rounded-full border border-cyan/30"
                      style={{
                        width: `${(r + 1) * 90}px`,
                        height: `${(r + 1) * 90}px`,
                        animation: `float ${5 + r}s ease-in-out infinite`,
                      }}
                    />
                  ))}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-cyan/15 text-cyan backdrop-blur">
                    <HandHeart className="h-10 w-10" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-28 opacity-30">
                <FrequencyWave strokeClassName="text-cyan" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
