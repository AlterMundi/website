import * as React from "react"
import { cn } from "@/lib/utils"

interface TerminalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: string
  footer?: string
  variant?: "default" | "bordered" | "glow"
}

const TerminalCard = React.forwardRef<HTMLDivElement, TerminalCardProps>(
  ({ className, header, footer, children, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-card border border-border overflow-hidden",
          variant === "bordered" && "terminal-border",
          variant === "glow" && "border-primary/50 shadow-[0_0_20px_rgba(13,81,100,0.2)]",
          className
        )}
        {...props}
      >
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

        {/* Header bar */}
        {header && (
          <div className="border-b border-border bg-surface/50 px-4 py-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-primary crt-glow">
                {header}
              </span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-border" />
                <div className="w-2 h-2 bg-border" />
                <div className="w-2 h-2 bg-primary/50" />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Footer bar */}
        {footer && (
          <div className="border-t border-border bg-surface/50 px-4 py-2">
            <span className="font-mono text-xs text-muted">{footer}</span>
          </div>
        )}
      </div>
    )
  }
)

TerminalCard.displayName = "TerminalCard"

export { TerminalCard }
