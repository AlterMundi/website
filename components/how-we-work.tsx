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
            <span className="text-xs font-mono uppercase tracking-wider text-muted">How We Work</span>
            <h2 className="font-mono text-3xl lg:text-4xl font-bold leading-tight">Our Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                      <span className="font-mono text-xs font-bold">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && <div className="hidden lg:block flex-1 h-px bg-border" />}
                  </div>
                  <h3 className="font-mono text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="space-y-6 pt-8">
          <h3 className="font-mono text-xl font-bold">Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-card border border-border rounded p-4 hover:border-primary/50 transition-colors"
              >
                <h4 className="font-mono text-sm font-bold mb-2">{capability.title}</h4>
                <p className="text-xs text-foreground/70 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
