import Image from "next/image"

export function AlterMundiLogo({ className }: { className?: string }) {
  return (
    <div className="relative">
      <Image
        src="/isotipo-alter-negro.svg"
        alt="AlterMundi Logo"
        width={200}
        height={50}
        className={className}
        priority
      />
    </div>
  )
}
