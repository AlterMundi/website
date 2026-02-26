"use client"

import type React from "react"

import { cn } from "@/lib/utils"

type ScrollLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  targetId: string
  /** Vertical alignment when scrolling into view: 'start' (default), 'center', or 'end' */
  scrollBlock?: ScrollLogicalPosition
}
 
const defaultType = "button"

export function ScrollLink({
  targetId,
  scrollBlock = "start",
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
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: scrollBlock })
  }

  return (
    <button type={type} onClick={handleClick} className={cn(className)} {...props}>
      {children}
    </button>
  )
}
