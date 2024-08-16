import Hero from './components/Hero'
import Features from './components/Features'
import BusinessForm from './components/BusinessForm'
import OutsourceComponent from './components/OutsourceComponent'

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Hero />
        <BusinessForm />
        <OutsourceComponent />
        <Features />
      </div>
    </main>
  )
}