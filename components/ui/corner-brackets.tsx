import { cn } from "@/lib/utils"

interface CornerBracketsProps {
  size?: "sm" | "md"
  className?: string
}

export function CornerBrackets({ size = "md", className }: CornerBracketsProps) {
  const sizeClass = size === "sm" ? "w-2 h-2" : "w-3 h-3"

  return (
    <>
      <div className={cn("absolute top-0 left-0 border-t-2 border-l-2 border-primary", sizeClass, className)} />
      <div className={cn("absolute top-0 right-0 border-t-2 border-r-2 border-primary", sizeClass, className)} />
      <div className={cn("absolute bottom-0 left-0 border-b-2 border-l-2 border-primary", sizeClass, className)} />
      <div className={cn("absolute bottom-0 right-0 border-b-2 border-r-2 border-primary", sizeClass, className)} />
    </>
  )
}
