import { Waves } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function SuitableCases() {
  return (
    <section id="cases" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center text-navy-foreground sm:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.42_0.11_249)_0%,transparent_55%)]"
            />
            <div className="relative">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/15 text-cyan">
                <Waves className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-heading text-4xl font-extrabold sm:text-5xl">
                للحالات المزمنة
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-loose text-navy-foreground/85">
                يساعد ووندكس المرضى الذين يعانون من عدم الاستجابة للمضادات الحيوية،
                حيث أنه يعتمد على الموجات الكهرومغناطيسية الرنينة وليس المركبات
                الدوائية.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
