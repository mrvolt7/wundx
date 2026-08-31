import Image from 'next/image'
import { ArrowLeft, Waves } from 'lucide-react'
import { FrequencyWave } from '@/components/frequency-wave'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-16 text-navy-foreground"
    >
      {/* subtle background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.42_0.11_249)_0%,transparent_45%),radial-gradient(circle_at_90%_80%,oklch(0.35_0.09_230)_0%,transparent_50%)]"
      />
      {/* faint wave layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-20"
      >
        <FrequencyWave strokeClassName="text-cyan" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* copy */}
        <div className="text-center lg:text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 text-sm font-medium text-cyan">
            <Waves className="h-4 w-4" />
            بتكنولوجيا PD Technology
          </span>

          <h1 className="mt-6 font-heading text-6xl font-black leading-none tracking-tight sm:text-7xl">
            ووندكس
          </h1>
          <p className="mt-4 font-heading text-2xl font-bold text-cyan sm:text-3xl">
            تقنية تعتمد على الترددات
          </p>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-navy-foreground/80 sm:text-lg lg:mx-0">
            إحدى منتجات شركة «مركز المعرفة التطبيقية المصرية للبحوث والخدمات»،
            أول شركة مصرية تعمل على تطوير تقنيات علوم الحياة المعتمدة على الترددات
            <span className="font-semibold text-navy-foreground">
              {' '}
              Frequency Driven Life Sciences (FDL)
            </span>
            .
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-3 text-base font-semibold text-navy transition-transform hover:scale-[1.03]"
            >
              اكتشف ووندكس
              <ArrowLeft className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/25 px-7 py-3 text-base font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              كيف يعمل؟
            </a>
          </div>
        </div>

        {/* product image */}
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-cyan/15 blur-3xl"
          />
          <div className="relative animate-float">
            <Image
              src="/wundx-device.png"
              alt="جهاز ووندكس WUNDX الطبي المعتمد على الترددات"
              width={620}
              height={620}
              priority
              className="h-auto w-full max-w-[420px] drop-shadow-2xl lg:max-w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
