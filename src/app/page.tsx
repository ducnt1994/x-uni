import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import Testimonials from '@/components/Testimonials'
import Teachers from '@/components/Teachers'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Testimonials />
      <Teachers />
      <Footer />
    </main>
  )
}
