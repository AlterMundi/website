export function About() {
  const principles = [
    {
      label: "01",
      title: "Open by Default",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      label: "02",
      title: "Built for the Field",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      label: "03",
      title: "Durable & Maintainable",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
  ]

  return (
    <section id="about" className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 scroll-mt-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Introduction */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; ABOUT_US</span>
            <h2 className="font-mono text-3xl lg:text-4xl font-bold leading-tight">What AlterMundi Does</h2>
          </div>

          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              AlterMundi develops open-source technology for real-world environments — from embedded systems and
              networking to monitoring and safety.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>

        {/* Right: Principles Cards */}
        <div className="space-y-4">
          {principles.map((principle) => (
            <div
              key={principle.label}
              className="relative bg-card border-2 border-border p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(13,81,100,0.15)]"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />
              
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm text-primary crt-glow mt-0.5">[{principle.label}]</span>
                <div className="flex-1 space-y-2">
                  <h3 className="font-mono text-lg font-bold uppercase tracking-wider">{principle.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
