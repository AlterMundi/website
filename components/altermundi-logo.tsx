import Image from "next/image"

export function AlterMundiLogo({ className }: { className?: string }) {
  return (
    <div className="relative">
      <Image
        src="/Logo-alter-nuevo-blanco.png"
        alt="AlterMundi Logo"
        width={200}
        height={50}
        className={className}
        style={{ mixBlendMode: 'screen' }}
        priority
      />
    </div>
  )
}
