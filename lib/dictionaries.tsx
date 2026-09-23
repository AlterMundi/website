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
    team: "Meet the team",
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
      "Open technologies that help communities connect, produce, protect their land, study living signals, and work with AI.",
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
          "Open WiFi routers and software that let communities build and manage their own local networks. They make reliable connectivity possible in rural and underserved places with technology people can understand and adapt.",
        tags: ["Networking", "Hardware", "Firmware"],
      },
      libreagro: {
        description:
          "Tools that help family farmers monitor and control poultry incubators from a phone. Open hardware and software track temperature and humidity, automate care, and can be repaired or adapted locally.",
        tags: ["IoT", "Agriculture", "Hardware"],
      },
      sai: {
        description:
          "Cameras and computer vision watch rural landscapes for possible smoke or fire and send an early alert. This helps communities and response teams check sooner, when every minute matters.",
        tags: ["Computer Vision", "IoT", "Safety"],
      },
      phideus: {
        description:
          "A research toolkit that finds and compares patterns in sound, body signals, and other data that changes over time. It helps test whether AI can recognize the same underlying relationship across different kinds of signals.",
        tags: ["opensource", "research", "ai"],
      },
      beacon: {
        description:
          "An open platform that creates continuous, slowly changing fields of sound for listening, research, and well-being practices. It lets people explore how resonance and interference are perceived in bodies and spaces.",
        tags: ["acoustics", "wellness", "open hardware"],
      },
      daemonmatrix: {
        description:
          "A way for an AI agent to keep a stable identity and verifiable history while working through places such as a Minecraft character, a device, or a terminal. Each body keeps its own experience and can synchronize without erasing differences.",
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
    team: "> Team",
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
    team: "Ver equipo",
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
      "Tecnologías abiertas para que las comunidades puedan conectarse, producir, cuidar su territorio, estudiar señales vivas y trabajar con IA.",
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
          "Routers WiFi y software abiertos para que las comunidades construyan y administren sus propias redes locales. Hacen posible una conectividad confiable en zonas rurales y desatendidas con tecnología que se puede comprender y adaptar.",
        tags: ["Redes", "Hardware", "Firmware"],
      },
      libreagro: {
        description:
          "Herramientas para que familias productoras monitoreen y controlen incubadoras avícolas desde un teléfono. El hardware y el software abiertos miden temperatura y humedad, automatizan cuidados y pueden repararse o adaptarse localmente.",
        tags: ["IoT", "Agricultura", "Hardware"],
      },
      sai: {
        description:
          "Cámaras y visión por computadora observan territorios rurales en busca de posible humo o fuego y envían una alerta temprana. Así, las comunidades y los equipos de respuesta pueden verificar antes, cuando cada minuto importa.",
        tags: ["Visión por computadora", "IoT", "Seguridad"],
      },
      phideus: {
        description:
          "Una herramienta de investigación que encuentra y compara patrones en sonidos, señales del cuerpo y otros datos que cambian en el tiempo. Permite probar si una IA puede reconocer la misma relación de fondo en distintos tipos de señales.",
        tags: ["código abierto", "investigación", "ia"],
      },
      beacon: {
        description:
          "Una plataforma abierta que crea campos sonoros continuos y de cambio lento para la escucha, la investigación y prácticas de bienestar. Permite explorar cómo se perciben la resonancia y la interferencia en el cuerpo y el espacio.",
        tags: ["acústica", "bienestar", "hardware abierto"],
      },
      daemonmatrix: {
        description:
          "Una forma de que un agente de IA conserve una identidad estable y una historia verificable mientras actúa desde lugares como un personaje de Minecraft, un dispositivo o una terminal. Cada cuerpo mantiene su experiencia y puede sincronizarse sin borrar diferencias.",
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
    team: "> Equipo",
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
