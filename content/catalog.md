# earwiG Games

Independent software.

Every project starts with a problem in my own workflow. If existing tools solve it well, I use them. If they don't, I build my own.

This is the practical side of my work: software, engineering tools and experiments I build for problems I actually encounter. Released public projects, work in development, private systems and prototypes are distinguished below.

## Public

### Fleet

note: A system for delegating project work to agents without remaining tied to several coding-agent interfaces. Durable tasks, shared context and orchestration let work proceed from explicit project state rather than the latest chat message. I shape the work; agents execute it. The system supports my independent projects.
link: https://fleet.eggs.gd/
status: In development
stack: Go, Svelte, AI

### Career Space

note: My job search spans several roles and levels. Keeping separate resumes, profiles and applications consistent by hand became its own problem. Career Space keeps a structured career source of truth and uses a coding agent to derive fit checks, profiles, tailored documents and an application pipeline. The useful idea is consistency between career evidence, positioning and the next decision, not just generating more applications. Personal workspace files are local and gitignored. In my own workflow, search and application throughput increased from roughly 1-3 quality applications/hour to 10+/hour.
link: https://career.eggs.gd
stack: TypeScript, AI, MCP

### I Ching: Shape of Momentum

note: A reflection tool built around the coin-and-notebook practice I already used. It combines a clean casting flow, readable hexagram texts, personal notes and a curated interpretation layer. The product emphasis is a usable reading experience, not fortune-telling.
link: https://iching.eggs.gd
stack: Svelte, TypeScript, Capacitor, iOS, Android, PWA, GCP
ico: icons/iching-favicon.svg

### Attention Journal

note: A structured reflection exercise turned into a lightweight event journal. Capture an event with a -10..+10 score and optional prompts, then look for patterns across a day or period rather than letting the loudest recent event define the whole picture.
link: https://journal.eggs.gd
stack: Svelte, TypeScript, Capacitor, iOS, Android, PWA, GCP
ico: icons/diary-icon.png

### The War Journal

note: Reading hundreds of Telegram channels produced repeated stories, noise and fragments with uncertain context. This pipeline groups updates into clear categories and keeps unverified fragments separate as rumors. It is built to reduce reading overhead without flattening uncertainty, for my own use and a small regular audience.
link: https://t.me/+D-7TS_1Jn_AzNDky
stack: Python, Telegram, AI, Docker
ico: icons/war-journal.jpg

### JiveMax

note: piCorePlayer/JiveLite's old UI broke down on a 2K touch screen. Fixing it also meant fixing how it was built and maintained: low-level C/C++/Lua across hardware architectures, a fluid DPI-aware interface, and configuration-driven builds instead of platform-specific patches. GitHub Actions and Docker support the cross-platform build; a six-platform build went from a roughly two-day process to one commit.
link: https://github.com/dukobpa3/jivemax
stack: C, C++, Lua, Embedded

### Markdown to Telegram

note: I wanted to publish from the editor I already used, not format every post by hand in Telegram. The backend converts Markdown and media into native Telegram messages, supports attachments and cross-posting, and writes the published link back into the source note so posts can be edited in place. It turned Ulysses into my channel CMS and became a reusable publishing API for other workflows.
link: https://github.com/dukobpa3/ulysses-tg
stack: Node.js, TypeScript, Telegram, Docker

### Book Pipeline

note: Years of Telegram posts and teaching material had become too large to turn into a book-shaped draft by hand. The pipeline retrieves, organizes and rewrites a multilingual corpus of roughly 3,000 posts plus about 50 chunks of offline material. RAG and specialized agents support the editorial process while preserving the author's voice. It produces a working draft; the author still makes the final structural and editorial decisions.
link: https://github.com/Loot-Wins-Evil/book-pipeline-demo
stack: Python, AI, RAG


## Private

### Kongui

note: A tactical turn-based card game built around prediction and counterplay: reading intent, choosing position, and deciding whether to commit, bait or answer. The focus is asymmetric character abilities and clear tactical decisions rather than randomness.
stack: Go, Svelte, GCP

### Perceptrail

note: A media explorer on top of an existing photo library or folder. A Go enrichment pipeline adds metadata through plugins, including similarity, faces, objects, location and color. Results stream to the client progressively; browser workers handle the stream and grid layout so navigation can stay responsive.
stack: Go, Svelte, Python, AI, Docker

## Prototypes

### LMSense

note: An experiment in personal radio: a few high-level controls influence mood and direction while the system constructs the stream. The idea is tuning a radio wave rather than choosing a fixed genre or playlist.
stack: Go, Python, AI

### Glados

note: An ongoing assistant experiment combining voice, memory, home automation and control of other systems, including Fleet.
stack: Go, Python, AI

### Life OS

note: An exploration of how to structure years of notes, memories and fragments so both I and AI tools can work with them. Obsidian and Markdown provide a portable, inspectable substrate.
stack: Obsidian, Svelte
