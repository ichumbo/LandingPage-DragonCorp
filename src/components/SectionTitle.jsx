export function SectionTitle({
  eyebrow,
  title,
  text,
  light = true,
  align = 'left',
  className = ''
}) {
  const isCenter = align === 'center'

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`mb-3.5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#b91119] ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#b91119]" />
          <span>{eyebrow}</span>
          <span className="h-px w-6 bg-[#b91119]" />
        </div>
      )}
      <h2 className={`display text-3xl font-black uppercase leading-[1.04] tracking-[-0.035em] sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-[#0a0a0a]'}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isCenter ? 'mx-auto max-w-xl' : 'max-w-xl'} ${light ? 'text-white/60' : 'text-black/60'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
