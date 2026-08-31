'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#how', label: 'كيف يعمل' },
  { href: '#features', label: 'المميزات' },
  { href: '#easy', label: 'سهولة الاستخدام' },
  { href: '#cases', label: 'الحالات الملائمة' },
  { href: '#about', label: 'عن WUNDX' },
  { href: '#contact', label: 'تواصل معنا' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="WUNDX">
          <span
            className={cn(
              'font-heading text-2xl font-extrabold tracking-tight transition-colors',
              scrolled ? 'text-navy' : 'text-navy-foreground',
            )}
          >
            WUND<span className="text-cyan">X</span>
          </span>
          <span
            className={cn(
              'hidden text-sm font-medium transition-colors sm:inline',
              scrolled ? 'text-muted-foreground' : 'text-navy-foreground/70',
            )}
          >
            ووندكس
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  scrolled
                    ? 'text-foreground/80 hover:bg-secondary hover:text-navy'
                    : 'text-navy-foreground/85 hover:bg-navy-foreground/10 hover:text-navy-foreground',
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={cn(
            'hidden rounded-full px-5 py-2 text-sm font-semibold transition-colors lg:inline-block',
            scrolled
              ? 'bg-navy text-navy-foreground hover:bg-primary'
              : 'bg-cyan text-navy hover:bg-cyan/90',
          )}
        >
          لمزيد من المعلومات
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden',
            scrolled || open ? 'text-navy' : 'text-navy-foreground',
          )}
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-navy px-3 py-3 text-center text-base font-semibold text-navy-foreground"
              >
                لمزيد من المعلومات
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
