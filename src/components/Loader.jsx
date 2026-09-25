import logoWhite from '../../images/logo-white.png'
import logotipoWhite from '../../images/logotipo-white.png'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export function Loader({ onComplete }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete })
      tl.from('.loader-mark', { scale: 0.75, opacity: 0, duration: 0.5, ease: 'power3.out' })
        .from('.loader-name', { y: 12, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .to('.loader-line', { scaleX: 1, duration: 0.75, ease: 'power3.inOut' }, '-=0.2')
        .to('.loader-content', { y: -16, opacity: 0, duration: 0.35, ease: 'power2.in' }, '+=0.05')
        .to(root.current, { yPercent: -100, duration: 0.7, ease: 'power4.inOut' })
    }, root)
    return () => ctx.revert()
  }, [onComplete])

  return (
    <div ref={root} className="fixed inset-0 z-[100] grid place-items-center bg-[#0a0a0a] text-white">
      <div className="loader-content relative flex flex-col items-center">
        <img className="loader-mark size-20 object-contain" src={logoWhite} alt="" />
        <img className="loader-name mt-5 h-7 w-auto object-contain" src={logotipoWhite} alt="DragonCorp" />
        
        {/* Solid Progress bar */}
        <div className="mt-8 h-1 w-44 overflow-hidden rounded-full bg-white/10">
          <span className="loader-line block h-full origin-left scale-x-0 rounded-full bg-[#b91119]" />
        </div>

        <p className="mt-3.5 text-[10px] font-extrabold uppercase tracking-[0.32em] text-white/40">
          Prepare-se para evoluir
        </p>
      </div>
    </div>
  )
}
