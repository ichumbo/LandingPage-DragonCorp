import imagemCelular from '../../images/imagem_Celular.jpeg'
import imagemCelular2 from '../../images/imagem_celular2.jpeg'
import { motion } from 'framer-motion'
import { Activity, Flame, Trophy } from 'lucide-react'

export function HeroPhonesMockup() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[540px] sm:min-h-[620px] lg:min-h-[740px] select-none [perspective:1400px]">
      <div className="relative w-full max-w-[580px] min-h-[540px] sm:min-h-[620px] lg:min-h-[740px] flex items-center justify-center scale-[0.82] xs:scale-[0.88] sm:scale-95 lg:scale-100 origin-center transition-transform">
        {/* Background Decorative Athletic Grid Lines */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-25">
          <svg
            className="w-[125%] h-[125%] stroke-white/20"
            fill="none"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            viewBox="0 0 600 600"
          >
            <path d="M50,150 L550,150" />
            <path d="M100,280 L500,280" />
            <path d="M50,420 L550,420" />
            <circle cx="300" cy="300" r="180" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="300" cy="300" r="260" strokeWidth="0.8" />
          </svg>
        </div>

        {/* ===================================================================== */}
        {/* PHONE 2 (BACKGROUND PHONE - RIGHT & BEHIND)                           */}
        {/* Displays imagem_celular2.jpeg (DragonCorp Header & Perfil do Personal) */}
        {/* ===================================================================== */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotateZ: [-7, -5.5, -7]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-24deg) rotateX(14deg) rotateZ(-7deg) translateZ(-40px)'
          }}
          className="hero-phone-bg absolute right-[2%] sm:right-[5%] lg:right-[3%] top-[4%] sm:top-[6%] z-10 w-[235px] sm:w-[265px] lg:w-[285px] rounded-[42px] sm:rounded-[48px] border-[6px] sm:border-[8px] border-[#222222] bg-[#0c0c0c] p-1.5 sm:p-2 shadow-2xl filter brightness-[0.9]"
        >
          {/* Real App Screenshot 2 */}
          <div className="relative overflow-hidden rounded-[34px] sm:rounded-[40px] bg-[#0d0d0d]">
            <img
              src={imagemCelular2}
              alt="Tela do perfil e alunos DragonCorp"
              className="w-full h-auto object-cover select-none block"
            />
          </div>
        </motion.div>

        {/* ===================================================================== */}
        {/* PHONE 1 (FOREGROUND PHONE - LEFT & CENTER)                            */}
        {/* Displays imagem_Celular.jpeg (Resumo do dia & Métricas do Personal)  */}
        {/* ===================================================================== */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            rotateZ: [-4, -2.5, -4]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-18deg) rotateX(10deg) rotateZ(-4deg)'
          }}
          className="hero-phone-fg relative z-20 w-[250px] sm:w-[280px] lg:w-[305px] rounded-[44px] sm:rounded-[50px] border-[7px] sm:border-[9px] border-[#1c1c1c] bg-[#0c0c0c] p-1.5 sm:p-2 shadow-2xl"
        >
          {/* Real App Screenshot 1 */}
          <div className="relative overflow-hidden rounded-[35px] sm:rounded-[41px] bg-[#0d0d0d]">
            <img
              src={imagemCelular}
              alt="Tela principal do aplicativo DragonCorp"
              className="w-full h-auto object-cover select-none block"
            />
          </div>
        </motion.div>

        {/* ===================================================================== */}
        {/* FLOATING HUD BADGES AROUND THE DUAL PHONES                             */}
        {/* ===================================================================== */}

        {/* Top Left Floating Badge: Streak (12 Dias Seguidos) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="hero-hud absolute -left-2 sm:left-1 top-[12%] z-30 rounded-2xl border border-white/15 bg-[#161616] p-3 sm:p-4 shadow-2xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-red-600/20 text-[#b91119]">
              <Flame size={18} />
            </span>
            <div>
              <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-white/50">Sequência Ativa</p>
              <b className="display text-lg sm:text-xl font-black text-white">12 DIAS</b>
            </div>
          </div>
          <div className="mt-2 flex gap-1">
            {[...Array(7)].map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-3.5 rounded-full ${i < 6 ? 'bg-[#b91119]' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Left Floating Badge: Weekly Goal (4 de 5 treinos) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="hero-hud absolute left-0 sm:left-4 bottom-[4%] z-30 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#161616] p-3 sm:p-4 text-white shadow-2xl"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-[#b91119] text-white">
            <Trophy size={18} />
          </span>
          <div>
            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white/50">Meta Semanal</p>
            <b className="text-xs sm:text-sm font-black text-white">4 de 5 treinos</b>
            <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-[80%] rounded-full bg-[#b91119]" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Right Floating Badge: Heart Rate BPM */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="hero-hud absolute right-0 sm:right-2 bottom-[10%] z-30 hidden sm:flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#161616] px-3.5 py-2.5 shadow-2xl"
        >
          <span className="grid size-8 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <Activity size={16} />
          </span>
          <div>
            <div className="flex items-baseline gap-1">
              <b className="text-sm font-extrabold text-white">142</b>
              <span className="text-[9px] font-bold text-emerald-400">BPM</span>
            </div>
            <p className="text-[9px] text-white/50">Zona Aeróbica</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
