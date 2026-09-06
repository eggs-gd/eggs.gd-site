# earwiG Games

Independent software.

Every project starts with a problem in my own workflow.
If existing tools solve it well, I use them. If they don't, I build my own.

The goal isn't to ship demos or collect technologies. It's to create tools I genuinely enjoy using every day.

Some projects are finished. Some are still evolving. All of them are part of my daily life.

## Public

### I Ching: Shape of Momentum
note: Most digital I Ching tools felt trapped in old interfaces: too many panels, awkward animations and interpretations that were either too abstract to use or too oracle-like to trust. This app keeps the useful parts I was already doing with coins and a notebook: a clean casting flow, readable hexagram texts, personal notes and a curated interpretation layer. It is a reflection tool for exploring variations of the current situation, not a fortune-telling machine.
link: https://iching.eggs.gd
stack: Svelte, TypeScript, Capacitor, iOS, Android, PWA
ico: icons/iching-favicon.svg

### Attention Journal
note: Attention Journal grew from a structured reflection exercise into a lightweight event journal. An event can be captured in seconds with a -10..+10 score and a few optional prompts, without turning journaling into an obligation. The accumulated entries help show the broader shape of a day or period instead of letting the loudest recent event dominate perception.
link: https://journal.eggs.gd
stack: Svelte, TypeScript, Capacitor, iOS, Android, PWA
ico: icons/diary-icon.png

### The War Journal
note: Following the war through hundreds of Telegram channels became exhausting: the same news reposted by different sources, important updates mixed with noise, and rumors traveling faster than context. The pipeline reads across sources, groups updates into clear categories and keeps unverified fragments separate as rumors. The design principle is simple: reduce noise without flattening uncertainty. Telegram is the right surface because it is where the reading already happens, for me and for a small regular audience.
link: https://t.me/+D-7TS_1Jn_AzNDky
stack: Python, Telegram, AI, Docker
ico: icons/war-journal.jpg

### Book Pipeline
note: Years of Telegram posts and teaching material had become too large to turn into something book-shaped by hand. Book Pipeline starts from an outline and a corpus of small documents, then progressively retrieves, organizes and rewrites the material into structured drafts. RAG and specialized agents matter here because they support that editorial pipeline; the product story is moving from scattered notes to a coherent artifact.
link: https://github.com/Loot-Wins-Evil/book-pipeline-demo
stack: Python, AI, RAG

### JiveMax
note: piCorePlayer/JiveLite did not survive contact with modern hardware: on a 2K touch screen the old UI fell apart. Fixing the interface led naturally into fixing the build, because a modernization that is painful to maintain is only half a modernization. Docker, GitHub Actions and automated cross-platform builds sit beside the fluid, DPI-aware UI so the project preserves the spirit of the original while becoming usable on current devices.
link: https://github.com/dukobpa3/jivemax
stack: C, C++, Lua, Embedded

### Markdown to Telegram
note: Running several Telegram channels without a real CMS was annoying, while my Markdown writing tools already had the clean editing experience I wanted. Instead of building another publishing UI, I moved publishing into the writing workflow I already had: write Markdown, send it to a small server, publish native Telegram messages. It has since become a reusable backend for formatting, media, attachments and cross-posting across my channels and automation workflows.
link: https://github.com/dukobpa3/ulysses-tg
stack: Node.js, TypeScript, Telegram, Docker

### Career Space
note: My own job search spans several possible roles and levels, so maintaining separate resumes, profiles and applications by hand quickly became inconsistent. Career Space keeps one structured career source of truth and derives everything else from it: fit checks, tailored CVs, cover letters, profile updates, job-board discovery and a hiring pipeline. The agent-first local workflow is a design choice, not a slogan: sensitive career material stays close to the person it describes.
link: https://github.com/eggs-gd/career-space
stack: TypeScript, AI, MCP


## Private

### Nest AI
note: Nest AI exists so I can delegate real project work to agents without being tied to several coding-agent UIs or sitting at my desk. It gives my projects durable tasks, shared context and orchestration, so agents work from explicit project state rather than whatever happened to be the latest chat message. It is an experiment in running a small development studio where I shape the work and agents execute it.
stack: Go, Svelte, AI

### Kongui
note: Kongui is a tactical turn-based card game built around prediction and counterplay. The appeal is the moment before an action resolves: reading intent, positioning around it and choosing whether to commit, bait or answer. The design focuses on asymmetric character abilities and clear tactical decisions rather than hiding the game behind randomness.
stack: Go, Svelte

### Perceptrail
note: Perceptrail is a lightweight media explorer that sits on top of an existing photo library or folder instead of replacing media management. A Go backend runs a Chain-of-Responsibility-style enrichment pipeline where plugins progressively add metadata: model similarity, faces, objects, geo, colors or deterministic rules. Results stream to the client as they become available, with browser workers handling the server stream and grid layout so the UI can stay responsive while media flows in. Traditional media libraries start from folders. Perceptrail starts from similarity.
stack: Go, Svelte, Python, AI, Docker


## Prototypes

### LMSense
note: LMSense is an experiment in personal radio where a few high-level controls influence mood and direction while the system constructs the stream. It explores tuning a radio wave rather than choosing a fixed genre or playlist.
stack: Go, Python, AI

### Life OS
note: Life OS explores how to structure years of notes, ideas, memories and fragments so both I and AI tools can work with them. Obsidian and Markdown are the current substrate because they stay portable, readable and easy to inspect.
stack: Obsidian, Svelte

### Glados
note: Glados is my ongoing Jarvis/Glados experiment: voice, memory, home automation and control over the rest of my systems, including Nest AI. It explores one assistant that can talk, remember, retrieve context and operate things around me.
stack: Go, Python, AI
