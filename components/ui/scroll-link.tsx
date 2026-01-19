"use client"

import type React from "react"

import { cn } from "@/lib/utils"

type ScrollLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  targetId: string
}
 
const defaultType = "button"

export function ScrollLink({
  targetId,
  children,
  className,
  onClick,
  type = defaultType,
  ...props
}: ScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) {
      return
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button type={type} onClick={handleClick} className={cn(className)} {...props}>
      {children}
    </button>
  )
}
