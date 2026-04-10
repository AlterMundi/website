import { CornerBrackets } from "@/components/ui/corner-brackets"

export function Team() {
  return (
    <section
      id="team"
      className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20 border-t border-border scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; THE_TEAM</span>
          <h2 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">The Team</h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl">
            The people behind AlterMundi.
          </p>
        </div>

        {/* Placeholder grid — replace with actual team members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative bg-card border-2 border-border border-dashed p-6 sm:p-8 flex items-center justify-center min-h-[120px] opacity-40"
            >
              <CornerBrackets size="sm" />
              <span className="text-xs font-mono uppercase tracking-wider text-foreground/50">[ member ]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
