export function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Research & Listen",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    },
    {
      number: "02",
      title: "Co-design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    },
    {
      number: "03",
      title: "Build & Test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    },
    {
      number: "04",
      title: "Deploy & Maintain",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    },
  ]

  const capabilities = [
    {
      title: "Hardware & Firmware",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Software Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Systems Integration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Technical Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 border-t border-border scroll-mt-16">
      <div className="space-y-12">
        {/* Process Timeline */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; WORKFLOW</span>
            <h2 className="font-mono text-3xl lg:text-4xl font-bold leading-tight">Our Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-primary flex items-center justify-center bg-primary/10">
                      <span className="font-mono text-sm font-bold text-primary crt-glow">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-primary/50 to-border" />
                    )}
                  </div>
                  <h3 className="font-mono text-lg font-bold uppercase tracking-wider">{step.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="space-y-6 pt-8">
          <h3 className="font-mono text-xl font-bold uppercase tracking-wider">
            <span className="text-primary">//</span> Capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="relative bg-card border-2 border-border p-4 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(13,81,100,0.15)]"
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
                
                <h4 className="font-mono text-sm font-bold uppercase tracking-wider mb-2">{capability.title}</h4>
                <p className="text-xs text-foreground/70 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
