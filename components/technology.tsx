import { Reveal } from '@/components/reveal'
import { FrequencyWave } from '@/components/frequency-wave'

export function Technology() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
      >
        <div className="absolute inset-x-0 top-10 h-40">
          <FrequencyWave strokeClassName="text-cyan" />
        </div>
        <div className="absolute inset-x-0 bottom-10 h-40">
          <FrequencyWave strokeClassName="text-navy-foreground" />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-block rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 font-heading text-sm font-bold tracking-wide text-cyan">
            FDL
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold sm:text-4xl">
            Frequency Driven Life Sciences
          </h2>
          <p className="mt-3 font-heading text-xl font-bold text-cyan">
            علوم الحياة المعتمدة على الترددات
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-loose text-navy-foreground/80">
            يعتمد ووندكس على تقنية FDL التي تستخدم الموجات الكهرومغناطيسية الرنينة
            في نطاق الترددات فائقة الانخفاض للتحكم في النشاط البكتيري وتحفيز ترميم
            الأنسجة بشكل طبيعي — منهج علمي حديث يعتمد على الترددات وليس على المركبات
            الدوائية.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
