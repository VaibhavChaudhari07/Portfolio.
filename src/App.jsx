import { lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

// Lazy load components for better performance
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Suspense fallback={
          <div className="h-20 bg-black flex items-center justify-center">
            <div className="text-orange-500 text-sm">Loading...</div>
          </div>
        }>
          <Experience />
        </Suspense>
        <Suspense fallback={
          <div className="h-20 bg-black flex items-center justify-center">
            <div className="text-orange-500 text-sm">Loading...</div>
          </div>
        }>
          <Contact />
        </Suspense>
        <Suspense fallback={
          <div className="h-20 bg-black flex items-center justify-center">
            <div className="text-orange-500 text-sm">Loading...</div>
          </div>
        }>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

export default App
