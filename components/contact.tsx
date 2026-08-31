'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Globe, Mail, Send, Check } from 'lucide-react'

const PHONE_DISPLAY = '(+20) 0120 055 8666'
const PHONE_TEL = '+201200558666'
const WHATSAPP = 'https://wa.me/201200558666'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
            لمزيد من المعلومات
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            تواصل معنا لمعرفة المزيد عن جهاز ووندكس وتقنية الترددات.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* contact info */}
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-cyan/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <Phone className="h-6 w-6" />
              </span>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">اتصل بنا</p>
                <p dir="ltr" className="font-heading text-lg font-bold text-navy">
                  {PHONE_DISPLAY}
                </p>
              </div>
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-cyan/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">واتساب</p>
                <p className="font-heading text-lg font-bold text-navy">
                  تواصل عبر واتساب
                </p>
              </div>
            </a>

            <a
              href="https://www.wundx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-cyan/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <Globe className="h-6 w-6" />
              </span>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">الموقع الإلكتروني</p>
                <p dir="ltr" className="font-heading text-lg font-bold text-navy">
                  www.wundx.com
                </p>
              </div>
            </a>
          </div>

          {/* form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="h-8 w-8" />
                </span>
                <p className="font-heading text-xl font-bold text-navy">
                  تم استلام رسالتك
                </p>
                <p className="text-muted-foreground">
                  شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-foreground"
                  >
                    الاسم
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                    placeholder="اكتب اسمك"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-foreground"
                  >
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      dir="ltr"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 pr-11 text-right text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-foreground"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                    placeholder="اكتب رسالتك هنا"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-base font-semibold text-navy-foreground transition-colors hover:bg-primary"
                >
                  إرسال
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
