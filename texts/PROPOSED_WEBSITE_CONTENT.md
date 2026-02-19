# AlterMundi — Proposed Website Content (Draft v2)

> This document organizes proposed content for the new AlterMundi website.
> Each section includes the actual text to be used, notes on intent, and alternatives where applicable.
> Content is in English. A Spanish version can be produced once this is finalized.

---

## 1. HERO SECTION

**Badge:** `> OPEN SOURCE TECHNOLOGY`

**Heading:**
Engineering Open Tools for the Real World

**Subheading:**
We design and build open-source hardware and software for resilient infrastructure — from community networks and fire detection to agricultural tools and beyond.

**Buttons:** "Explore Projects" / "Work with Us"

**Status indicators:** "Active Projects: 3" / "Open Source"

### Notes
- "Real World" keeps the scope broad — AlterMundi's tools serve communities, governments, agricultural producers, and more.
- The subheading gives concrete examples (networks, fire detection, agriculture) so visitors immediately grasp the range of work.

---

## 2. ABOUT SECTION

**Section label:** `> ABOUT_US`

**Heading:** What Is AlterMundi

**Body (2–3 short paragraphs):**

AlterMundi is a nonprofit organization of experienced community network builders and free software advocates based in Argentina. We develop open-source tools — hardware, software, and documentation — that solve real infrastructure problems: from internet connectivity in underserved areas to wildfire detection and agricultural technology.

We believe technology should be a vehicle for equity and autonomy, not a privilege. Every tool we create is designed to be deployed, maintained, and adapted by the people and organizations who use it — fostering technological sovereignty from the ground up.

Since 2022 we have expanded beyond connectivity into renewable energy, collaborative economy, IoT, AI, and education — always with the same principle: open, accessible, and built for the real world.

**"Learn More" button** → links to `/about` (extended page)

### Principles Cards (4 cards)

**01 — Open by Default**
Everything we create — code, hardware designs, documentation — is released under open licenses. Anyone can study, adapt, and redistribute our tools freely, ensuring technological independence.

**02 — Community-Centered**
We don't build *for* people, we build *with* them. Every project starts by listening to real needs and integrates local knowledge at every stage — from ideation to deployment and maintenance.

**03 — Built to Last**
Our solutions are designed for real-world conditions: low-cost, high-performance, field-repairable, and scalable. We prove that open-source technology doesn't compromise on quality.

**04 — Empowerment through Technology**
We strengthen the autonomy of those left behind by the digital divide. Our tools and training put people in control of their own technological development, enabling active participation rather than dependency.

### Notes
- The about section answers three questions fast: *Who are you? What do you do? Why does it matter?*
- The third paragraph introduces the breadth of areas (beyond just connectivity) which sets up the next section.
- Four principle cards: the 4th adds the empowerment/autonomy message from the source docs.
- **Alternatives for card 02:**
  - "Rooted in Real Needs" — same idea, different framing
- **Alternatives for card 03:**
  - "Durable & Maintainable" — more technical tone
  - "Quality Without Compromise" — bolder

---

## 3. AREAS OF WORK (replaces "Our Process" + "Capabilities")

> **Rationale for replacing the two sections:**
> The original "Our Process" (Research → Co-design → Build → Deploy) is generic and doesn't tell the visitor anything specific about AlterMundi. The "Capabilities" list (Hardware, Software, Systems Integration, Support) is similarly abstract.
>
> Instead, an **"Areas of Work"** section directly answers *"What does AlterMundi actually work on?"* — which is exactly the bridge needed before the Projects section. Each area gives context so when visitors see a project like "LibreRouter" or "SAI", they already understand the bigger picture it belongs to.
>
> If we still want a "How We Work" feel, we can add a single short paragraph before the areas grid that describes the methodology.

**Section label:** `> AREAS_OF_WORK`

**Heading:** What We Work On

**Intro paragraph:**
We work across six interconnected areas — all driven by the same approach: listen to communities, co-design solutions, build open tools, and support long-term autonomy.

### Areas Grid (6 items)

**Connectivity**
We promote the co-creation of internet infrastructure — open hardware, mesh networking software, and public policy advocacy — so communities can own and operate their own networks.

**Collaborative Economy**
We provide technical and methodological support to strengthen community-driven economic projects, transforming how local organizations manage finances, resources, and growth.

**Renewable Energy**
We develop accessible and sustainable technologies for responsible energy use, designed for long-term viability in resource-limited environments.

**Artificial Intelligence**
We drive access to and decentralization of AI, aiming for technological autonomy and empowering community projects with practical, open AI tools.

**Education**
We foster learning that unleashes creative and technological potential — cultivating individual and collective skills for a constantly transforming world.

**IoT & Monitoring**
We build and simplify open monitoring and control systems that strengthen local production and safety projects.

### Notes
- This section replaces both "Our Process" and "Capabilities" with something far more informative.
- The intro paragraph preserves the *process* idea (listen → co-design → build → support) in one line, so we don't lose that narrative.
- Each area description is ~1–2 sentences, scannable.
- **Design suggestion:** These could use icons and the same card/grid layout currently used by the capabilities section.
- **Alternative approach:** If we want to keep a separate "How We Work" section before Areas, we could have a compact 4-step visual (one line each) followed by the 6 areas. See option below.

---

## 3-ALT. ALTERNATIVE: Keep "Our Process" + Replace "Capabilities" with "Areas"

> Only use this if we feel the page needs more visual sections and the process adds value.

### Our Process (compact version)

**Section label:** `> HOW_WE_WORK`

**Heading:** How We Work

**01 — Listen & Understand**
We start by understanding each community's specific reality, needs, and existing knowledge.

**02 — Co-Design**
Solutions are designed collaboratively — integrating local knowledge with our technical expertise.

**03 — Build & Deploy**
We create open tools — hardware, software, documentation — and deploy them alongside the community.

**04 — Support & Sustain**
We ensure communities can maintain, adapt, and scale their solutions independently over time.

### Then "Areas of Work" follows as described in Section 3 above.

---

## 4. PROJECTS SECTION (content notes)

> The projects section structure is already good. The main thing needed is replacing the lorem ipsum descriptions with real content. Here are proposed descriptions:

**Section label:** `> FEATURED_WORK`

**Heading:** Our Projects

**Description:**
Open-source tools built for real-world deployment — from community network infrastructure to fire detection systems.

### LibreRouter / LibreMesh
An open-hardware WiFi router and its companion mesh networking firmware, purpose-built for community networks. LibreRouter is designed to be affordable, durable, and deployable by people with no prior networking experience — enabling communities to build and manage their own internet infrastructure. Already powering networks like QuintanaLibre, connecting over 70 families in rural Córdoba, Argentina.

**Tags:** Networking, Hardware, Firmware
**Status:** Flagship

### LibreIncu
An open-source poultry incubator system designed to enhance efficiency and productivity in family farming. Developed together with CTO (a rural organization), LibreIncu integrates monitoring and control of temperature and humidity using free hardware and software. Each incubator broadcasts its own WiFi network, is controlled via a mobile app, and sends real-time data to a remote dashboard — putting accessible technology in the hands of small-scale producers.

**Tags:** IoT, Agriculture, Hardware
**Status:** Active

### SAI (Sistema de Alerta de Incendios)
A distributed early wildfire detection system using computer vision, edge computing, and intelligent automation. SAI deploys camera nodes in vulnerable areas that perform real-time image analysis to detect smoke and fire, triggering automated alerts. Designed as robust, scalable infrastructure suitable for communities, municipalities, and private landowners protecting forests and agricultural land.

**Tags:** Computer Vision, IoT, Safety
**Status:** Active

---

## 5. CONTACT SECTION (content notes)

**Section label:** `> CONTACT`

**Heading:** Work with Us

**Description:**
We value collaboration as the foundation of everything we do. Whether you want to fund a project, contribute code, test our tools, or start a community network — every action counts.

Reach out at `info@altermundi.net` or through our social networks.

---

## 6. EXTENDED ABOUT PAGE (for /about route — future)

> This is the longer version that the "Learn More" button would link to.
> It can include the full content from the source documents:
> - Complete principles (Open Development, Responsible Innovation, Valuing Diversity, Empowerment through Technology)
> - Full "Our Practice" methodology
> - History and background
> - Team information
>
> This doesn't need to be built now, but the landing page "Learn More" button can link to a placeholder or to the current altermundi.net/about while this is being developed.

---

## OPEN QUESTIONS FOR DISCUSSION

1. **Hero subheading:** Current proposal mentions concrete examples (networks, fire detection, agriculture). Is this the right level of detail, or should it stay more abstract?

2. **Project descriptions:** LibreIncu and SAI descriptions are now based on the GitHub repos — please review for technical accuracy. LibreRouter description could use more detail if available.

3. **Footer tagline:** Currently "Built with open tools & open hearts" — keep it or update?

4. **About section "Learn More" destination:** Link to a future `/about` page, or temporarily to `altermundi.net` while the extended page is built?

## RESOLVED DECISIONS

- **Hero heading:** Keeping "Engineering Open Tools for the Real World" ✓
- **Middle sections:** Keeping single "Areas of Work" replacing Process + Capabilities ✓
- **Principle cards:** 4 cards (added "Empowerment through Technology") ✓
- **Language:** English first, Spanish version later ✓
