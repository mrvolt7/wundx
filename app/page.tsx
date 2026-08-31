import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Technology } from '@/components/technology'
import { Features } from '@/components/features'
import { EasyToUse } from '@/components/easy-to-use'
import { NonInvasive } from '@/components/non-invasive'
import { SuitableCases } from '@/components/suitable-cases'
import { ProductShowcase } from '@/components/product-showcase'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Technology />
      <Features />
      <EasyToUse />
      <NonInvasive />
      <SuitableCases />
      <ProductShowcase />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  )
}
