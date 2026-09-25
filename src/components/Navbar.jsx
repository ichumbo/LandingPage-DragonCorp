import logotipoWhite from '../../images/logotipo-white.png'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dumbbell, Menu, Smartphone, Sparkles, TrendingUp, X } from 'lucide-react'
import { Button } from './Button'

const links = [
  { label: 'Início', href: '#inicio', icon: Sparkles },
  { label: 'Treinos', href: '#treinos', icon: Dumbbell },
  { label: 'Resultados', href: '#resultados', icon: TrendingUp },
  { label: 'Aplicativo', href: '#aplicativo', icon: Smartphone }
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      // Section spy
      const sections = ['inicio', 'treinos', 'resultados', 'aplicativo']
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 140 && rect.bottom >= 140
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-3 sm:px-6 transition-all duration-200 ${scrolled ? 'pt-2.5 sm:pt-3' : 'pt-4 sm:pt-5'}`}>
      <div
        className={`page-container flex h-16 sm:h-[68px] items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-200 ${
          scrolled || open
            ? 'border border-white/10 bg-[#0d0d0d] shadow-2xl'
            : 'border border-white/15 bg-[#0d0d0d]/95'
        }`}
      >
        {/* Brand Logo */}
        <a href="#inicio" className="group flex items-center gap-3 transition-transform hover:scale-[1.01]">
          <img className="h-7 sm:h-8 w-auto object-contain" src={logotipoWhite} alt="DragonCorp" />
          <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-600/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-400">
            <span className="size-1.5 rounded-full bg-[#b91119]" />
            2.0
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#161616] p-1.5 md:flex">
          {links.map(({ label, href }) => {
            const isActive = activeSection === href.replace('#', '')
            return (
              <a
                key={label}
                href={href}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                  isActive ? 'text-white font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            )
          })}
        </nav>

        {/* Right CTA / Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="px-3.5 py-2 text-xs font-semibold tracking-wide text-white/70 transition-colors hover:text-white"
            href="#cadastro"
          >
            Entrar
          </a>
          <Button href="#cadastro" className="h-9 px-4 text-xs">
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <button
          className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-3 top-[76px] z-50 rounded-2xl border border-white/10 bg-[#121212] p-5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-red-600/15 text-[#b91119]">
                    <Icon size={16} />
                  </span>
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <Button
                href="#cadastro"
                onClick={() => setOpen(false)}
                className="w-full justify-center h-12 text-sm"
              >
                Criar Minha Conta
              </Button>
              <p className="mt-3 text-center text-xs text-white/40">
                Teste 7 dias grátis • Cancele quando quiser
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
