import { Phone, Globe } from 'lucide-react'

const links = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#how', label: 'كيف يعمل' },
  { href: '#features', label: 'المميزات' },
  { href: '#easy', label: 'سهولة الاستخدام' },
  { href: '#cases', label: 'الحالات الملائمة' },
  { href: '#about', label: 'عن WUNDX' },
  { href: '#contact', label: 'تواصل معنا' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-heading text-3xl font-black">
              WUND<span className="text-cyan">X</span>
            </span>
            <p className="mt-3 max-w-xs text-pretty text-sm leading-relaxed text-navy-foreground/70">
              ووندكس — تقنية علوم الحياة المعتمدة على الترددات، أحد منتجات مركز
              المعرفة التطبيقية المصرية للبحوث والخدمات.
            </p>
          </div>

          <nav aria-label="روابط الموقع">
            <h3 className="font-heading text-lg font-bold">روابط سريعة</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-navy-foreground/75 transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-lg font-bold">تواصل معنا</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+201200558666"
                  className="flex items-center gap-2 text-navy-foreground/75 transition-colors hover:text-cyan"
                >
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">(+20) 0120 055 8666</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.wundx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-navy-foreground/75 transition-colors hover:text-cyan"
                >
                  <Globe className="h-4 w-4" />
                  <span dir="ltr">www.wundx.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/15 pt-6 text-center text-sm text-navy-foreground/60">
          © {new Date().getFullYear()} WUNDX. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}
