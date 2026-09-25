import { ArrowUpRight, Clock3, Flame, Layers } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function WorkoutCard({ workout, index }) {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 22 })

  const handleMove = event => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const levelBadge = {
    'Iniciante': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    'Intermediário': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    'Avançado': 'bg-red-500/20 text-red-400 border-red-500/40'
  }[workout.level] || 'bg-white/10 text-white border-white/20'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative min-h-[440px] flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-[#141414] p-6 shadow-xl transition-all duration-300 hover:border-[#b91119]/50"
    >
      {/* Background image with solid dark tint */}
      <img
        src={workout.image}
        alt={workout.title}
        className="absolute inset-0 h-full w-full object-cover opacity-35 grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-55 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-[#0c0c0c]/85" />

      {/* Top red accent line */}
      <span className="absolute left-0 top-0 h-1 w-0 bg-[#b91119] transition-all duration-300 group-hover:w-full" />

      {/* Header tags */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80">
            {workout.category}
          </span>
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide ${levelBadge}`}>
            {workout.level}
          </span>
        </div>

        {workout.tag && (
          <span className="flex items-center gap-1 rounded-full border border-red-500/30 bg-red-600/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300">
            <Flame size={12} className="text-[#b91119]" />
            {workout.tag}
          </span>
        )}
      </div>

      {/* Watermark index number */}
      <span className="display pointer-events-none absolute right-6 top-14 text-6xl font-black text-white/[0.04] transition-all duration-300 group-hover:text-white/[0.08]">
        0{index + 1}
      </span>

      {/* Footer Content */}
      <div className="relative z-10 pt-20">
        <h3 className="display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1">
          {workout.title}
        </h3>

        {/* Workout Meta Chips */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/70">
          <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 border border-white/5">
            <Clock3 size={14} className="text-[#b91119]" />
            {workout.time}
          </span>
          {workout.calories && (
            <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 border border-white/5">
              <Flame size={14} className="text-[#b91119]" />
              {workout.calories}
            </span>
          )}
          {workout.exercises && (
            <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 border border-white/5">
              <Layers size={14} className="text-[#b91119]" />
              {workout.exercises}
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-white/40 transition-colors group-hover:text-white">
            Acessar Treino
          </span>
          <motion.div
            whileTap={{ scale: 0.94 }}
            className="flex size-11 items-center justify-center rounded-xl bg-[#b91119] text-white shadow-md transition-all duration-300 hover:bg-[#ce141d]"
          >
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}
