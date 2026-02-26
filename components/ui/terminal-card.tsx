import * as React from "react"
import { cn } from "@/lib/utils"
import { CornerBrackets } from "@/components/ui/corner-brackets"

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
          "relative bg-card border border-border overflow-hidden flex flex-col",
          variant === "bordered" && "terminal-border",
          variant === "glow" && "border-primary/50 shadow-[0_0_20px_rgba(13,81,100,0.2)]",
          className
        )}
        {...props}
      >
        <CornerBrackets />

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
        <div className="relative z-10 flex flex-1 min-h-0 flex-col">{children}</div>

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
