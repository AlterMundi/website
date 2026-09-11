import type { Lang } from "@/lib/dictionaries"

type LocalizedText = Record<Lang, string>

export type TeamLink = {
  label: string
  href: string
  kind: "github" | "orcid" | "website" | "project"
}

export type TeamMember = {
  slug: string
  name: string
  role: LocalizedText
  summary: LocalizedText
  biography: Record<Lang, string[]>
  areas: Record<Lang, string[]>
  links: TeamLink[]
  portrait?: string
  portraitPosition?: string
  portraitZoom?: number
  portraitOrigin?: string
}

export const teamMembers: TeamMember[] = [
  {
    slug: "nicolas-echaniz",
    name: "Nicolás Echániz",
    role: { es: "Presidente y cofundador", en: "President and co-founder" },
    summary: {
      es: "Impulsa la dirección conceptual y técnica de AlterMundi, desde las redes comunitarias y la tecnología libre hasta la investigación armónica y los sistemas humano-IA.",
      en: "He drives AlterMundi’s conceptual and technical direction, from community networks and open technology to harmonic research and human–AI systems.",
    },
    biography: {
      es: [
        "Nicolás es cofundador de la Asociación Civil AlterMundi. Su trabajo abarca redes comunitarias, software libre y tecnologías soberanas. Participó en el desarrollo de LibreMesh, LibreRouter, Librenet6 y LibreMap, y representó el trabajo de las redes comunitarias en espacios internacionales.",
        "Es músico e investigador de la armonía natural. Junto con Mariano Fernández Méndez escribió Harmonic Information Theory: Foundations. Dirige el proyecto HIT y creó Harmonic Beacon, un dispositivo que lleva las hipótesis de la investigación al terreno de la vibración física.",
      ],
      en: [
        "Nicolás is a co-founder of Asociación Civil AlterMundi. His work spans community networks, free software and sovereign technologies. He contributed to LibreMesh, LibreRouter, Librenet6 and LibreMap, and represented community-network work in international forums.",
        "He is a musician and a researcher of natural harmony. With Mariano Fernández Méndez he wrote Harmonic Information Theory: Foundations. He leads the HIT project and created Harmonic Beacon, a device that brings the research hypotheses into physical vibration.",
      ],
    },
    areas: {
      es: ["Dirección institucional", "Redes comunitarias", "HIT", "Harmonic Beacon"],
      en: ["Institutional direction", "Community networks", "HIT", "Harmonic Beacon"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/nicoechaniz", kind: "github" },
      { label: "HIT", href: "https://hit.altermundi.net", kind: "project" },
      { label: "Sitio personal", href: "https://nicoechaniz.altermundi.net", kind: "website" },
    ],
    portrait: "https://avatars.githubusercontent.com/u/198112?v=4",
  },
  {
    slug: "jesica-giudice",
    name: "Jésica Giudice",
    role: { es: "Formación, incidencia y articulación", en: "Training, advocacy and partnerships" },
    summary: {
      es: "Acompaña redes comunitarias, forma referentes y construye articulaciones para que la conectividad sea una herramienta de autonomía y organización.",
      en: "She supports community networks, trains local leaders and builds partnerships so connectivity becomes a tool for autonomy and organization.",
    },
    biography: {
      es: [
        "Jésica integra AlterMundi desde 2011 y reúne más de quince años de experiencia en software libre, redes comunitarias y derechos digitales. Su trabajo combina formación, gestión de proyectos, despliegue en territorio e incidencia política y regulatoria.",
        "Coordinó y facilitó Semilleros de Redes Comunitarias en distintas provincias argentinas, acompañando a organizaciones desde el diseño social de la red hasta su construcción, sostenibilidad y acceso a políticas públicas. También participó en la Cumbre Latinoamericana de Redes Comunitarias y en espacios de APC, UIT, ANATEL y BattleMesh.",
      ],
      en: [
        "Jésica has been part of AlterMundi since 2011 and brings more than fifteen years of experience in free software, community networks and digital rights. Her work combines training, project management, field deployment, and policy and regulatory advocacy.",
        "She coordinated and facilitated Community Network Seedbeds across several Argentine provinces, supporting organizations from the social design of a network through its construction, sustainability and access to public policy. She has also taken part in the Latin American Community Networks Summit and forums organized by APC, ITU, ANATEL and BattleMesh.",
      ],
    },
    areas: {
      es: ["Formación comunitaria", "Gestión de proyectos", "Incidencia", "Perspectiva de género"],
      en: ["Community training", "Project management", "Advocacy", "Gender perspective"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/giudicejesica", kind: "github" },
      { label: "Semilleros", href: "https://ctu.ieee.org/challenge/2022-ctu-challenge-2/", kind: "project" },
    ],
    portrait: "https://raw.githubusercontent.com/AlterMundi/web-conectividad/master/public/images/personas/jesica.jpeg",
    portraitPosition: "50% 30%",
  },
  {
    slug: "fabricio-puzio",
    name: "Fabricio Puzio",
    role: { es: "Coordinación de proyectos de innovación", en: "Innovation project coordination" },
    summary: {
      es: "Gestor de proyectos con veinte años de trayectoria entre educación, tecnología libre y economía social.",
      en: "A project manager with twenty years of experience across education, open technology and the social economy.",
    },
    biography: {
      es: [
        "Fabricio es gestor de proyectos con una trayectoria que cruza educación, tecnología libre y economía social. Formula y coordina iniciativas complejas junto con organismos públicos, universidades, cooperativas y organizaciones de base.",
        "En AlterMundi coordina LibreIncu, una incubadora avícola de hardware y software abiertos pensada para la agricultura familiar, y acompaña desarrollos de monitoreo de invernaderos, plataformas productivas y conectividad rural.",
        "Sus competencias incluyen formulación y rendición ante financiadores, articulación entre Estado, universidades y organizaciones de base, tecnologías IoT, plataformas productivas y formación de formadores.",
      ],
      en: [
        "Fabricio is a project manager whose work spans education, open technology and the social economy. He designs and coordinates complex initiatives with public agencies, universities, cooperatives and grassroots organizations.",
        "At AlterMundi he coordinates LibreIncu, an open hardware and software poultry incubator for family farming, and supports greenhouse monitoring, productive platforms and rural connectivity projects.",
        "His skills include grant writing and reporting, coordination among government, universities and grassroots organizations, IoT technologies, productive platforms and train-the-trainer work.",
      ],
    },
    areas: {
      es: ["Gestión de proyectos", "LibreIncu", "Economía social", "Tecnología inclusiva"],
      en: ["Project management", "LibreIncu", "Social economy", "Inclusive technology"],
    },
    links: [{ label: "LibreIncu", href: "https://libreincu.altermundi.net", kind: "project" }],
    portrait: "https://raw.githubusercontent.com/AlterMundi/web-libreagro/main/public/assets/fabrizio.jpg",
  },
  {
    slug: "mariano-fernandez-mendez",
    name: "Mariano Fernández Méndez",
    role: { es: "Investigación, escritura y desarrollo", en: "Research, writing and development" },
    summary: {
      es: "Articula psicología, ciencias sociales, IA, electrónica y teoría de la información para convertir preguntas transdisciplinarias en métodos y prototipos verificables.",
      en: "He connects psychology, social science, AI, electronics and information theory to turn transdisciplinary questions into verifiable methods and prototypes.",
    },
    biography: {
      es: [
        "Mariano es investigador, escritor y desarrollador. Su trayectoria integra psicología, psicoanálisis y ciencias sociales con machine learning, inteligencia artificial, visión computacional, electrónica e infraestructura local.",
        "Es coautor de Harmonic Information Theory: Foundations y desarrolló la arquitectura conceptual y la compilación final de la obra. En Phideus trabaja sobre métodos para reconocer relaciones armónicas entre distintas clases de señales.",
        "En AlterMundi participa en SAI, PsicopoMPo, HarMoCAP y ProsodIA. Su perfil escrito describe su aporte como la conversión de una visión sobre sonido, cuerpo y experiencia simbólica en investigación, arquitecturas, prototipos y productos integrados.",
      ],
      en: [
        "Mariano is a researcher, writer and developer. His background brings psychology, psychoanalysis and social science together with machine learning, artificial intelligence, computer vision, electronics and local infrastructure.",
        "He co-authored Harmonic Information Theory: Foundations and shaped the work’s conceptual architecture and final compilation. In Phideus he develops methods for recognizing harmonic relationships across different classes of signal.",
        "At AlterMundi he contributes to SAI, PsicopoMPo, HarMoCAP and ProsodIA. His written profile describes his contribution as turning a vision of sound, body and symbolic experience into research, architectures, prototypes and integrated products.",
      ],
    },
    areas: {
      es: ["HIT", "Phideus", "IA y señales", "Arquitectura conceptual"],
      en: ["HIT", "Phideus", "AI and signals", "Conceptual architecture"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/Mar-IA-no", kind: "github" },
      { label: "ORCID", href: "https://orcid.org/0009-0007-7186-2125", kind: "orcid" },
      { label: "HIT", href: "https://hit.altermundi.net", kind: "project" },
    ],
    portrait: "https://avatars.githubusercontent.com/u/201840755?v=4",
  },
  {
    slug: "julian-de-la-reta",
    name: "Julián de la Reta",
    role: { es: "Psicología e investigación experiencial", en: "Psychology and experiential research" },
    summary: {
      es: "Investiga la dimensión psicológica, simbólica y grupal de Harmonic Beacon y PsicopoMPo desde la psicología junguiana y el psicodrama.",
      en: "He researches the psychological, symbolic and group dimensions of Harmonic Beacon and PsicopoMPo through Jungian psychology and psychodrama.",
    },
    biography: {
      es: [
        "Julián es licenciado en Psicología por la Universidad Nacional de Córdoba, con formación en psicología analítica junguiana, psicodrama y sociopsicodrama. Creó la Proyección del Mito Personal, una metodología de exploración simbólica desarrollada durante quince años.",
        "Integra AlterMundi desde 2014. Primero documentó proyectos como fotógrafo y realizador audiovisual; actualmente aporta a la dimensión psicológica y experiencial de Harmonic Beacon y PsicopoMPo.",
        "La Proyección del Mito Personal articula la imaginación activa de la psicología analítica, una estructura narrativa inspirada en el monomito y herramientas de psicodrama.",
      ],
      en: [
        "Julián holds a psychology degree from the National University of Córdoba and trained in Jungian analytical psychology, psychodrama and sociodrama. He created Personal Myth Projection, a symbolic exploration method developed over fifteen years.",
        "He has been part of AlterMundi since 2014. He first documented projects as a photographer and filmmaker; today he contributes to the psychological and experiential dimensions of Harmonic Beacon and PsicopoMPo.",
        "Personal Myth Projection brings together active imagination from analytical psychology, a narrative structure inspired by the monomyth and psychodrama tools.",
      ],
    },
    areas: {
      es: ["Psicología junguiana", "Psicodrama", "PsicopoMPo", "Documental"],
      en: ["Jungian psychology", "Psychodrama", "PsicopoMPo", "Documentary"],
    },
    links: [{ label: "Proyección del Mito", href: "https://proyecciondelmito.harmonicbeacon.com", kind: "website" }],
    portrait: "https://raw.githubusercontent.com/AlterMundi/proyeccionDelMito/main/julian.jpg",
  },
  {
    slug: "javier-jorge",
    name: "Javier Jorge",
    role: { es: "Software, infraestructura y automatización", en: "Software, infrastructure and automation" },
    summary: {
      es: "Desarrolla software para redes comunitarias, sistemas embebidos y automatización, desde LibreMesh hasta LibreAgro.",
      en: "He develops software for community networks, embedded systems and automation, from LibreMesh to LibreAgro.",
    },
    biography: {
      es: [
        "Javier trabaja en la intersección entre redes, software y sistemas embebidos. Su actividad pública incluye desarrollo y pruebas para LibreMesh y OpenWrt, herramientas de malla virtual y proyectos basados en ESP32.",
        "En LibreAgro figura a cargo de software, backend y automatización. Su GitHub público contiene repositorios de LibreMesh, pruebas para redes mesh, OpenWrt, ESP32 y robótica abierta.",
      ],
      en: [
        "Javier works where networking, software and embedded systems meet. His public work includes development and testing for LibreMesh and OpenWrt, virtual-mesh tooling and ESP32-based projects.",
        "In LibreAgro he is listed for software, backend systems and automation. His public GitHub contains repositories for LibreMesh, mesh-network testing, OpenWrt, ESP32 and open robotics.",
      ],
    },
    areas: {
      es: ["LibreMesh", "OpenWrt", "Sistemas embebidos", "LibreAgro"],
      en: ["LibreMesh", "OpenWrt", "Embedded systems", "LibreAgro"],
    },
    links: [{ label: "GitHub", href: "https://github.com/javierbrk", kind: "github" }],
    portrait: "https://raw.githubusercontent.com/AlterMundi/web-libreagro/main/public/assets/javier.png",
  },
  {
    slug: "jeremias-castro",
    name: "Jeremías Castro",
    role: { es: "Redes, IoT y automatización", en: "Networks, IoT and automation" },
    summary: {
      es: "Combina trabajo de campo en redes comunitarias con firmware IoT, administración Linux, automatización con IA y seguridad informática.",
      en: "He combines community-network fieldwork with IoT firmware, Linux administration, AI automation and cybersecurity.",
    },
    biography: {
      es: [
        "Jeremías es técnico en telecomunicaciones y tecnologías 4.0. Desde 2022 instala y mantiene redes inalámbricas comunitarias, fibra óptica y enlaces WiFi, y desarrolla herramientas para diagnóstico y monitoreo.",
        "En LibreIncu trabajó sobre firmware para ESP32, APIs embebidas, la aplicación de control y observabilidad con Grafana. También participó en el despliegue físico de SAI y en desarrollos de WANDA y mini-armonic.",
        "Su práctica actual suma automatización con Python y modelos locales de lenguaje, integración continua y formación en seguridad ofensiva.",
      ],
      en: [
        "Jeremías is a telecommunications and 4.0 technologies technician. Since 2022 he has installed and maintained community wireless networks, fiber and WiFi links, while building diagnostic and monitoring tools.",
        "In LibreIncu he worked on ESP32 firmware, embedded APIs, the control application and Grafana observability. He also joined SAI field deployments and contributed to WANDA and mini-armonic.",
        "His current practice adds Python automation and local language models, continuous integration and offensive-security training.",
      ],
    },
    areas: {
      es: ["Redes de campo", "Firmware IoT", "Automatización", "Ciberseguridad"],
      en: ["Field networks", "IoT firmware", "Automation", "Cybersecurity"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/JereC4str0", kind: "github" },
      { label: "Portfolio", href: "https://jerec4str0.github.io", kind: "website" },
    ],
    portrait: "https://avatars.githubusercontent.com/u/56790144?v=4",
  },
  {
    slug: "anabella-scigliano",
    name: "Anabella Scigliano",
    role: { es: "Ingeniería biomédica e investigación", en: "Biomedical engineering and research" },
    summary: {
      es: "Aporta una mirada fisiológica y biomédica al estudio de señales, movimiento humano y validación experimental de tecnologías armónicas.",
      en: "She brings a physiological and biomedical perspective to signal research, human motion and the experimental validation of harmonic technologies.",
    },
    biography: {
      es: [
        "Anabella es estudiante de ingeniería biomédica. En la investigación de AlterMundi trabaja sobre el vínculo entre estructuras armónicas, procesos neurológicos y validación experimental.",
        "Su GitHub público incluye HarMoCAP, descripto como un sistema de captura de movimiento humano en tiempo real para Harmonic Beacon, además de los repositorios EEG Actuator y Digital Beacon.",
      ],
      en: [
        "Anabella is a biomedical engineering student. In AlterMundi’s research she works on the relationship between harmonic structures, neurological processes and experimental validation.",
        "Her public GitHub includes HarMoCAP, described as a real-time human-motion capture system for Harmonic Beacon, as well as the EEG Actuator and Digital Beacon repositories.",
      ],
    },
    areas: {
      es: ["Ingeniería biomédica", "HarMoCAP", "Señales corporales", "Validación experimental"],
      en: ["Biomedical engineering", "HarMoCAP", "Bodily signals", "Experimental validation"],
    },
    links: [{ label: "GitHub", href: "https://github.com/AnnieScigliano", kind: "github" }],
    portrait: "/team/annie.webp",
    portraitPosition: "66% 42%",
    portraitZoom: 2.1,
    portraitOrigin: "50% 42%",
  },
  {
    slug: "saira-asua",
    name: "Saira Asua",
    role: { es: "Vibe coding, diseño web y articulación", en: "Vibe coding, web design and partnerships" },
    summary: {
      es: "Diseña productos digitales orquestando agentes de IA y conecta esa práctica con años de trabajo comunitario, feminista y de gestión pública local.",
      en: "She designs digital products by orchestrating AI agents and connects that practice with years of community, feminist and local public-sector work.",
    },
    biography: {
      es: [
        "Saira es diseñadora web y vibe coder: trabaja con inteligencia artificial como método principal para llevar una idea desde la conversación inicial hasta un producto que funciona. Orquesta agentes, modelos y herramientas para construir sitios, identidades digitales y sistemas con automatización.",
        "En AlterMundi participó en los Semilleros de Redes Comunitarias, acompañando durante meses la gestión, la administración, la formación técnica, los encuentros y las visitas a redes emergentes. Esa experiencia fue reconocida en 2022 por el desafío Connecting the Unconnected de IEEE.",
        "Su recorrido en Alta Gracia incluye trabajo territorial y feminista, la coordinación de Políticas de Género y Salud Comunitaria de la Municipalidad y participación en la organización del Encuentro Anual de Colectividades. Hoy vincula esa experiencia de escucha y articulación con el desarrollo colaborativo junto a IA.",
        "En su GitHub publica proyectos de SAI, Phideus, Harmonic Beacon, PsicopoMPo y DaemonCraft, además de su perfil como diseñadora de páginas web con inteligencia artificial.",
      ],
      en: [
        "Saira is a web designer and vibe coder: she uses artificial intelligence as her primary method for taking an idea from the first conversation to a working product. She orchestrates agents, models and tools to build websites, digital identities and automated systems.",
        "At AlterMundi she took part in the Community Network Seedbeds, supporting management, administration, technical training, gatherings and visits to emerging networks over several months. This work was recognized by the 2022 IEEE Connecting the Unconnected Challenge.",
        "Her work in Alta Gracia includes grassroots and feminist organizing, coordinating the municipality’s Gender Policy and Community Health area, and joining the organizing committee for the city’s Annual Communities Festival. She now brings that experience of listening and coordination into collaborative development with AI.",
        "On GitHub she publishes projects for SAI, Phideus, Harmonic Beacon, PsicopoMPo and DaemonCraft, as well as her profile as an AI-based web designer.",
      ],
    },
    areas: {
      es: ["Vibe coding", "Diseño web", "Orquestación de agentes", "Trabajo comunitario"],
      en: ["Vibe coding", "Web design", "Agent orchestration", "Community work"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SairaAsua", kind: "github" }],
    portrait: "https://avatars.githubusercontent.com/u/180121587?v=4",
  },
  {
    slug: "santiago-cetran",
    name: "Santiago Cetran",
    role: { es: "Desarrollo, interfaces y agentes", en: "Development, interfaces and agents" },
    summary: {
      es: "Su trabajo público incluye desarrollo web, animación, WANDA, LibreIncu, redes distribuidas y herramientas para agentes.",
      en: "His public work includes web development, animation, WANDA, LibreIncu, distributed networks and agent tooling.",
    },
    biography: {
      es: [
        "El GitHub público de Santiago reúne herramientas de animación 3D y bitmap, desarrollos para WANDA y LibreIncu, y repositorios vinculados con redes distribuidas, MCP y agentes de IA.",
      ],
      en: [
        "Santiago’s public GitHub brings together 3D and bitmap animation tools, work for WANDA and LibreIncu, and repositories related to distributed networks, MCP and AI agents.",
      ],
    },
    areas: {
      es: ["Desarrollo web", "Visualización", "Agentes de IA", "Redes distribuidas"],
      en: ["Web development", "Visualization", "AI agents", "Distributed networks"],
    },
    links: [{ label: "GitHub", href: "https://github.com/Santiagocetran", kind: "github" }],
    portrait: "https://avatars.githubusercontent.com/u/108505846?v=4",
  },
  {
    slug: "pablo-bustos",
    name: "Pablo Bustos",
    role: { es: "Hardware, electrónica y mecatrónica", en: "Hardware, electronics and mechatronics" },
    summary: {
      es: "Diseña nodos IoT completos y lidera infraestructura inalámbrica, desde el firmware y el hardware hasta los servicios de monitoreo en territorio.",
      en: "He designs complete IoT nodes and leads wireless infrastructure, from firmware and hardware to field monitoring services.",
    },
    biography: {
      es: [
        "Pablo es técnico en electrónica orientado a telecomunicaciones, con más de veinte años de trabajo entre hardware, mantenimiento industrial y redes. Diseña dispositivos y nodos IoT completos, incluyendo firmware, servicios backend e interfaces de monitoreo.",
        "En AlterMundi participa en automatizaciones para incubadoras, invernaderos y monitoreo de procesos, y en el despliegue de redes comunitarias junto a universidades y organizaciones sociales.",
        "También dirigió el desarrollo de una antena MIMO 2×2 de 5 GHz caracterizada por el INTI. Es administrador de sistemas Linux, entusiasta del software libre y radioaficionado.",
      ],
      en: [
        "Pablo is an electronics technician specializing in telecommunications, with more than twenty years of work across hardware, industrial maintenance and networks. He designs complete IoT devices and nodes, including firmware, backend services and monitoring interfaces.",
        "At AlterMundi he contributes to automation for incubators, greenhouses and process monitoring, and to community-network deployments with universities and social organizations.",
        "He also led the development of a 5 GHz 2×2 MIMO antenna characterized by Argentina’s INTI. He is a Linux systems administrator, free-software enthusiast and amateur-radio operator.",
      ],
    },
    areas: {
      es: ["Hardware abierto", "Nodos IoT", "Redes inalámbricas", "Linux"],
      en: ["Open hardware", "IoT nodes", "Wireless networks", "Linux"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/Pablomonte", kind: "github" },
      { label: "LibreIncu", href: "https://libreincu.altermundi.net", kind: "project" },
    ],
    portrait: "https://raw.githubusercontent.com/AlterMundi/web-libreagro/main/public/assets/pablo.png",
  },
  {
    slug: "federico-bonino",
    name: "Federico Bonino",
    role: { es: "IA aplicada, automatización e infraestructura", en: "Applied AI, automation and infrastructure" },
    summary: {
      es: "Diseña sistemas de IA verificables alrededor de necesidades operativas reales, con experiencia en Linux, redes y despliegues en el borde.",
      en: "He designs verifiable AI systems around real operational needs, grounded in Linux, networking and edge deployments.",
    },
    biography: {
      es: [
        "Federico trabaja en inteligencia artificial aplicada y automatización. Parte de la investigación técnica y del problema operativo para construir el piloto o la integración más pequeña que pueda validarse con un criterio explícito.",
        "Su experiencia incluye infraestructura Linux, redes, despliegues en el borde y el software necesario para mantener sistemas después de su entrega. En AlterMundi trabajó alrededor de SAI, 44Mesh y herramientas locales de voz como WhisperAloud.",
        "Su enfoque busca separar los componentes deterministas de los modelos de lenguaje y conservar evidencia suficiente para revisar qué hizo el sistema y por qué.",
      ],
      en: [
        "Federico works in applied artificial intelligence and automation. He begins with technical research and the operational problem, then builds the smallest pilot or integration that can be tested against an explicit criterion.",
        "His background includes Linux infrastructure, networking, edge deployments and the software needed to keep systems maintainable after handover. At AlterMundi he has worked around SAI, 44Mesh and local voice tools such as WhisperAloud.",
        "His approach separates deterministic components from language models and preserves enough evidence to review what a system did and why.",
      ],
    },
    areas: {
      es: ["IA aplicada", "Automatización", "SAI", "Infraestructura Linux"],
      en: ["Applied AI", "Automation", "SAI", "Linux infrastructure"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/Fede654", kind: "github" },
      { label: "Portfolio", href: "https://fede654.github.io", kind: "website" },
    ],
    portrait: "https://avatars.githubusercontent.com/u/116310534?v=4",
  },
]

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug)
}
