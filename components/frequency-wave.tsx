import { cn } from '@/lib/utils'

export function FrequencyWave({
  className,
  strokeClassName = 'text-cyan',
}: {
  className?: string
  strokeClassName?: string
}) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
    >
      <path
        className={cn('animate-wave', strokeClassName)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M0 60 Q 75 10 150 60 T 300 60 T 450 60 T 600 60 T 750 60 T 900 60 T 1050 60 T 1200 60 T 1350 60 T 1500 60"
      />
      <path
        className={cn('animate-wave-slow opacity-50', strokeClassName)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        d="M0 60 Q 100 100 200 60 T 400 60 T 600 60 T 800 60 T 1000 60 T 1200 60 T 1400 60"
      />
    </svg>
  )
}
