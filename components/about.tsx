import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
            عن WUNDX
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-loose text-foreground/85">
            ووندكس هو أحد منتجات شركة{' '}
            <span className="font-semibold text-navy">
              «مركز المعرفة التطبيقية المصرية للبحوث والخدمات»
            </span>
            ، والتي تُعد أول شركة مصرية تعمل على تطوير تقنيات علوم الحياة المعتمدة
            على الترددات{' '}
            <span className="font-semibold text-navy">
              Frequency Driven Life Sciences (FDL)
            </span>
            .
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
            <span className="font-heading text-3xl font-black text-navy">
              WUND<span className="text-cyan">X</span>
            </span>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              بتكنولوجيا PD Technology — علوم الحياة المعتمدة على الترددات
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
