import { ArrowUpRight } from 'lucide-react'

export function Button({
  children,
  variant = 'primary',
  className = '',
  href = '#treinos',
  onClick,
  showIcon = true,
  icon: CustomIcon
}) {
  const baseClasses = "relative inline-flex items-center justify-center gap-2.5 rounded-xl font-bold tracking-tight transition-all duration-200 active:scale-[0.98] select-none cursor-pointer overflow-hidden group"

  const variantClasses = {
    primary: "bg-[#b91119] hover:bg-[#ce141d] text-white shadow-md hover:-translate-y-0.5",
    secondary: "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5",
    dark: "border border-white/10 bg-[#161616] text-white hover:bg-[#222222] hover:-translate-y-0.5",
    white: "bg-white text-[#0a0a0a] hover:bg-neutral-100 hover:-translate-y-0.5 shadow-md font-extrabold",
    outline: "border-2 border-[#b91119] text-white hover:bg-[#b91119] hover:-translate-y-0.5"
  }

  const selectedVariant = variantClasses[variant] || variantClasses.primary
  const sizeClasses = className.includes('h-') ? '' : 'h-12 px-6 text-sm'

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {showIcon && (
        <span className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {CustomIcon ? <CustomIcon size={16} /> : <ArrowUpRight size={17} />}
        </span>
      )}
    </>
  )

  if (onClick && !href) {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${selectedVariant} ${sizeClasses} ${className}`}
      >
        {content}
      </button>
    )
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${selectedVariant} ${sizeClasses} ${className}`}
    >
      {content}
    </a>
  )
}
