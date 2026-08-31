import { Radio, Cpu, Sparkles, ChevronLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FrequencyWave } from '@/components/frequency-wave'

const flow = [
  { icon: Radio, title: 'التردد', desc: 'ترددات فائقة الانخفاض (ELF)' },
  { icon: Cpu, title: 'الجهاز', desc: 'ووندكس يتحكم في النشاط البكتيري' },
  { icon: Sparkles, title: 'عملية مؤتمتة', desc: 'تحفيز الخلايا وترميم الأنسجة' },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-cyan">
            Frequency Driven Life Sciences
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold text-navy sm:text-5xl">
            كيف يعمل ووندكس؟
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <p className="text-pretty text-lg leading-loose text-foreground/85">
              يقوم ووندكس بالتحكم في النشاط البكتيري باستخدام ترددات الرنين الحيوي
              الكهرومغناطيسي والذي يقع في نطاق ترددات فائقة الانخفاض{' '}
              <span className="font-semibold text-navy">
                Extreme Low Frequency (ELF)
              </span>
              . تعمل هذه الترددات على التحكم في نشاط البكتيريا المسببة للجروح
              بالإضافة إلى تحفيز الخلايا الحية وترميم الأنسجة بشكل طبيعي مما يساعد
              في التئام الجروح.
            </p>
          </Reveal>

          {/* flow visualization */}
          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="absolute inset-x-6 top-1/2 h-16 -translate-y-1/2 opacity-40">
                <FrequencyWave strokeClassName="text-primary" />
              </div>
              <div className="relative flex items-center justify-between gap-2">
                {flow.map((step, i) => (
                  <div key={step.title} className="flex items-center gap-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-navy-foreground shadow-lg">
                        <step.icon className="h-7 w-7" />
                      </div>
                      <p className="mt-3 font-heading text-sm font-bold text-navy">
                        {step.title}
                      </p>
                      <p className="mt-1 max-w-[7rem] text-xs leading-snug text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                    {i < flow.length - 1 && (
                      <ChevronLeft className="mb-8 h-6 w-6 shrink-0 text-cyan" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
