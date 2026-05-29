export interface Tech {
	slug: string;
	label: string;
}

export interface Project {
	name: string;
	url?: string;
	icon?: 'link' | 'github';
	date?: string;
	bullets: string[];
	tech: Tech[];
	fullWidth?: boolean;
}

export const cv = {
	name: 'June',
	contact: [
		{
			icon: 'email' as const,
			label: 'june@pleaseletme.work',
			href: 'mailto:june@pleaseletme.work'
		},
		{ icon: 'github' as const, label: '@foppage', href: 'https://github.com/foppage' }
	],
	summary: `I am a recent graduate from Cardiff University, having achieved a Distinction in MSc in Advanced Computer Science. I have a passion for software development, infrastructure and cyber security, and would like to develop my career in these fields.`,
	education: [
		{
			kind: 'degree' as const,
			title: 'MSc Advanced Computer Science (Distinction)',
			school: 'Cardiff University',
			date: 'September 2024 \u2013 October 2025',
			description:
				'Dissertation on data engineering and machine learning using TypeScript, Python and TensorFlow. (73%)',
			modules: [
				'Distributed and Cloud Computing (85%)',
				'Penetration Testing and Malware Analysis (84%)',
				'Cyber Security and Risk Management (71%)',
				'Developing Secure Systems and Applications (75%)',
				'Applications of Machine Learning (67%)',
				'Programming Paradigms (61%)'
			]
		},
		{
			kind: 'degree' as const,
			title: 'BSc Computer Science',
			school: 'University of Birmingham',
			date: 'September 2020 \u2013 July 2023'
		},
		{
			kind: 'list' as const,
			title: 'A-Levels',
			items: ['Maths (A*)', 'Further Maths (A)', 'Physics (A)', 'Computing (A)']
		},
		{
			kind: 'text' as const,
			title: 'GCSEs',
			text: '11 GCSEs incl. Maths (9), Music (9), Computer Science (9), Physics (9), English Literature (8), English Language (6)'
		}
	],
	additional: [
		'Holder of a full UK driving licence',
		'Grade 6 Guitar',
		'Grade 5 Music Theory',
		'Grade 4 Drums',
		'Grade 3 Piano'
	],
	experience: {
		title: 'Research Assistant (Cyber Security)',
		company: 'Cardiff University',
		date: 'January 2025 \u2013 March 2025',
		bullets: [
			'Attended weekly meetings',
			'Researched common adversarial attacks',
			'Implemented demonstrative tools in Python with Tkinter',
			'Wrote a supporting 5-page technical document'
		]
	},
	projects: [
		{
			name: 'Lightning Arena',
			url: 'https://lightningarena.com',
			icon: 'link' as const,
			date: 'May 2024 \u2013 Current',
			bullets: [
				'Led a small team to create and run online events with 800+ unique participants',
				'Designed bespoke algorithms for the purposes of matchmaking participants',
				'Migrated from multi-repo to monorepo structure',
				'Created complex GitHub Actions CI/CD pipelines to automatically build multi-platform Docker images',
				'Hosted project using Terraform'
			],
			tech: [
				{ slug: 'typescript', label: 'TypeScript' },
				{ slug: 'docker', label: 'Docker' },
				{ slug: 'terraform', label: 'Terraform' },
				{ slug: 'githubactions', label: 'GitHub Actions' }
			]
		},
		{
			name: 'Goto',
			url: 'https://github.com/foppage/goto',
			icon: 'github' as const,
			bullets: [
				'Go HTTP server backend using the Gin web framework',
				'SQLite database, migrations and queries written in SQL',
				'Built SPA frontend built using Vite + React',
				'Created a Dockerfile with a multi-stage build process',
				'Implemented CI/CD pipeline to build and deploy application using Docker Compose'
			],
			tech: [
				{ slug: 'typescript', label: 'TypeScript' },
				{ slug: 'go', label: 'Go' },
				{ slug: 'sqlite', label: 'SQLite' },
				{ slug: 'react', label: 'React' },
				{ slug: 'docker', label: 'Docker' },
				{ slug: 'githubactions', label: 'GitHub Actions' }
			]
		},
		{
			name: 'Homelab',
			url: 'https://github.com/foppage/services',
			icon: 'github' as const,
			bullets: [
				'Provisioned home server running Proxmox for multiple users',
				'Used Infrastructure as Code tooling (Terraform) to declaratively define infrastructure configuration',
				'Installed services using Docker containers, served through Cloudflare Tunnels',
				'Developed CI/CD pipeline to apply Terraform configuration on closed pull requests',
				'Configured VPS running Ubuntu Server to host various services'
			],
			tech: [
				{ slug: 'proxmox', label: 'Proxmox' },
				{ slug: 'terraform', label: 'Terraform' },
				{ slug: 'docker', label: 'Docker' },
				{ slug: 'cloudflare', label: 'Cloudflare' },
				{ slug: 'githubactions', label: 'GitHub Actions' }
			]
		},
		{
			name: 'Macro',
			url: 'https://github.com/foppage/macro',
			icon: 'github' as const,
			bullets: [
				'Frequent interaction with client to ensure delivery of application',
				'Used WebSockets to interact with external software',
				'Designed reactive frontend with TypeScript and Svelte'
			],
			tech: [
				{ slug: 'typescript', label: 'TypeScript' },
				{ slug: 'svelte', label: 'Svelte' }
			]
		},
		{
			name: 'Private 6 Mans',
			date: 'December 2018 \u2013 August 2022',
			fullWidth: true,
			bullets: [
				'Used JavaScript libraries such as Discord.js to interact with the Discord API',
				'Listened to user feedback to develop new features',
				'Designed algorithms to handle queueing, team and match creation, and score reporting',
				'Used and handled MySQL database to store player data',
				'Developed website using Express.js to show live data to users',
				'Used in over 2000+ communities before handover, currently used in 4500+ communities'
			],
			tech: [
				{ slug: 'javascript', label: 'JavaScript' },
				{ slug: 'mysql', label: 'MySQL' },
				{ slug: 'express', label: 'Express' }
			]
		}
	]
};
