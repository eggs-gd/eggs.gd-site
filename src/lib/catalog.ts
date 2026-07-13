export type Project = {
	name: string;
	note?: string;
	link?: string;
	stack: string[];
	ico?: string;
};

export type Category = {
	id: string;
	title: string;
	projects: Project[];
};

export type Catalog = {
	title: string;
	intro: string[];
	categories: Category[];
};

const FIELD = /^(note|link|stack|ico)\s*:\s*(.*)$/i;

function slugify(value: string): string {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

function parseHeadingLink(raw: string): { name: string; link?: string } {
	const match = raw.match(/^\[(.+?)\]\((.+?)\)$/);
	if (match) {
		return { name: match[1], link: match[2] };
	}
	return { name: raw };
}

function parseStack(value: string): string[] {
	return value
		.split(',')
		.map((item) => item.trim())
		.filter(Boolean);
}

function applyField(project: Project, key: string, value: string): void {
	switch (key.toLowerCase()) {
		case 'note':
			project.note = value;
			break;
		case 'link':
			project.link = value;
			break;
		case 'stack':
			project.stack = parseStack(value);
			break;
		case 'ico':
			project.ico = value;
			break;
	}
}

/**
 * Catalog markdown shape:
 * - `# title` — brand / page title
 * - paragraphs until first `##` — intro (blank line starts a new paragraph)
 * - `## Category` — section
 * - `### Project` — entry, then optional fields:
 *   - `note:` description
 *   - `link:` url
 *   - `stack:` comma-separated tags
 *   - `ico:` path under `static/`
 */
export function parseCatalog(markdown: string): Catalog {
	const lines = markdown.replace(/\r\n/g, '\n').split('\n');

	let title = 'eggs.gd';
	const intro: string[] = [];
	const categories: Category[] = [];

	let currentCategory: Category | null = null;
	let currentProject: Project | null = null;
	let introBuffer: string[] = [];
	let pastIntro = false;

	const flushIntro = () => {
		const text = introBuffer.join(' ').trim();
		if (text) intro.push(text);
		introBuffer = [];
	};

	const flushProject = () => {
		if (currentCategory && currentProject) {
			currentCategory.projects.push(currentProject);
		}
		currentProject = null;
	};

	for (const rawLine of lines) {
		const line = rawLine.trim();

		if (!line) {
			if (!pastIntro) flushIntro();
			continue;
		}

		if (line.startsWith('# ')) {
			title = line.slice(2).trim();
			continue;
		}

		if (line.startsWith('## ')) {
			flushProject();
			if (!pastIntro) {
				flushIntro();
				pastIntro = true;
			}
			const categoryTitle = line.slice(3).trim();
			currentCategory = {
				id: slugify(categoryTitle),
				title: categoryTitle,
				projects: []
			};
			categories.push(currentCategory);
			continue;
		}

		if (line.startsWith('### ')) {
			flushProject();
			pastIntro = true;
			const { name, link } = parseHeadingLink(line.slice(4).trim());
			currentProject = { name, link, stack: [] };
			continue;
		}

		if (currentProject) {
			const field = line.match(FIELD);
			if (field) {
				applyField(currentProject, field[1], field[2].trim());
				continue;
			}
		}

		if (!pastIntro && !currentCategory) {
			introBuffer.push(line);
		}
	}

	flushProject();
	if (!pastIntro) flushIntro();

	return { title, intro, categories };
}
