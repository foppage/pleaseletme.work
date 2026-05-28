<script lang="ts">
	import emailSvg from '$lib/assets/email.svg';
	import githubSvg from '$lib/assets/github.svg';
	import phoneSvg from '$lib/assets/phone.svg';
	import linkSvg from '$lib/assets/link.svg';
</script>

<div class="layout">
	<header class="top-header">
		<div class="name-row">
			<h1>June </h1>
			<div class="contact">
				<a href="mailto:june@pleaseletme.work" class="contact-item">
					<img src={emailSvg} alt="" width="18" height="18" />
					june@pleaseletme.work
				</a>
				<a href="https://github.com/foppage" class="contact-item">
					<img src={githubSvg} alt="" width="18" height="18" />
					@foppage
				</a>
				<a href="tel:+447835722998" class="contact-item">
					<img src={phoneSvg} alt="" width="18" height="18" />
					+44 7835 722998
				</a>
			</div>
		</div>
		<p class="summary">
			I am a recent graduate from Cardiff University, having achieved a Distinction in MSc in
			Advanced Computer Science. I have a passion for software development, DevOps and cyber
			security, and would like to develop my career in these fields.
		</p>
	</header>

	<div class="columns">
		<aside class="sidebar">
			<section>
				<h2>Education</h2>

				<h3>MSc Advanced Computer Science (Distinction)</h3>
				<p class="meta">Cardiff University &mdash; September 2024 &ndash; October 2025</p>
				<p class="sub">
					Dissertation on data engineering and machine learning using TypeScript, Python and
					TensorFlow. (73%)
				</p>

				<p class="label">Modules studied:</p>
				<ul class="modules">
					<li>Distributed and Cloud Computing</li>
					<li>Penetration Testing and Malware Analysis</li>
					<li>Cyber Security and Risk Management</li>
					<li>Developing Secure Systems and Applications</li>
					<li>Applications of Machine Learning</li>
					<li>Programming Paradigms</li>
				</ul>

				<h3>BSc Computer Science</h3>
				<p class="meta">University of Birmingham &mdash; September 2020 &ndash; July 2023</p>

				<h3>A-Levels</h3>
				<p class="meta"></p>
				<p>Maths (A*), Further Maths (A), Physics (A), Computing (A)</p>

				<h3>GCSEs</h3>
				<p class="meta"></p>
				<p>11 GCSEs at grades 6-9 inc. Maths (9), CS (9), Music (9)</p>
			</section>

			<section>
				<h2>Additional information</h2>
				<ul class="add-info">
					<li>Holder of a full UK driving licence</li>
					<li>Grade 6 Guitar</li>
					<li>Grade 5 Music Theory</li>
					<li>Grade 4 Drums</li>
					<li>Grade 3 Piano</li>
				</ul>
			</section>
		</aside>

		<main class="content">
			<section>
				<h2>Experience</h2>

				<div class="exp-card">
					<h3>Research Assistant, Cardiff University</h3>
					<p class="meta">January 2025 &ndash; March 2025</p>
					<ul>
						<li>Attended weekly meetings</li>
						<li>Researched common adversarial attacks</li>
						<li>Implemented demonstrative tools in Python with Tkinter</li>
						<li>Wrote a supporting 5-page technical document</li>
					</ul>
				</div>
			</section>

			<section>
				<h2>Projects</h2>

				<div class="project-grid">
					<div class="project-card">
						<h3>
							<a href="https://lightningarena.com" target="_blank" rel="noreferrer">
								Lightning Arena <img
									src={linkSvg}
									alt=""
									width="12"
									height="12"
									class="inline-link"
								/>
							</a>
						</h3>
						<p class="meta">May 2024 &ndash; Current</p>
						<ul>
							<li>
								Led a small team to create and run online events with 800+ unique participants
							</li>
							<li>Designed bespoke matchmaking algorithms</li>
							<li>Monorepo with GitHub Actions CI/CD and Terraform hosting</li>
						</ul>
					</div>

					<div class="project-card">
						<h3>
							<a href="https://github.com/foppage/goto" target="_blank" rel="noreferrer">
								Goto <img src={linkSvg} alt="" width="14" height="14" class="inline-link" />
							</a>
						</h3>
						<ul>
							<li>Go HTTP server with Gin, SQLite database and SQL migrations</li>
							<li>SPA frontend with Vite + React, multi-stage Docker build</li>
							<li>CI/CD pipeline building and deploying with Docker Compose</li>
						</ul>
					</div>

					<div class="project-card">
						<h3>
							<a href="https://github.com/foppage/services" target="_blank" rel="noreferrer">
								Homelab <img src={linkSvg} alt="" width="14" height="14" class="inline-link" />
							</a>
						</h3>
						<ul>
							<li>Home server running Proxmox for multiple users</li>
							<li>Terraform for infrastructure, Docker services via Cloudflare</li>
							<li>CI/CD pipeline to apply Terraform config on closed PRs</li>
						</ul>
					</div>

					<div class="project-card">
						<h3>
							<a href="https://github.com/foppage/macro" target="_blank" rel="noreferrer">
								Macro <img src={linkSvg} alt="" width="14" height="14" class="inline-link" />
							</a>
						</h3>
						<ul>
							<li>Frequent client interaction to ensure delivery</li>
							<li>WebSockets to interface with external software</li>
							<li>Reactive frontend with TypeScript and Svelte</li>
						</ul>
					</div>

					<div class="project-card full-width">
						<h3>Private 6 Mans</h3>
						<p class="meta">December 2018 &ndash; August 2022</p>
						<ul>
							<li>Discord bot using Discord.js with queueing, matchmaking and score algorithms</li>
							<li>Express.js website showing live data, backed by MySQL</li>
							<li>Used in 3,500+ communities after handover</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	</div>
</div>

<style>
	.layout {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.top-header {
		padding: 24px 32px 16px;
		border-bottom: 1px solid #333;
		flex-shrink: 0;
	}

	.name-row {
		display: flex;
		align-items: baseline;
		gap: 24px;
		flex-wrap: wrap;
		margin-bottom: 6px;
	}

	h1 {
		color: #f472b6;
		font-size: 36px;
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	.contact {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}

	.contact-item {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 15px;
	}

	.contact-item img {
		filter: brightness(0) saturate(100%) invert(65%) sepia(18%) saturate(2878%) hue-rotate(291deg)
			brightness(99%) contrast(97%);
	}

	.summary {
		font-size: 15px;
		line-height: 1.5;
		color: #b0b0b0;
		max-width: 700px;
	}

	.columns {
		display: flex;
		flex: 1;
		min-height: 0;
	}

	.sidebar {
		width: 340px;
		min-width: 340px;
		padding: 20px 24px;
		background: #1e1e1e;
		overflow-y: auto;
	}

	.content {
		flex: 1;
		padding: 20px 28px;
		overflow-y: auto;
	}

	section {
		margin-bottom: 24px;
	}

	section:last-child {
		margin-bottom: 0;
	}

	h2 {
		color: #f472b6;
		font-size: 17px;
		font-weight: 600;
		margin-bottom: 12px;
		border-bottom: 1.5px solid #f472b6;
		padding-bottom: 5px;
	}

	.content h2 {
		font-size: 18px;
	}

	h3 {
		color: #d4d4d4;
		font-size: 16px;
		font-weight: 600;
		margin-top: 12px;
		margin-bottom: 3px;
		line-height: 1.3;
	}

	h3:first-child {
		margin-top: 0;
	}

	.meta {
		font-size: 14px;
		color: #888;
		margin-bottom: 5px;
	}

	.sub {
		font-size: 15px;
		color: #b0b0b0;
		margin-bottom: 5px;
	}

	p {
		font-size: 15px;
		line-height: 1.5;
		margin-bottom: 8px;
	}

	.label {
		font-size: 15px;
		margin-top: 6px;
		margin-bottom: 3px;
		color: #d4d4d4;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		font-size: 15px;
		line-height: 1.55;
		padding-left: 14px;
		position: relative;
		color: #b0b0b0;
	}

	li::before {
		content: '-';
		position: absolute;
		left: 3px;
		color: #666;
	}

	.modules {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 12px;
		margin-bottom: 4px;
	}

	.modules li {
		font-size: 14px;
		line-height: 1.6;
	}

	.add-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 10px;
	}

	.add-info li {
		font-size: 15px;
	}

	.exp-card {
		background: #252525;
		border-radius: 6px;
		padding: 14px;
	}

	.exp-card ul {
		margin-top: 3px;
	}

	.exp-card li {
		font-size: 15px;
	}

	.project-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}

	.project-card {
		background: #252525;
		border-radius: 6px;
		padding: 12px 14px;
	}

	.project-card.full-width {
		grid-column: 1 / -1;
	}

	.project-card h3 {
		margin-top: 0;
	}

	.project-card ul {
		margin-top: 3px;
	}

	.project-card li {
		font-size: 14px;
		line-height: 1.5;
		padding-left: 12px;
	}

	.project-card li::before {
		left: 2px;
	}

	.inline-link {
		vertical-align: middle;
		filter: brightness(0) saturate(100%) invert(65%) sepia(18%) saturate(2878%) hue-rotate(291deg)
			brightness(99%) contrast(97%);
	}

	h3 a {
		color: #d4d4d4;
		text-decoration: none;
	}

	h3 a:hover {
		color: #f472b6;
		text-decoration: underline;
	}
</style>
