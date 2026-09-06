# earwiG Games

Independent software.

Every project starts with a problem in my own workflow.
If existing tools solve it well, I use them. If they don't, I build my own.

The goal isn't to ship demos or collect technologies. It's to create tools I genuinely enjoy using every day.

Some projects are finished. Some are still evolving. All of them are part of my daily life.

## Public

### I Ching: Shape of Momentum
note: I built this because most digital I Ching tools felt trapped in old interfaces: too many panels, awkward animations and interpretations that were either too abstract to use or too oracle-like to trust. The app keeps the useful parts I was already doing with coins and a notebook: a clean casting flow, readable hexagram texts, personal notes and a curated interpretation layer. It is a reflection tool for exploring variations of the current situation, not a fortune-telling machine.
link: https://iching.eggs.gd
stack: svelte, typescript, capacitor, ios, android, pwa
ico: icons/iching-favicon.svg

### Attention Journal
note: This started as a casual digital version of a CBT-style paper exercise I used to return myself to reality. A single -7 event can color an entire day while dozens of small +1 and +3 moments disappear unnoticed; the reverse is just as dangerous when one high point sends the day off the rails. Attention Journal captures events, emotions and context so the whole shape of a day becomes visible instead of letting one loud moment define it.
link: https://journal.eggs.gd
stack: svelte, typescript, capacitor, ios, android, pwa
ico: icons/diary-icon.png

### The War Journal
note: I built this because following the war through hundreds of Telegram channels became exhausting: the same news reposted by different sources, important updates mixed with noise, and rumors traveling faster than context. The pipeline reads across sources, groups updates into clear categories and keeps unverified fragments separate as rumors. Telegram is the right surface because it is where the reading already happens, for me and for a small regular audience.
link: https://t.me/+D-7TS_1Jn_AzNDky
stack: python, telegram, ai, docker
ico: icons/war-journal.jpg

### Book Pipeline
note: This grew from a very specific problem: turning three years of Telegram posts and teaching material into something book-shaped without spending months manually sorting fragments. I provide an outline and a corpus of small documents; the pipeline retrieves, groups and rewrites the material across several stages until it becomes a draft for one book or several. The value is not just search, but moving from scattered notes to a structured artifact.
link: https://github.com/Loot-Wins-Evil/book-pipeline-demo
stack: python, ai, rag

### JiveMax
note: I started JiveMax after trying to run piCorePlayer/JiveLite on modern hardware with a 2K touch screen and watching the old UI fall apart. Fixing the interface led naturally into fixing the build: Docker, GitHub Actions and automated cross-platform builds made the project easier to work on, not just nicer to look at. The result is a fluid, DPI-aware modernization that preserves the spirit of the original while making it usable on current devices.
link: https://github.com/dukobpa3/jivemax
stack: c, c++, lua, embedded

### Markdown to Telegram
note: This began because running several Telegram channels without a real CMS was annoying, while my Markdown writing tools already had the clean editing experience I wanted. Instead of building another heavy publishing UI, I moved the CMS layer into the workflow I already used: write Markdown, send it to a small server, publish native Telegram messages. It has since become a reusable backend for formatting, media, attachments and cross-posting across my channels and automation workflows.
link: https://github.com/dukobpa3/ulysses-tg
stack: node.js, typescript, telegram, docker

### Career Space
note: Career Space came from my own job search becoming too wide for ordinary resume tools: several possible roles, different levels of seniority, too much advice from courses and chats, and no stable way to decide how I should position myself. I was already using AI conversations for the work, so the project turns that messy process into a local agent-first workspace. It handles onboarding from an existing resume, fit checks, tailored CVs and cover letters, profile updates, job-board discovery and a hiring pipeline, with personal data kept local and gitignored.
link: https://github.com/eggs-gd/career-space
stack: typescript, ai, mcp


## Private

### Nest AI
note: Nest AI started from wanting to assign real project tasks while away from the desk, even from a bench with coffee, without juggling different agent interfaces and chat conventions. It became a shared backlog and execution layer for my projects: one Kanban-style surface where tasks can be shaped by me and then picked up by bots without waiting for my next message. The goal is a small AI development studio with consistent task management, memory and orchestration around the work.
stack: go, svelte, ai

### Kongui
note: Kongui is a tactical turn-based card game built around prediction and counterplay. The appeal is the moment before an action resolves: reading intent, positioning around it and choosing whether to commit, bait or answer. The design focuses on asymmetric character abilities and clear tactical decisions rather than hiding the game behind randomness.
stack: go, svelte

### Perceptrail
note: Perceptrail explores a different way to move through existing photo libraries such as Immich. It is not another storage manager and it does not start from folders, albums or a navigation tree; it starts from similarity. Each plugin defines its own kind of similarity - faces, places, objects, colors, model embeddings or deterministic rules - so browsing becomes a chain of visual associations rather than a search form.
stack: go, svelte, python, ai, docker


## Prototypes

### LMSense
note: LMSense is an experiment in AI-shaped radio where I do not pick a genre or a fixed playlist directly. Instead, a few high-level controls steer the mood and behavior of the station while the system forms the stream around them. The goal is a listening experience that feels guided and alive, closer to tuning a personal radio wave than choosing a static recommendation category.
stack: go, python, ai

### Life OS
note: Life OS is an attempt to systematize years of notes, project ideas, concepts, memories and unfinished fragments into a form that both I and my AI assistants can understand. Obsidian is the base because plain Markdown stays readable, portable and easy to manage. A web interface may come later, but the real product is the structured personal knowledge store, not the UI on top of it.
stack: obsidian, svelte

### Glados
note: Glados is the personal assistant layer above the rest of my systems. Life OS stores the material of my life, Nest AI runs development work, and Glados is the voice-aware presence that should understand both: projects, memories, tasks, context, shopping lists, political conversations, whatever is relevant in the moment. The goal is not just another chatbot, but a local assistant that can talk, remember, retrieve and operate the tools around me.
stack: go, python, ai