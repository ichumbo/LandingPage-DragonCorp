import logoWhite from '../../images/logo-white.png'
import logoPrincipal from '../../images/logo-principal.png'
import logotipoWhite from '../../images/logotipo-white.png'
import workoutImage from '../../images/workout-bg.jpg'
import imagemCelular2 from '../../images/imagem_celular2.jpeg'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import {
  Activity,
  Apple,
  ArrowRight,
  ArrowUp,
  Check,
  ChevronRight,
  Clock3,
  Dumbbell,
  Flame,
  Heart,
  Mail,
  Play,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Trophy,
  X,
  Zap
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Button } from '../components/Button'
import { SectionTitle } from '../components/SectionTitle'
import { WorkoutCard } from '../components/WorkoutCard'
import { ProgressPanel } from '../components/ProgressPanel'
import { HeroPhonesMockup } from '../components/HeroPhonesMockup'
import { workouts } from '../data/workouts'

const testimonials = [
  {
    name: 'Rafael Martins',
    role: 'Membro há 8 meses',
    tag: '-11kg em 16 semanas',
    avatar: 'RM',
    stars: 5,
    text: 'O app me deu a organização que faltava. Hoje eu chego na academia, abro o treino do dia e sei exatamente as cargas, séries e descansos. A consistência nunca foi tão natural.'
  },
  {
    name: 'Beatriz Vasconcelos',
    role: 'Membro há 5 meses',
    tag: 'Ganho de 4.5kg de massa',
    avatar: 'BV',
    stars: 5,
    text: 'A periodização dos treinos de força é impecável. Em menos de meio ano aumentei minhas cargas em 40% com uma postura muito mais segura. Os vídeos explicativos fazem toda a diferença.'
  },
  {
    name: 'Lucas Nogueira',
    role: 'Membro há 1 ano',
    tag: 'Condicionamento de atleta',
    avatar: 'LN',
    stars: 5,
    text: 'Os treinos de HIIT e mobilidade mudaram minha rotina. Treino em casa ou na academia sem desculpa. DragonCorp é sem dúvidas a melhor plataforma fitness que já usei.'
  }
]

export function Home({ ready }) {
  const heroRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [newsletterSent, setNewsletterSent] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')

  // GSAP Cinematic Entrance Sequence
  useLayoutEffect(() => {
    if (!ready) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.hero-badge',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.1 }
      )
        .fromTo(
          '.hero-heading-line',
          { y: 60, opacity: 0, skewY: 2 },
          { y: 0, opacity: 1, skewY: 0, duration: 0.85, stagger: 0.12 },
          '-=0.35'
        )
        .fromTo(
          '.hero-desc',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          '-=0.45'
        )
        .fromTo(
          '.hero-cta',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-stats',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.hero-phone-bg',
          { x: 60, y: 30, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 0.95, ease: 'power3.out' },
          '-=0.7'
        )
        .fromTo(
          '.hero-phone-fg',
          { x: 40, y: 50, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1.05, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-hud',
          { scale: 0.75, opacity: 0, y: 25 },
          { scale: 1, opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'back.out(1.8)' },
          '-=0.5'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [ready])

  const filteredWorkouts = selectedCategory === 'Todos'
    ? workouts
    : workouts.filter(w => w.category.toLowerCase().includes(selectedCategory.toLowerCase()))

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSent(true)
    setTimeout(() => {
      setNewsletterEmail('')
    }, 3000)
  }

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#0a0a0a] text-[#ededed]">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                             */}
        {/* ========================================================================= */}
        <section
          ref={heroRef}
          id="inicio"
          className="relative min-h-[820px] lg:min-h-[920px] overflow-hidden pt-28 pb-16 lg:pt-0 lg:pb-0 flex items-center"
        >
          {/* Layer 1: Solid Dark Base */}
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          {/* Layer 2: Solid Red Dynamic Split Area */}
          <div
            className="absolute inset-y-0 left-0 w-full lg:w-[54%] overflow-hidden bg-[#b91119] pointer-events-none"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 86% 100%, 0 100%)'
            }}
          >
            {/* Subtle Tech Grid inside red section */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          </div>

          {/* Mobile Solid Red Area */}
          <div className="absolute inset-x-0 top-0 h-[52%] bg-[#b91119] lg:hidden pointer-events-none" />

          {/* Stealth Dragon Watermark Emblem */}
          <img
            src={logoWhite}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 sm:-left-36 top-16 sm:top-24 h-[580px] w-[580px] sm:h-[720px] sm:w-[720px] select-none object-contain opacity-[0.06]"
          />

          {/* Hero Content Grid */}
          <div className="page-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] min-h-[760px] lg:min-h-[880px]">
            {/* Left Column: Messaging & CTAs */}
            <div className="relative z-20 max-w-2xl pt-6 lg:pt-0">
              {/* Top Badge */}
              <div className="hero-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
                <span className="size-2 rounded-full bg-red-400" />
                <span>Nova Versão 2.0 • Academia & Casa</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-title text-[clamp(2.75rem,5.6vw,5.5rem)] font-black uppercase leading-[0.98] tracking-[-0.04em] text-white">
                <span className="hero-heading-line block">Seu limite é</span>
                <span className="hero-heading-line block">o próximo</span>
                <span className="hero-heading-line block text-white">
                  nível<span className="text-white lg:text-[#b91119]">.</span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-desc mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80 font-normal">
                Planos inteligentes, execução guiada em vídeo e métricas reais de consistência. Construa o físico e a disciplina que você sempre buscou.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
                <Button href="#treinos" className="h-13 px-7 text-sm font-extrabold shadow-xl">
                  Começar Agora
                </Button>
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-black/50 px-6 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-red-600/30 text-red-400 group-hover:bg-[#b91119] group-hover:text-white transition-colors">
                    <Play size={15} fill="currentColor" />
                  </span>
                  Ver Demonstração
                </button>
              </div>

              {/* Social Proof & Metrics */}
              <div className="hero-stats mt-10 sm:mt-12 flex flex-wrap items-center gap-8 border-t border-white/15 pt-6">
                <div>
                  <div className="flex items-baseline gap-1">
                    <b className="display text-3xl sm:text-4xl font-black text-white">+120</b>
                    <span className="text-sm font-bold text-red-400">rotinas</span>
                  </div>
                  <p className="text-xs font-semibold text-white/60">treinos periodizados</p>
                </div>

                <div className="h-10 w-px bg-white/15" />

                <div>
                  <div className="flex items-center gap-1.5">
                    <b className="display text-3xl sm:text-4xl font-black text-white">4.9</b>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-white/60">+15.000 alunos ativos</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Isometric Dual Smartphone App Mockups */}
            <HeroPhonesMockup />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMO FUNCIONA (HOW IT WORKS)                                              */}
        {/* ========================================================================= */}
        <section className="relative border-t border-white/10 bg-[#0d0d0d] py-24 sm:py-32">
          <div className="page-container">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionTitle
                eyebrow="Método DragonCorp"
                title={<>Menos dúvida.<br />Mais movimento real.</>}
                text="Uma jornada objetiva e estruturada desde o diagnóstico inicial até o topo da sua melhor forma."
              />
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-red-400">
                <Zap size={14} /> Passo a Passo
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  step: '01',
                  icon: Target,
                  title: 'Defina sua meta',
                  text: 'Hipertrofia, definição extrema, força bruta ou condicionamento de elite. Seu plano começa com foco total.'
                },
                {
                  step: '02',
                  icon: Zap,
                  title: 'Receba seu plano',
                  text: 'Treinos periodizados com repetições, intervalos cronometrados e vídeos em 4K com instruções técnicas perfeitas.'
                },
                {
                  step: '03',
                  icon: Trophy,
                  title: 'Evolua todo dia',
                  text: 'Monitore cargas levantadas, frequência semanal e visualize gráficos automáticos de consistência física.'
                }
              ].map(({ step, icon: Icon, title, text }, i) => (
                <motion.article
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-8 shadow-xl transition-all duration-300 hover:border-[#b91119]/50 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-white/5 text-[#b91119] border border-white/10 transition-colors group-hover:bg-[#b91119] group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <span className="display text-3xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {step}
                    </span>
                  </div>

                  <h3 className="display mt-8 text-2xl font-black uppercase text-white transition-colors group-hover:text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {text}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#b91119] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Saber mais</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TREINOS (WORKOUTS EXPLORER)                                               */}
        {/* ========================================================================= */}
        <section id="treinos" className="relative bg-[#111111] py-24 sm:py-32">
          <div className="page-container">
            <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionTitle
                eyebrow="Explore os Treinos"
                title={<>Treine do seu jeito.<br />Evolua a cada série.</>}
                text="Mais de 120 treinos desenvolvidos por especialistas. Escolha seu objetivo e comece hoje."
              />

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-[#161616] p-1.5">
                {['Todos', 'Musculação', 'Funcional', 'Cardio'].map(category => {
                  const isActive = selectedCategory === category
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-xl cursor-pointer ${
                        isActive ? 'text-white' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="category-active-bg"
                          className="absolute inset-0 rounded-xl bg-[#b91119] shadow-sm"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{category}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Workouts Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWorkouts.map((w, i) => (
                <WorkoutCard key={w.id || w.title} workout={w} index={i} />
              ))}
            </div>

            {/* Bottom Section Link */}
            <div className="mt-14 flex justify-center">
              <Button href="#cadastro" variant="secondary" className="h-12 px-8">
                Ver Todos os +120 Treinos no App
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* RESULTADOS (RESULTS & TELEMETRY DASHBOARD)                                */}
        {/* ========================================================================= */}
        <section id="resultados" className="relative bg-[#090909] py-24 sm:py-32">
          <div className="page-container relative z-10 grid items-center gap-16 lg:grid-cols-2">
            {/* Left: The Showstopper Progress Panel */}
            <ProgressPanel />

            {/* Right: Feature Highlights with Interactive Hover Cards */}
            <div>
              <SectionTitle
                eyebrow="Mais que um treino"
                title={<>Consistência vira<br />resultado visível.</>}
                text="Acompanhe sua frequência, cargas, descanso e medidas em uma experiência intuitiva, feita para você nunca perder o foco."
              />

              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: Dumbbell,
                    title: 'Planos Inteligentes & Adaptativos',
                    text: 'Seus treinos se ajustam conforme sua evolução de carga e disponibilidade semanal.',
                    color: 'text-red-500 bg-red-600/15'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Execução Segura em Vídeo 4K',
                    text: 'Instruções biomecânicas claras para cada exercício, minimizando lesões e maximizando estímulos.',
                    color: 'text-amber-500 bg-amber-600/15'
                  },
                  {
                    icon: Flame,
                    title: 'Gamificação & Sequências de Treino',
                    text: 'Desafios mensais, insígnias de conquista e histórico de dias ativos para manter a chama acesa.',
                    color: 'text-red-500 bg-red-600/15'
                  },
                  {
                    icon: Activity,
                    title: 'Sincronização com Apple Health & Strava',
                    text: 'Integração completa com seus relógios e monitores cardíacos em tempo real.',
                    color: 'text-emerald-500 bg-emerald-600/15'
                  }
                ].map(({ icon: Icon, title, text, color }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 6 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative flex cursor-default gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-5 transition-all duration-300 hover:border-red-600/40 hover:bg-[#161616]"
                  >
                    <span className="absolute bottom-0 left-0 top-0 w-1 -translate-x-full bg-[#b91119] transition-transform duration-300 group-hover:translate-x-0" />
                    
                    <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${color} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={22} />
                    </span>

                    <div className="flex-1">
                      <h3 className="font-extrabold text-white text-base transition-colors group-hover:text-red-400">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-white/55 leading-relaxed">
                        {text}
                      </p>
                    </div>

                    <ChevronRight size={18} className="self-center text-white/20 transition-all duration-300 group-hover:text-[#b91119] group-hover:translate-x-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* APLICATIVO NO SEU BOLSO (APP SHOWCASE)                                    */}
        {/* ========================================================================= */}
        <section id="aplicativo" className="relative overflow-hidden bg-[#101010] py-24 sm:py-32">
          <div className="page-container grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Content */}
            <div>
              <SectionTitle
                eyebrow="DragonCorp Mobile"
                title={<>Seu treino completo.<br />Onde você estiver.</>}
                text="Leve seu plano, histórico de cargas e orientações de cada exercício na palma da mão, seja na academia mais moderna ou no parque."
              />

              <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                {[
                  'Treinos em vídeo sem travamentos',
                  'Histórico inteligente de cargas',
                  'Lembretes e notificações ativas',
                  'Modo offline para viagens',
                  'Cronômetro de descanso automático',
                  'Métricas de frequência cardíaca'
                ].map(item => (
                  <p key={item} className="flex items-center gap-2.5 text-sm font-semibold text-white/70">
                    <span className="grid size-5 place-items-center rounded-full bg-red-600/20 text-[#b91119]">
                      <Check size={13} />
                    </span>
                    {item}
                  </p>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#cadastro"
                  className="group flex h-14 items-center gap-3.5 rounded-2xl border border-white/15 bg-black px-6 text-white shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-neutral-900 hover:-translate-y-0.5"
                >
                  <Apple size={28} className="transition-transform group-hover:scale-105" />
                  <span className="text-left text-[11px] leading-tight text-white/50">
                    Baixar na<br />
                    <b className="text-sm font-extrabold text-white">App Store</b>
                  </span>
                </a>

                <a
                  href="#cadastro"
                  className="group flex h-14 items-center gap-3.5 rounded-2xl border border-white/15 bg-black px-6 text-white shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-neutral-900 hover:-translate-y-0.5"
                >
                  <Play size={24} fill="currentColor" className="text-[#b91119] transition-transform group-hover:scale-105" />
                  <span className="text-left text-[11px] leading-tight text-white/50">
                    Disponível no<br />
                    <b className="text-sm font-extrabold text-white">Google Play</b>
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Realistic Phone Mockup */}
            <div className="relative flex items-center justify-center min-h-[560px] lg:min-h-[640px]">
              {/* Crimson Accent Curved Backdrop Shape */}
              <div className="absolute inset-x-6 inset-y-10 rounded-[48px] bg-[#b91119] shadow-2xl" />

              {/* Realistic Smartphone Frame */}
              <motion.div
                initial={{ y: 50, rotate: -3, opacity: 0 }}
                whileInView={{ y: 0, rotate: -1.5, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 w-[275px] sm:w-[310px] rounded-[48px] sm:rounded-[52px] border-[8px] sm:border-[10px] border-[#181818] bg-[#0c0c0c] p-2 shadow-2xl"
              >
                {/* Real App Screenshot 2 (DragonCorp Header & Perfil do Personal) */}
                <div className="relative overflow-hidden rounded-[38px] sm:rounded-[42px] bg-[#0e0e0e]">
                  <img
                    src={imagemCelular2}
                    alt="Interface do Aplicativo DragonCorp"
                    className="w-full h-auto object-cover select-none block"
                  />
                </div>
              </motion.div>

              {/* Floating App Feature Badge */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute right-0 sm:-right-4 top-[22%] z-20 hidden sm:block w-60 rounded-2xl border border-white/15 bg-[#181818] p-4 text-white shadow-xl"
              >
                <div className="flex items-center gap-2 text-[#b91119]">
                  <Smartphone size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Sincronização Real</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  Seus dados sincronizados em segundos com relógio, celular e tablet.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DEPOIMENTOS (COMMUNITY & SOCIAL PROOF)                                    */}
        {/* ========================================================================= */}
        <section className="relative bg-[#090909] py-24 sm:py-32 border-t border-white/10">
          <div className="page-container">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionTitle
                eyebrow="Histórias Reais"
                title={<>Quem treina com foco<br />alcança resultados.</>}
                text="Mais de 15.000 pessoas transformaram sua saúde e físico com o acompanhamento DragonCorp."
              />
              <div className="flex items-center gap-1.5 text-sm font-bold text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <span className="ml-2 text-xs font-extrabold text-white">4.9 / 5.0 (2.400+ avaliações)</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, idx) => (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121212] p-8 shadow-xl transition-all duration-300 hover:border-red-600/40 hover:-translate-y-1"
                >
                  <div>
                    {/* Stars and Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <span className="rounded-full border border-red-500/30 bg-red-600/15 px-2.5 py-0.5 text-[10px] font-extrabold text-red-400">
                        {t.tag}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/75 italic">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-3.5 border-t border-white/10 pt-5">
                    <div className="grid size-11 place-items-center rounded-full bg-[#b91119] font-black text-sm text-white shadow-md">
                      {t.avatar}
                    </div>
                    <div>
                      <b className="block text-sm font-extrabold text-white">{t.name}</b>
                      <p className="text-xs text-white/45">{t.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* NÚMEROS & MANIFESTO (STATS & BRAND VALUES)                                */}
        {/* ========================================================================= */}
        <section id="sobre" className="relative bg-[#0d0d0d] py-24 sm:py-32 border-t border-white/10">
          <div className="page-container text-center">
            {/* Dragon Emblem */}
            <div className="relative mx-auto mb-8 size-20">
              <img src={logoPrincipal} className="relative z-10 size-20 object-contain" alt="DragonCorp" />
            </div>

            <h2 className="mx-auto max-w-4xl text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white/80">
              Não importa onde você começa. O que transforma sua vida é{' '}
              <span className="font-black text-[#b91119]">
                NÃO PARAR.
              </span>
            </h2>

            {/* Metrics Grid */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-y border-white/10 py-10 lg:grid-cols-4">
              {[
                { number: '15 mil+', label: 'Alunos ativos diariamente' },
                { number: '350 mil+', label: 'Treinos concluídos' },
                { number: '98.4%', label: 'Taxa de satisfação' },
                { number: '4.9 ★', label: 'Avaliação média nas lojas' }
              ].map(({ number, label }) => (
                <div key={label} className="py-2">
                  <b className="display block text-3xl sm:text-5xl font-black text-white">{number}</b>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CADASTRO / CTA FINAL (CONVERSION SECTION)                                */}
        {/* ========================================================================= */}
        <section id="cadastro" className="relative overflow-hidden bg-[#b91119] py-24 sm:py-32 text-white">
          {/* Watermark Dragon Silhouette */}
          <img
            src={logoWhite}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-36 size-[680px] select-none object-contain opacity-[0.07]"
          />
          <div className="absolute -bottom-32 -left-32 size-96 rounded-full border-[80px] border-black/10 pointer-events-none" />

          <div className="page-container relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-black/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                <span className="size-1.5 rounded-full bg-white" />
                Sua hora de evoluir é agora
              </div>

              <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.02] tracking-tight">
                Seu próximo treino pode mudar tudo.
              </h2>

              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
                Comece hoje com um plano montado especificamente para sua rotina e seus objetivos. Experimente todas as funcionalidades gratuitamente por 7 dias.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3.5">
                {[
                  'Cadastro em menos de 1 minuto',
                  'Treinos para academia ou em casa',
                  'Cancele quando quiser sem multas'
                ].map(item => (
                  <span key={item} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white/90">
                    <span className="grid size-5 place-items-center rounded-full bg-black/30 text-white">
                      <Check size={12} />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Solid Conversion Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/20 bg-black/40 p-7 sm:p-9 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-white/60">Oferta Especial</span>
                  <h3 className="mt-1 text-2xl sm:text-3xl font-black text-white">7 Dias Para Testar Grátis</h3>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-white">
                  <Flame size={24} />
                </span>
              </div>

              <div className="my-6 h-px bg-white/15" />

              <div className="flex items-end justify-between">
                <div>
                  <span className="display text-4xl sm:text-5xl font-black text-white">R$ 0</span>
                  <p className="mt-1 text-xs font-semibold text-white/60">para começar o teste agora</p>
                </div>
                <div className="text-right">
                  <b className="text-sm font-bold text-white">+15 mil</b>
                  <p className="text-xs text-white/60">alunos já aprovaram</p>
                </div>
              </div>

              <a
                href="#inicio"
                className="mt-8 flex h-14 w-full items-center justify-between rounded-2xl bg-white px-6 font-extrabold text-sm uppercase tracking-wider text-black shadow-2xl transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Criar Minha Conta Grátis</span>
                <ArrowRight size={18} />
              </a>

              <p className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-white/60">
                <ShieldCheck size={15} /> Ambiente 100% seguro. Cancele com 1 clique.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* FOOTER                                                                    */}
      {/* ========================================================================= */}
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#060606] text-white">
        <img
          src={logoWhite}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 -left-44 size-[520px] object-contain opacity-[0.02]"
        />

        <div className="page-container relative py-16 sm:py-20">
          <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr_1fr]">
            {/* Column 1: Brand Info */}
            <div>
              <a href="#inicio" className="inline-block">
                <img src={logotipoWhite} alt="DragonCorp" className="h-8 w-auto object-contain" />
              </a>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
                Treinos inteligentes, acompanhamento biométrico e consistência guiada para transformar dedicação em resultado visível.
              </p>
              
              <div className="mt-7 flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-[#b91119] hover:bg-[#b91119] hover:text-white"
                >
                  <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-[#b91119] hover:bg-[#b91119] hover:text-white"
                >
                  <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-[#b91119] hover:bg-[#b91119] hover:text-white"
                >
                  <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/40">Navegação</p>
              <nav className="mt-5 space-y-3">
                {[
                  ['Início', '#inicio'],
                  ['Treinos', '#treinos'],
                  ['Resultados', '#resultados'],
                  ['Aplicativo', '#aplicativo']
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-sm text-white/60 transition-all hover:translate-x-1 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Support */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/40">Suporte</p>
              <nav className="mt-5 space-y-3">
                {['Central de Ajuda', 'Fale Conosco', 'Termos de Uso', 'Privacidade'].map(label => (
                  <a
                    key={label}
                    href="#"
                    className="block text-sm text-white/60 transition-all hover:translate-x-1 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/40">Fique por Dentro</p>
              <p className="mt-5 text-sm leading-relaxed text-white/50">
                Receba novidades semanais de treino, nutrição esportiva e atualizações da plataforma.
              </p>

              {newsletterSent ? (
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-3 text-xs font-bold text-emerald-400">
                  <Check size={16} /> E-mail cadastrado com sucesso!
                </div>
              ) : (
                <form className="mt-5 flex rounded-xl border border-white/10 bg-white/5 p-1.5 focus-within:border-[#b91119] transition-colors" onSubmit={handleNewsletter}>
                  <label className="sr-only" htmlFor="footer-email">Seu e-mail</label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={e => setNewsletterEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    className="min-w-0 flex-1 bg-transparent px-3 text-xs text-white outline-none placeholder:text-white/30"
                  />
                  <button
                    type="submit"
                    aria-label="Cadastrar e-mail"
                    className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#b91119] transition-colors hover:bg-[#ce141d] text-white cursor-pointer"
                  >
                    <Mail size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-start justify-between gap-5 pt-8 sm:flex-row sm:items-center">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} DragonCorp Fitness. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <span className="hidden text-xs text-white/35 sm:block font-medium">
                Feito para quem não aceita desculpas.
              </span>
              <a
                href="#inicio"
                aria-label="Voltar ao topo"
                className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-[#b91119] hover:bg-[#b91119] hover:text-white"
              >
                <ArrowUp size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* VIDEO PREVIEW MODAL                                                       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] grid place-items-center bg-black/90 p-4"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-[#121212] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-lg bg-[#b91119] text-white">
                    <Play size={16} fill="currentColor" />
                  </span>
                  <h3 className="font-extrabold text-white text-base">DragonCorp App 2.0 • Demonstração</h3>
                </div>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl bg-black border border-white/10 flex items-center justify-center">
                <img
                  src={workoutImage}
                  alt="Prévia do Treino"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <div className="relative z-10 text-center p-6">
                  <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-[#b91119] text-white shadow-2xl">
                    <Play size={28} fill="currentColor" className="translate-x-0.5" />
                  </div>
                  <b className="display block text-xl font-bold text-white">Treine com Tecnologia de Ponta</b>
                  <p className="mt-1 text-xs text-white/70">Acesso instantâneo a todos os recursos com 7 dias grátis.</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button href="#cadastro" onClick={() => setVideoModalOpen(false)}>
                  Começar Meu Teste Grátis
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
