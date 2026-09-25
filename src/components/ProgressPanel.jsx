import workoutImage from '../../images/workout-bg.jpg'
import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { Flame, Heart, TrendingUp, Trophy } from 'lucide-react'

const weekDays = [
  { day: 'SEG', height: 85, done: true, label: 'Superiores', kcal: 480 },
  { day: 'TER', height: 95, done: true, label: 'HIIT Cardio', kcal: 520 },
  { day: 'QUA', height: 60, done: true, label: 'Mobilidade', kcal: 220 },
  { day: 'QUI', height: 90, done: true, label: 'Inferiores', kcal: 540 },
  { day: 'SEX', height: 88, done: true, label: 'Core & Força', kcal: 490 },
  { day: 'SÁB', height: 40, done: false, label: 'Descanso Ativo', kcal: 180 },
  { day: 'DOM', height: 15, done: false, label: 'Descanso', kcal: 0 },
]

export function ProgressPanel() {
  const root = useRef(null)
  const visible = useInView(root, { once: true, margin: '-80px' })
  const progress = useMotionValue(0)
  const [value, setValue] = useState(0)
  const [activeDay, setActiveDay] = useState(1) // Terça default

  useMotionValueEvent(progress, 'change', latest => setValue(Math.round(latest)))

  useEffect(() => {
    if (!visible) return
    const controls = animate(progress, 84, { duration: 1.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] })
    return controls.stop
  }, [visible, progress])

  return (
    <motion.div
      ref={root}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative min-h-[580px] overflow-hidden rounded-[32px] border border-white/10 bg-[#141414] shadow-2xl"
    >
      {/* Background with sports photography */}
      <img
        src={workoutImage}
        alt="Treino guiado DragonCorp"
        className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-45 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-[#0c0c0c]/85" />

      {/* Floating Top Telemetry Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute left-6 top-6 right-6 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-[#161616] p-3.5"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-red-600/20 text-[#b91119]">
            <Heart size={18} />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">Frequência Média</p>
            <b className="text-sm font-extrabold text-white">142 BPM</b>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 border border-white/5">
          <Flame size={14} className="text-[#b91119]" />
          <span className="text-xs font-bold text-white">2.430 kcal</span>
        </div>
      </motion.div>

      {/* Main Bottom HUD Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/10 bg-[#181818] p-5 text-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#b91119]" />
            <p className="text-xs font-extrabold uppercase tracking-widest text-white/70">Consistência Semanal</p>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-bold text-[#b91119]">
            <TrendingUp size={13} /> +18% vs semana ant.
          </span>
        </div>

        {/* Progress Gauge */}
        <div className="mt-4 flex items-baseline justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="display text-4xl font-black tabular-nums tracking-tight">{value}%</span>
              <span className="text-xs font-semibold text-white/50">meta concluída</span>
            </div>
            <p className="mt-0.5 text-xs text-white/60">5 de 6 treinos programados realizados</p>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
              <Trophy size={13} /> Nível Ouro
            </span>
          </div>
        </div>

        {/* Interactive Bar Chart for Weekdays */}
        <div className="mt-5 pt-3 border-t border-white/5">
          <div className="grid grid-cols-7 gap-2 items-end h-24 pb-1">
            {weekDays.map((item, i) => {
              const isSelected = activeDay === i
              return (
                <div
                  key={item.day}
                  onClick={() => setActiveDay(i)}
                  className="group/bar flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={visible ? { height: `${item.height}%` } : { height: 0 }}
                    transition={{ delay: 0.35 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative w-full rounded-md transition-all duration-200 ${
                      item.done
                        ? isSelected
                          ? 'bg-[#b91119]'
                          : 'bg-[#b91119]/60 hover:bg-[#b91119]'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-white" />
                    )}
                  </motion.div>
                  <span className={`text-[10px] font-bold transition-colors ${isSelected ? 'text-[#b91119]' : 'text-white/40'}`}>
                    {item.day}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Interactive Day Details Pill */}
          <div className="mt-2.5 flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2 text-xs">
            <span className="font-semibold text-white/80">
              {weekDays[activeDay].day}: {weekDays[activeDay].label}
            </span>
            <span className="font-bold text-[#b91119]">
              {weekDays[activeDay].kcal > 0 ? `${weekDays[activeDay].kcal} kcal queimadas` : 'Descanso merecido'}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
