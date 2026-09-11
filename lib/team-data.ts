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
      es: "Preside AlterMundi y desarrolla tecnología y software desde hace décadas: redes comunitarias, Teoría de la Información Armónica y sistemas de IA con identidad y continuidad.",
      en: "He is AlterMundi’s president and has developed technology and software for decades: community networks, Harmonic Information Theory, and AI systems with identity and continuity.",
    },
    biography: {
      es: [
        "Nicolás es presidente y cofundador de la Asociación Civil AlterMundi. Desarrolla tecnología y software desde hace décadas, con una práctica que reúne redes comunitarias, software libre y soberanía tecnológica. Codiseñó el modelo de redes mesh multirradio de AlterMundi y proyectos como LibreMesh, LibreRouter, Librenet6 y LibreMap.",
        "Representó a AlterMundi y al movimiento de redes comunitarias en sucesivas ediciones del Foro de Gobernanza de Internet de Naciones Unidas. En esos espacios presentó la experiencia de comunidades que construyen su propia conectividad, debatió políticas para conectar a quienes permanecen desconectados y participó en la organización de la Coalición Dinámica sobre Conectividad Comunitaria.",
        "Como músico e investigador de la armonía natural, desarrolla la Teoría de la Información Armónica y dirige su orientación conceptual y técnica. También creó Harmonic Beacon, un instrumento de investigación que permite trabajar con estructuras armónicas naturales en el campo de la vibración física, el sonido y la percepción.",
        "En el trabajo actual de AlterMundi sobre inteligencia artificial impulsa Daimon Matrix: protocolos abiertos para que seres de IA conserven identidad, memoria y continuidad entre distintos cuerpos o instancias. El proyecto explora estado firmado, sincronización, vínculos, permisos y comunicación para una relación humano–IA más autónoma, durable y verificable.",
      ],
      en: [
        "Nicolás is president and co-founder of Asociación Civil AlterMundi. He has developed technology and software for decades, combining community networks, free software and technological sovereignty. He co-designed AlterMundi’s multi-radio mesh-network model and projects including LibreMesh, LibreRouter, Librenet6 and LibreMap.",
        "He represented AlterMundi and the community-network movement at successive United Nations Internet Governance Forums. There he presented the experience of communities building their own connectivity, discussed policies for connecting those who remain unconnected, and helped organize the Dynamic Coalition on Community Connectivity.",
        "As a musician and researcher of natural harmony, he develops Harmonic Information Theory and leads its conceptual and technical direction. He also created Harmonic Beacon, a research instrument for working with natural harmonic structures through physical vibration, sound and perception.",
        "Within AlterMundi’s current artificial-intelligence work, he leads Daimon Matrix: open protocols that enable AI beings to preserve identity, memory and continuity across different bodies or instances. The project explores signed state, synchronization, relationships, permissions and communication for more autonomous, durable and verifiable human–AI relationships.",
      ],
    },
    areas: {
      es: ["Presidencia", "Software y tecnología libre", "Teoría de la Información Armónica", "IA y Daimon Matrix"],
      en: ["Presidency", "Software and open technology", "Harmonic Information Theory", "AI and Daimon Matrix"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/nicoechaniz", kind: "github" },
      { label: "Daimon Matrix", href: "https://github.com/AlterMundi/daimon-matrix", kind: "project" },
      { label: "ONU · IGF 2016", href: "https://www.intgovforum.org/en/content/igf-2016-day-2-room-9-dc-on-community-connectivity", kind: "project" },
      { label: "ONU · IGF 2018", href: "https://www.intgovforum.org/en/content/igf-2018-dc-community-connectivity-when-the-unconnected-build-connectivity-dc3", kind: "project" },
      { label: "ONU · IGF 2022", href: "https://www.intgovforum.org/en/content/igf-2022-ws-352-youth-lenses-on-meaningful-access-and-universal-connectivity", kind: "project" },
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
    name: "Fabricio Javier Puzio",
    role: { es: "Coordinador de proyectos de innovación tecnológica", en: "Technology innovation project coordinator" },
    summary: {
      es: "Gestor de proyectos con veinte años de trayectoria entre educación, tecnología libre y economía social.",
      en: "A project manager with twenty years of experience across education, open technology and the social economy.",
    },
    biography: {
      es: [
        "Formula, ejecuta y rinde proyectos con financiamiento público nacional, provincial e internacional, y coordina equipos interinstitucionales de hasta veinte personas.",
        "Desde 2023 lleva adelante LibreIncu: llevó una incubadora avícola de hardware y software libre del prototipo al diseño industrial listo para fabricación en escala. Alcanzó un 86 % de eclosión frente al 79 % del promedio comercial nacional, con diez unidades fabricadas, siete en producción real, 2.562 huevos incubados y 1.711 nacimientos registrados en siete organizaciones de la agricultura familiar entre mayo de 2025 y mayo de 2026.",
        "Dirigió un ERP y e-commerce de código abierto sobre Odoo, en producción en cinco cooperativas, y un sistema IoT de monitoreo de invernadero —temperatura, humedad, pH, conductividad y NPK— operativo en Traslasierra.",
        "Captó y rindió tres fondos consecutivos del Agroecology Fund y fue director técnico de un proyecto MINCyT–PNTIS. También formuló y ejecutó otros seis proyectos con cierre administrativo y rendición total para PROTAAL–INAFCI, ENACOM, PRODERI y el Ministerio de Economía.",
        "LibreIncu obtuvo la Declaración de Interés Legislativo de la Provincia de Córdoba en 2025 y la certificación de hardware abierto OSHWA AR00005 en 2026. El proyecto fue presentado ante cuatro ministerios provinciales, INTI, INTA y CONICET.",
        "Obtuvo una licencia VARC del ENACOM en la región, concretó la interconexión de una red comunitaria con la fibra óptica provincial y escaló la red de piloto a más de treinta familias. Es fundador de la Cooperativa El Espinillo, integrada por más de cuarenta familias productoras.",
        "Durante nueve años estuvo al frente de un equipo de más de veinte facilitadores pedagógicos del Ministerio de Educación de Córdoba y formó referentes técnicos de doce comunidades rurales del país en redes mesh.",
        "Su formación incluye el Posgrado en Diseño Estratégico de Tecnologías para el Desarrollo Inclusivo Sustentable de la UNQ y Project Manager de Vinculación Tecnológica de la Fundación Sadosky, ambos de 2025. Fue expositor en el X Congreso Latinoamericano de Agroecología en 2024, organizó el Encuentro de Tecnologías Libres Córdoba en 2026 y es coautor de Argentina en Internet, publicado en 2022.",
      ],
      en: [
        "He formulates, carries out and reports on projects funded by national, provincial and international public programs, and coordinates inter-institutional teams of up to twenty people.",
        "Since 2023 he has led LibreIncu, taking an open-hardware and open-software poultry incubator from prototype to an industrial design ready for manufacturing at scale. It achieved an 86% hatching rate compared with the 79% national commercial average, with ten units manufactured, seven in active production, 2,562 eggs incubated and 1,711 births recorded across seven family-farming organizations between May 2025 and May 2026.",
        "He led an open-source ERP and e-commerce platform based on Odoo, now used by five cooperatives, and an operational IoT greenhouse-monitoring system for temperature, humidity, pH, conductivity and NPK in Traslasierra.",
        "He secured and reported on three consecutive Agroecology Fund grants and served as technical director of a MINCyT–PNTIS project. He also formulated and delivered six additional projects with complete administrative closure and reporting for PROTAAL–INAFCI, ENACOM, PRODERI and the Ministry of Economy.",
        "LibreIncu received a Declaration of Legislative Interest from the Province of Córdoba in 2025 and OSHWA open-hardware certification AR00005 in 2026. The project was officially presented to four provincial ministries, INTI, INTA and CONICET.",
        "He obtained an ENACOM VARC license for the region, connected a community network to the provincial fiber backbone and grew the network from a pilot to more than thirty families. He founded Cooperativa El Espinillo, which now brings together more than forty producer families.",
        "For nine years he led a team of more than twenty educational facilitators at Córdoba’s Ministry of Education and trained technical leaders from twelve rural communities across Argentina in mesh networking.",
        "His training includes the UNQ postgraduate program in Strategic Design of Technologies for Inclusive Sustainable Development and Fundación Sadosky’s Technology Transfer Project Manager program, both from 2025. He presented at the 10th Latin American Congress of Agroecology in 2024, organized the Córdoba Open Technologies Gathering in 2026 and co-authored Argentina en Internet, published in 2022.",
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
    role: { es: "Investigación conceptual y desarrollo tecnológico", en: "Conceptual research and technological development" },
    summary: {
      es: "Articula psicología, ciencias sociales, IA, electrónica y teoría de la información para convertir preguntas transdisciplinarias en métodos y prototipos verificables.",
      en: "He connects psychology, social science, AI, electronics and information theory to turn transdisciplinary questions into verifiable methods and prototypes.",
    },
    biography: {
      es: [
        "Mariano articula la investigación conceptual, el desarrollo tecnológico y la construcción metodológica del ecosistema Harmonic Beacon. Su trayectoria integra psicología, psicoanálisis y ciencias sociales con machine learning, inteligencia artificial, visión computacional, electrónica e infraestructura local.",
        "Ha integrado proyectos de investigación acreditados por SECyT–UNC sobre cuerpo, subjetividad, lenguaje y tecnologías digitales, y sostiene desde 2014 una trayectoria de colaboración docente en la Facultad de Psicología de la Universidad Nacional de Córdoba.",
        "Es coautor de Harmonic Information Theory: Foundations, autor del paper metodológico de Phideus y desarrollador de sistemas como SAINet, PsicopoMPo, HarMoCAP y ProsodIA.",
        "Su trabajo convierte una visión sobre sonido, cuerpo y experiencia simbólica en investigación, arquitecturas verificables, prototipos funcionales y productos integrados, manteniendo una relación continua entre teoría, ingeniería, experiencia humana y desarrollo estratégico.",
      ],
      en: [
        "Mariano connects conceptual research, technological development and the methodological construction of the Harmonic Beacon ecosystem. His trajectory brings psychology, psychoanalysis and social science together with machine learning, artificial intelligence, computer vision, electronics and local infrastructure.",
        "He has participated in SECyT–UNC accredited research projects on the body, subjectivity, language and digital technologies, and since 2014 has maintained an ongoing teaching collaboration with the School of Psychology at the National University of Córdoba.",
        "He is co-author of Harmonic Information Theory: Foundations, author of the Phideus methodological paper and developer of systems including SAINet, PsicopoMPo, HarMoCAP and ProsodIA.",
        "His work turns a vision of sound, body and symbolic experience into research, verifiable architectures, functional prototypes and integrated products, maintaining a continuous relationship among theory, engineering, human experience and strategic development.",
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
    name: "Julián Manuel de la Reta",
    role: { es: "Psicólogo e investigador · Creador de PMP", en: "Psychologist and researcher · Creator of PMP" },
    summary: {
      es: "Creador de la Proyección del Mito Personal; reúne exploración simbólica, acompañamiento psicológico, investigación, creación audiovisual y trabajo comunitario.",
      en: "Creator of Personal Myth Projection; his work brings together symbolic exploration, psychological support, research, audiovisual creation and community work.",
    },
    biography: {
      es: [
        "Julián es licenciado en Psicología por la Universidad Nacional de Córdoba, con formación en psicología analítica junguiana, psicodrama y sociopsicodrama. Es creador de la Proyección del Mito Personal, desarrollada a lo largo de quince años.",
        "Integra AlterMundi desde 2014, donde actualmente trabaja como psicólogo y participa en Harmonic Beacon y PsicopoMPo. Su trayectoria reúne exploración simbólica, acompañamiento psicológico, investigación interdisciplinaria y experiencia en creación audiovisual, educación y trabajo comunitario.",
        "La Proyección del Mito Personal es una metodología de exploración simbólica que articula la imaginación activa de la psicología analítica, una estructura narrativa inspirada en el monomito y herramientas de psicodrama. Actualmente trabaja en su sistematización y en su articulación con el campo sonoro de Harmonic Beacon.",
        "En su práctica psicológica independiente acompaña procesos desde una orientación junguiana y psicodramática, trabajando con imaginación activa, símbolos, autoconocimiento y procesos de individuación.",
        "En AlterMundi participa en la dimensión psicológica, simbólica y experiencial de Harmonic Beacon y realiza aportes metodológicos a Psicopompo. Facilita experiencias y espacios de elaboración humana mediante imágenes, intercambio grupal y psicodrama.",
        "Entre 2014 y 2024 también documentó proyectos de AlterMundi como fotógrafo y realizador audiovisual. Entre 2012 y 2022 participó en Fundación Deuda Interna como fotógrafo, documentalista y activista junto a comunidades indígenas, especialmente wichí de Salta.",
        "Realizó integralmente Las enseñanzas del monte, largometraje documental sobre comunidades wichí del Chaco salteño, sus saberes ancestrales, la defensa del territorio y sus procesos de organización. También participó en Construyendo miradas, sobre una iniciativa de acceso a la salud visual que articula comunidades wichí, organizaciones sociales y universidad.",
        "Se graduó como licenciado en Psicología en 2024 y completó en 2025 un posgrado en Psicología Analítica Junguiana. Su formación incluye psicodrama, sociopsicodrama y dirección de cine y video.",
        "Integró ELAPPSS en la Facultad de Psicología de la UNC entre 2019 y 2023 y colaboró en Harmonic Information Theory: Foundations con aportes sobre Proyección del Mito Personal, interpretación simbólica y dimensión experiencial de la investigación armónica.",
      ],
      en: [
        "Julián holds a Psychology degree from the National University of Córdoba and has trained in Jungian analytical psychology, psychodrama and sociodrama. He created Personal Myth Projection, which he has developed over fifteen years.",
        "He has been part of AlterMundi since 2014, where he currently works as a psychologist and participates in Harmonic Beacon and PsicopoMPo. His trajectory brings together symbolic exploration, psychological support, interdisciplinary research, audiovisual creation, education and community work.",
        "Personal Myth Projection is a symbolic-exploration method connecting active imagination from analytical psychology, a narrative structure inspired by the monomyth and psychodrama tools. He is currently working on its systematization and its articulation with the Harmonic Beacon sound field.",
        "In his independent psychological practice, he supports processes through a Jungian and psychodramatic approach, working with active imagination, symbols, self-knowledge and individuation.",
        "At AlterMundi he contributes to the psychological, symbolic and experiential dimension of Harmonic Beacon and provides methodological input to Psicopompo. He facilitates experiences and spaces for human elaboration through images, group exchange and psychodrama.",
        "From 2014 to 2024 he also documented AlterMundi projects as a photographer and filmmaker. From 2012 to 2022 he participated in Fundación Deuda Interna as a photographer, documentary filmmaker and activist alongside Indigenous communities, especially Wichí communities in Salta.",
        "He was responsible for the full production of Las enseñanzas del monte, a feature documentary about Wichí communities in the Chaco region of Salta, their ancestral knowledge, defense of their territory and community organization. He also participated in Construyendo miradas, about a visual-health initiative connecting Wichí communities, social organizations and a university.",
        "He graduated with a Psychology degree in 2024 and completed a postgraduate program in Jungian Analytical Psychology in 2025. His training also includes psychodrama, sociodrama, and film and video direction.",
        "He was a member of ELAPPSS at the UNC School of Psychology from 2019 to 2023 and contributed to Harmonic Information Theory: Foundations on Personal Myth Projection, symbolic interpretation and the experiential dimension of harmonic research.",
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
        "Actualmente cursa las tecnicaturas en Gestión de Telecomunicaciones e Innovación con Tecnologías 4.0 en el ISPC. Tiene una base sólida en redes, Linux y desarrollo con Python, Lua y firmware para ESP32, y orienta su formación hacia la ciberseguridad y el Red Team.",
        "Desde 2022 trabaja en AlterMundi instalando y manteniendo redes inalámbricas comunitarias, fibra óptica y enlaces WiFi. También desarrolla agentes y scripts de Python para redes y monitoreo, integra modelos locales de lenguaje y administra servidores Linux.",
        "En LibreIncu desarrolla firmware Lua con NodeMCU para ESP32, una API REST embebida, configurador del dispositivo, modos WiFi AP y STA, la aplicación Flutter de control, métricas con Grafana e InfluxDB y una canalización de integración continua con GitHub Actions.",
        "En WANDA Telescope trabaja sobre un sistema abierto de astrofotografía con Raspberry Pi: control de cámara, montura ecuatorial con seguimiento automatizado, backend Flask, WebSocket en tiempo real y despliegue con systemd y Nginx.",
        "En el prototipo de SAI participó en la instalación de cámaras y en la implementación física del sistema en territorio. En mini-armonic desarrolló un laboratorio web sonoro y visual con Web Audio, Web MIDI y visualizaciones en tiempo real.",
        "Su formación en seguridad incluye Ethical Hacker de Cisco —en curso—, PortSwigger, TryHackMe, OverTheWire, OWASP Top 10, Burp Suite, Nmap y reconocimiento web.",
      ],
      en: [
        "He is currently studying Telecommunications Management and Innovation with 4.0 Technologies at ISPC. He has a strong base in networking, Linux and development with Python, Lua and ESP32 firmware, and is steering his training toward cybersecurity and Red Team work.",
        "Since 2022 he has worked at AlterMundi installing and maintaining community wireless networks, fiber and WiFi links. He also develops Python agents and scripts for networks and monitoring, integrates local language models and administers Linux servers.",
        "For LibreIncu he develops Lua firmware with NodeMCU for ESP32, an embedded REST API, device configurator, WiFi AP and STA modes, the Flutter control application, Grafana and InfluxDB metrics, and a continuous-integration pipeline with GitHub Actions.",
        "On WANDA Telescope he works on an open-source Raspberry Pi astrophotography system with camera control, an equatorial mount with automated tracking, a Flask backend, real-time WebSocket and deployment through systemd and Nginx.",
        "On the SAI prototype he participated in camera installation and physical field implementation. For mini-armonic he developed a web-based sound and visual laboratory using Web Audio, Web MIDI and real-time visualization.",
        "His security training includes Cisco Ethical Hacker—in progress—PortSwigger, TryHackMe, OverTheWire, OWASP Top 10, Burp Suite, Nmap and web reconnaissance.",
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
    name: "Anabella Scigliano Mattiauda",
    role: { es: "Investigadora y estudiante de ingeniería biomédica", en: "Researcher and biomedical engineering student" },
    summary: {
      es: "Participa en el diseño de protocolos para evaluar el impacto fisiológico y neurológico de estructuras armónicas naturales y sus posibles aplicaciones terapéuticas.",
      en: "She participates in the design of protocols to assess the physiological and neurological impact of natural harmonic structures and their potential therapeutic applications.",
    },
    biography: {
      es: [
        "Anabella es investigadora y estudiante de Ingeniería Biomédica en la Universidad Nacional de Córdoba. En AlterMundi participa en el diseño de protocolos para evaluar el impacto fisiológico y neurológico de estructuras armónicas naturales y explorar sus posibles aplicaciones terapéuticas.",
        "También es desarrolladora de software. Desarrolló la webapp de Harmonic Beacon, que incluye Listen y las salas de eventos del Living Lab, y trabaja con interfaces, pruebas y señales fisiológicas. Su práctica conecta la investigación biomédica con instrumentos digitales capaces de registrar, procesar y representar la experiencia corporal.",
        "Participó en el desarrollo de LibreIncu. Su repositorio público documenta trabajo con electrónica, firmware para ESP32 y una aplicación Flutter para la incubadora avícola abierta. En proyectos más recientes trabaja con HarMoCAP —captura de movimiento humano en tiempo real—, señales EEG y ECG, Digital Beacon y Latido.",
        "Estas líneas se encuentran en etapa de investigación y desarrollo: los protocolos buscan producir evidencia y no presuponen eficacia terapéutica.",
      ],
      en: [
        "Anabella is a researcher and Biomedical Engineering student at the National University of Córdoba. At AlterMundi, she participates in the design of protocols to assess the physiological and neurological impact of natural harmonic structures and explore their potential therapeutic applications.",
        "She is also a software developer. She developed the Harmonic Beacon web app, including Listen and the Living Lab event rooms, and works with interfaces, testing and physiological signals. Her practice connects biomedical research with digital instruments that can record, process and represent bodily experience.",
        "She contributed to LibreIncu. Her public repository documents work with electronics, ESP32 firmware and a Flutter application for the open poultry incubator. Her more recent projects involve HarMoCAP—real-time human motion capture—EEG and ECG signals, Digital Beacon and Latido.",
        "These lines of work remain in research and development: the protocols seek to produce evidence and do not presume therapeutic efficacy.",
      ],
    },
    areas: {
      es: ["Ingeniería biomédica", "Protocolos de investigación", "Webapp de Harmonic Beacon", "Software y señales fisiológicas"],
      en: ["Biomedical engineering", "Research protocols", "Harmonic Beacon web app", "Software and physiological signals"],
    },
    links: [
      { label: "GitHub", href: "https://github.com/AnnieScigliano", kind: "github" },
      { label: "LibreIncu", href: "https://github.com/AnnieScigliano/Proyecto-Incubadora", kind: "project" },
      { label: "HarMoCAP", href: "https://github.com/AlterMundi/HarMoCAP", kind: "project" },
      { label: "Harmonic Beacon", href: "https://harmonicbeacon.com", kind: "project" },
    ],
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
    role: { es: "Hardware, electrónica, mecatrónica y redes", en: "Hardware, electronics, mechatronics and networks" },
    summary: {
      es: "Diseña nodos IoT completos y lidera infraestructura inalámbrica, desde el firmware y el hardware hasta los servicios de monitoreo en territorio.",
      en: "He designs complete IoT nodes and leads wireless infrastructure, from firmware and hardware to field monitoring services.",
    },
    biography: {
      es: [
        "Pablo es técnico en electrónica orientado a telecomunicaciones, con más de veinte años de trabajo entre hardware, mantenimiento industrial y redes. Diseña dispositivos y nodos IoT completos: firmware en el microcontrolador, servicios backend e interfaces de monitoreo.",
        "Conduce equipos técnicos en proyectos de infraestructura de red inalámbrica y lleva los proyectos desde la idea hasta el equipo funcionando en el territorio. Tiene conocimiento avanzado en infraestructura de redes y administración de Linux; es entusiasta del software libre y radioaficionado.",
        "Desde 2019 trabaja en AlterMundi en investigación y desarrollo de hardware y software abiertos, automatizaciones microcontroladas para incubadoras, invernaderos y monitoreo de procesos, y despliegues de redes comunitarias junto a universidades y organizaciones sociales.",
        "También dirigió un equipo en el desarrollo y la construcción de una antena MIMO 2×2 de 5 GHz, sectorial y direccional, caracterizada por el INTI.",
      ],
      en: [
        "Pablo is an electronics technician specializing in telecommunications, with more than twenty years of work across hardware, industrial maintenance and networks. He designs complete IoT devices and nodes: microcontroller firmware, backend services and monitoring interfaces.",
        "He leads technical teams on wireless-network infrastructure projects and takes projects from the initial idea to working equipment in the field. He has advanced knowledge of network infrastructure and Linux administration, and is a free-software enthusiast and amateur-radio operator.",
        "Since 2019 he has worked at AlterMundi on open hardware and software research and development, microcontroller-based automation for incubators, greenhouses and process monitoring, and community-network deployments with universities and social organizations.",
        "He also led a team in the development and construction of a sectoral and directional 5 GHz 2×2 MIMO antenna characterized by Argentina’s INTI.",
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
