import { useCallback, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Home } from './pages/Home'
import { Loader } from './components/Loader'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const finishLoading = useCallback(() => setLoaded(true), [])

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: .9 })
    let frame
    const raf = time => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [])

  return <>{!loaded && <Loader onComplete={finishLoading} />}<Home ready={loaded} /></>
}
