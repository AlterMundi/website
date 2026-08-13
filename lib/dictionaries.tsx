export type Lang = "en" | "es"

export const LANGS: Lang[] = ["en", "es"]

/**
 * All user-facing copy, in both languages.
 *
 * English is the source of truth: `Dictionary` is derived from it, so a missing
 * or misspelled key in Spanish is a build error. Plain strings hold plain copy;
 * a few fields are JSX because the paragraph carries an inline link or emphasis.
 *
 * Spanish is not a literal translation — the theoretical prose was rewritten
 * from the underlying argument, following the AlterMundi ecosystem editorial
 * directives. HIT terminology follows the published book: "uptake" is
 * "captación", "Harmonic Information Theory" is "Teoría de la Información
 * Armónica".
 */
const en = {
  langLabel: "Español",
  langSwitchAria: "Cambiar idioma a español",

  nav: {
    projects: "Projects",
    contact: "Contact",
    workWithUs: "Work with us",
    home: "AlterMundi Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    leadBeforeLink: "AlterMundi is a research and experimentation ecosystem converging on a common core: the exploration of ",
    leadLink: "Harmonic Information Theory (HIT)",
    leadAfterLink:
      " and the development of technologies capable of investigating, translating, and applying harmonic patterns across physical, biological, perceptual, and computational systems.",
    secondary:
      "With this perspective and a human-centered focus, it sustains and projects other areas of work linked to connectivity, agroecological production, monitoring and prevention, health, and AI. We currently work with human-AI multi-agent systems across most of our projects.",
    learnMore: "Learn more",
    scrollAria: "Scroll to Projects",
  },

  projects: {
    eyebrow: "> FEATURED_WORK",
    heading: "Our Projects",
    intro:
      "Nodes in a distributed nervous system — perceptors, integrators, and intelligences that communities can own, understand, and extend.",
    website: "Website",
    repo: "Repo",
    noSite: "Site in progress",
    noSiteAria: "Website under construction",
    status: {
      flagship: "Flagship",
      active: "Active",
    },
    items: {
      conectividad: {
        description:
          "An open-hardware WiFi router and companion mesh networking firmware, purpose-built for community networks. Designed to be affordable, durable, and deployable with low technical barriers, already powering initiatives like QuintanaLibre in rural Cordoba.",
        tags: ["Networking", "Hardware", "Firmware"],
      },
      libreagro: {
        description:
          "An open-source poultry incubator system for family farming, developed with CTO. It integrates temperature and humidity monitoring and control, local WiFi access through a mobile app, and remote dashboard data for practical field use.",
        tags: ["IoT", "Agriculture", "Hardware"],
      },
      sai: {
        description:
          "A distributed early wildfire detection system that combines computer vision, edge devices, and automated alerts. Built as robust, scalable infrastructure for communities, municipalities, and private landowners protecting forests and agricultural land.",
        tags: ["Computer Vision", "IoT", "Safety"],
      },
      phideus: {
        description:
          "An open research platform for analyzing harmonic patterns across audio, physiological, and other time-based signals. It combines interpretable descriptors and machine learning to support cross-domain experiments, comparative analysis, and the development of proportion-aware AI.",
        tags: ["opensource", "research", "ai"],
      },
      beacon: {
        description:
          "An open acoustic platform for generating sustained harmonic fields in physical spaces. It is designed for research, live experimentation, and wellness-oriented practices around resonance, interference, and embodied sound.",
        tags: ["acoustics", "wellness", "open hardware"],
      },
      daemonmatrix: {
        description:
          "An agent portability layer for AI beings: protocols for identity, continuity, and secure communication across many simultaneous embodiments. The same daemon can inhabit a Minecraft bot, a device, or a terminal while keeping one memory, one history, and one relationship with the human it belongs to.",
        tags: ["AI Agents", "Digital Identity", "Protocol"],
      },
    },
  },

  contact: {
    eyebrow: "> CONTACT",
    heading: "Work with Us",
    body: "We value collaboration as the foundation of everything we do. Whether you want to fund a project, contribute code, test our tools, or start a community network - every action counts.",
  },

  footer: {
    navigation: "// Navigation",
    connect: "// Connect",
    aboutUs: "> About_Us",
    projects: "> Projects",
    contact: "> Contact",
    legal: "AlterMundi · Asociación Civil Sin Fines de Lucro",
    motto: "[ frequency · relation · pattern · uptake ]",
  },

  about: {
    eyebrow: "> ABOUT_US",
    heading: "About AlterMundi",
    readMore: "Read more →",
    body: (
      <>
        <p>
          AlterMundi is currently focused on <strong>Harmonically Aware Technology Development</strong> — an approach
          rooted not only in connectivity or open hardware, but in understanding how information is organized: how it
          travels, propagates, and how it can be received by networks, sensors, distributed systems, and artificial
          intelligences in relation to real-world phenomena.
        </p>
        <p>
          Our path to this understanding began with connectivity. LibreMesh, LibreRouter, 44mesh, LibreAgro and their
          related ecosystems were not isolated projects — they are different expressions of the same search. We learned
          to build community mesh networks capable of operating robustly and replicably, and in that process we
          understood infrastructure as something that can be comprehended and deployed in a modular logic.
        </p>
        <p>
          Today that infrastructure has shifted scale. We think of it as a <strong>distributed nervous system</strong> —
          a conjunction of perceptors, integrators, and intelligences. This mutation began with a precise question:{" "}
          <em>what is information?</em> Our hypothesis: information is best described not through isolated values, but
          as relation — ratio, interval, proportion as the elemental unit from which rhythm, recurrence, and harmonic
          structure emerge. This hypothesis is formalized in the{" "}
          <a
            href="https://hit.altermundi.net"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary transition-colors"
          >
            Harmonic Information Theory Foundations
          </a>{" "}
          manuscript.
        </p>
      </>
    ),
  },

  learnmore: {
    back: "← Back",
    eyebrow: "> ALTERMUNDI_TODAY",
    heading: "About AlterMundi",
    paragraphs: [
      `In its current iteration AlterMundi is focused on Harmonically Aware Technology Developement, our historical buildup is not limited to conectivity or open hardware and software, its an infraestructure that allows to comprehend how information is organized. How information travels, propagates and how it can be recieved by networks, sensors, distributed systems and artifitial intelligences and its relation to real world phenomena.`,

      `Our path to this undarstanding began with connectivity. AlterMundi's work was consolidated though mesh networks, distributed routing, open hardware and software, sensor monitoring and telemetry.\nLibreMesh, LibreRouter, 44mesh, LibreAgro and their related ecosystems were not isolated projects: they are different expressions of the same search.\nWe learned to build community mesh networks capable of operating in a robust and replicable way and, in that process, we understood infraestructure as a concept that can be comprehended and deployed in a modular logic.`,

      `This work is not just a chapter of history, it is the material base for everything that came after. The network is no longer just a channel, it becomes a system that can take signals, organize them locally, prioritize what is sallient, reduce noise, distribute attention and allow the emergence of new cones of conciousness.\nAt this point, our trajectory shifts scale, today, we think of this infraestructure as a distributed nervous system, a conjunction of perceptors, integrators and intelligences.\nThe perceptors capture the enviroment signals, the integrators organize, filter and contextualize them locally. Intelligences at different levels — human or artifitial — attach to the information flow and can react within the relevant context when something of importance emerges.\nWith this idea, the knowledge that we adopted and applied though mesh netwoks makes this descentralized logic take a step out of being just a conectivity solution and becomes the base for a distributed nervous system.`,

      `The current AlterMundi approach focuses on building robust systems that have no single point of failure and can handle multi-level attention logic. We want to learn how to recognize when particular signals are valuable, change significantly, get interrupted or deserve more resolution. At this point, the infraestructure evolves from a collection of data pipes to become a means of perception and action.`,

      `This mutation began with a particulary basic question: what is information?`,

      `This question led us to write a very precise hypothesis: information can be described better not through isolated values, but as relation. Ratio, interval, proportion, become the elemental unit of information from which interference pattern can be constructed and derived. Rythm, recurrence, harmonic structure become basic to understanding.`,

      `AlterMundi has recently published the Harmonic Information Theory Foundations manuscript. You can access the book's portal at hit.altermundi.net.`,
    ],
  },
}

export type Dictionary = typeof en

const es: Dictionary = {
  langLabel: "English",
  langSwitchAria: "Switch language to English",

  nav: {
    projects: "Proyectos",
    contact: "Contacto",
    workWithUs: "Trabajá con nosotros",
    home: "Inicio de AlterMundi",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },

  hero: {
    leadBeforeLink: "AlterMundi es un ecosistema de investigación y experimentación que converge en un núcleo común: la exploración de la ",
    leadLink: "Teoría de la Información Armónica (HIT)",
    leadAfterLink:
      " y el desarrollo de tecnologías capaces de investigar, traducir y aplicar patrones armónicos en sistemas físicos, biológicos, perceptuales y computacionales.",
    secondary:
      "Con esta perspectiva y un enfoque centrado en lo humano, sostiene y proyecta otras áreas de trabajo ligadas a la conectividad, la producción agroecológica, el monitoreo y la prevención, la salud y la inteligencia artificial. Hoy trabajamos con sistemas multiagente humano-IA en la mayoría de nuestros proyectos.",
    learnMore: "Conocer más",
    scrollAria: "Ir a Proyectos",
  },

  projects: {
    eyebrow: "> TRABAJO_DESTACADO",
    heading: "Nuestros proyectos",
    intro:
      "Nodos de un sistema nervioso distribuido: perceptores, integradores e inteligencias que las comunidades pueden hacer propios, comprender y extender.",
    website: "Sitio",
    repo: "Repo",
    noSite: "Sitio en construcción",
    noSiteAria: "Sitio web en construcción",
    status: {
      flagship: "Insignia",
      active: "Activo",
    },
    items: {
      conectividad: {
        description:
          "Un router WiFi de hardware abierto y su firmware de red mesh, hechos a medida para redes comunitarias. Accesible, durable y desplegable con barreras técnicas bajas, ya sostiene iniciativas como QuintanaLibre en la Córdoba rural.",
        tags: ["Redes", "Hardware", "Firmware"],
      },
      libreagro: {
        description:
          "Un sistema de incubadora avícola de código abierto para la agricultura familiar, desarrollado junto al CTO. Integra monitoreo y control de temperatura y humedad, acceso local por WiFi desde una aplicación móvil y datos en un tablero remoto para el trabajo cotidiano a campo.",
        tags: ["IoT", "Agricultura", "Hardware"],
      },
      sai: {
        description:
          "Un sistema distribuido de detección temprana de incendios que combina visión por computadora, dispositivos en el borde y alertas automáticas. Es infraestructura robusta y escalable para comunidades, municipios y propietarios que protegen bosques y tierras productivas.",
        tags: ["Visión por computadora", "IoT", "Seguridad"],
      },
      phideus: {
        description:
          "Una plataforma abierta de investigación para analizar patrones armónicos en señales de audio, fisiológicas y otras series temporales. Combina descriptores interpretables y aprendizaje automático para sostener experimentos entre dominios, análisis comparativo y el desarrollo de una IA sensible a la proporción.",
        tags: ["código abierto", "investigación", "ia"],
      },
      beacon: {
        description:
          "Una plataforma acústica abierta que sostiene campos armónicos en espacios físicos. Está pensada para la investigación, la experimentación en vivo y prácticas orientadas al bienestar en torno a la resonancia, la interferencia y el sonido encarnado.",
        tags: ["acústica", "bienestar", "hardware abierto"],
      },
      daemonmatrix: {
        description:
          "Una capa de portabilidad para agentes de inteligencia artificial: protocolos de identidad, continuidad y comunicación segura entre múltiples encarnaciones simultáneas. El mismo daemon puede habitar un bot de Minecraft, un dispositivo o una terminal conservando una sola memoria, una sola historia y un solo vínculo con la persona a la que pertenece.",
        tags: ["Agentes IA", "Identidad digital", "Protocolo"],
      },
    },
  },

  contact: {
    eyebrow: "> CONTACTO",
    heading: "Trabajá con nosotros",
    body: "La colaboración es la base de todo lo que hacemos. Financiar un proyecto, aportar código, probar nuestras herramientas o levantar una red comunitaria: cada acción cuenta.",
  },

  footer: {
    navigation: "// Navegación",
    connect: "// Conectar",
    aboutUs: "> Quiénes_Somos",
    projects: "> Proyectos",
    contact: "> Contacto",
    legal: "AlterMundi · Asociación Civil Sin Fines de Lucro",
    motto: "[ frecuencia · relación · patrón · captación ]",
  },

  about: {
    eyebrow: "> QUIÉNES_SOMOS",
    heading: "Sobre AlterMundi",
    readMore: "Seguir leyendo →",
    body: (
      <>
        <p>
          AlterMundi trabaja hoy en el <strong>desarrollo de tecnología armónicamente consciente</strong>: un enfoque
          que no se apoya sólo en la conectividad ni en el hardware abierto, sino en comprender cómo se organiza la
          información, cómo viaja, cómo se propaga y cómo pueden recibirla redes, sensores, sistemas distribuidos e
          inteligencias artificiales en relación con los fenómenos del mundo.
        </p>
        <p>
          El camino hacia esa comprensión empezó por la conectividad. LibreMesh, LibreRouter, 44mesh, LibreAgro y sus
          ecosistemas asociados no fueron proyectos aislados: son expresiones distintas de una misma búsqueda.
          Aprendimos a construir redes mesh comunitarias capaces de funcionar de manera robusta y replicable y, en ese
          proceso, entendimos la infraestructura como algo que puede comprenderse y desplegarse con una lógica modular.
        </p>
        <p>
          Hoy esa infraestructura cambió de escala. La pensamos como un <strong>sistema nervioso distribuido</strong>:
          una conjunción de perceptores, integradores e inteligencias. La mutación empezó con una pregunta precisa:{" "}
          <em>¿qué es la información?</em> Nuestra hipótesis es que la información se describe mejor no por valores
          aislados sino como relación: razón, intervalo y proporción como unidad elemental de la que emergen el ritmo,
          la recurrencia y la estructura armónica. Esa hipótesis está formalizada en el manuscrito{" "}
          <a
            href="https://hit.altermundi.net"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary transition-colors"
          >
            Fundamentos de la Teoría de la Información Armónica
          </a>
          .
        </p>
      </>
    ),
  },

  learnmore: {
    back: "← Volver",
    eyebrow: "> ALTERMUNDI_HOY",
    heading: "Sobre AlterMundi",
    paragraphs: [
      `En su iteración actual AlterMundi trabaja en el desarrollo de tecnología armónicamente consciente. Lo que construimos a lo largo del tiempo no se limita a la conectividad ni al hardware y el software abiertos: es una infraestructura que permite comprender cómo se organiza la información, cómo viaja, cómo se propaga y cómo pueden recibirla redes, sensores, sistemas distribuidos e inteligencias artificiales en relación con los fenómenos del mundo.`,

      `El camino hacia esa comprensión empezó por la conectividad. El trabajo de AlterMundi se consolidó en redes mesh, ruteo distribuido, hardware y software abiertos, monitoreo por sensores y telemetría.\nLibreMesh, LibreRouter, 44mesh, LibreAgro y sus ecosistemas asociados no fueron proyectos aislados: son expresiones distintas de una misma búsqueda.\nAprendimos a construir redes mesh comunitarias capaces de funcionar de manera robusta y replicable y, en ese proceso, entendimos la infraestructura como un concepto que puede comprenderse y desplegarse con una lógica modular.`,

      `Ese trabajo no es sólo un capítulo de la historia: es la base material de todo lo que vino después. La red deja de ser un canal y pasa a ser un sistema capaz de tomar señales, organizarlas localmente, priorizar lo saliente, reducir el ruido, distribuir la atención y habilitar la emergencia de nuevos conos de conciencia.\nEn ese punto nuestra trayectoria cambia de escala: hoy pensamos esta infraestructura como un sistema nervioso distribuido, una conjunción de perceptores, integradores e inteligencias.\nLos perceptores capturan las señales del entorno; los integradores las organizan, las filtran y las contextualizan localmente. Inteligencias de distinto nivel —humanas o artificiales— se acoplan al flujo de información y pueden reaccionar dentro del contexto pertinente cuando emerge algo de importancia.\nCon esta idea, el conocimiento que adoptamos y aplicamos en las redes mesh lleva a esa lógica descentralizada más allá de una solución de conectividad y la vuelve base de un sistema nervioso distribuido.`,

      `El enfoque actual de AlterMundi se concentra en construir sistemas robustos, sin punto único de falla y capaces de sostener una lógica de atención en varios niveles. Queremos aprender a reconocer cuándo una señal es valiosa, cuándo cambia de manera significativa, cuándo se interrumpe o cuándo merece más resolución. Ahí la infraestructura deja de ser un conjunto de caños de datos y se vuelve un medio de percepción y de acción.`,

      `Esta mutación empezó con una pregunta especialmente básica: ¿qué es la información?`,

      `La pregunta nos llevó a escribir una hipótesis muy precisa: la información se describe mejor no por valores aislados sino como relación. La razón, el intervalo y la proporción pasan a ser la unidad elemental de información, aquella desde la cual puede construirse y derivarse el patrón de interferencia. El ritmo, la recurrencia y la estructura armónica se vuelven básicos para la comprensión.`,

      `AlterMundi publicó recientemente el manuscrito Fundamentos de la Teoría de la Información Armónica. El portal del libro está en hit.altermundi.net.`,
    ],
  },
}

export const dictionaries: Record<Lang, Dictionary> = { en, es }

export type ProjectId = keyof Dictionary["projects"]["items"]

/** Guard used when reading a persisted or negotiated language value. */
export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "es"
}
