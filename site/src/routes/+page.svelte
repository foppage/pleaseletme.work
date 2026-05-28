<script lang="ts">
	import emailSvg from '$lib/assets/email.svg';
	import githubSvg from '$lib/assets/github.svg';
	import phoneSvg from '$lib/assets/phone.svg';
	import linkSvg from '$lib/assets/link.svg';
</script>

<div class="cv">
	<header>
		<h1>June </h1>

		<div class="contact">
			<a href="mailto:june@pleaseletme.work" class="contact-item">
				<img src={emailSvg} alt="email" width="20" height="20" />
				june@pleaseletme.work
			</a>
			<a href="https://github.com/foppage" class="contact-item">
				<img src={githubSvg} alt="github" width="20" height="20" />
				@foppage
			</a>
			<a href="tel:+447835722998" class="contact-item">
				<img src={phoneSvg} alt="phone" width="20" height="20" />
				+44 7835 722998
			</a>
		</div>

		<p class="summary">
			I am a recent graduate from Cardiff University, having achieved a Distinction in MSc in
			Advanced Computer Science. I have a passion for software development, DevOps and cyber
			security, and would like to develop my career in these fields.
		</p>
	</header>

	<div class="columns">
		<div class="left">
			<div class="card">
				<section>
					<h2>Education</h2>

					<h3>MSc Advanced Computer Science (Distinction)</h3>
					<p class="meta">Cardiff University &mdash; September 2024 &ndash; October 2025</p>
					<p class="sub">School of Computer Science and Informatics</p>
					<p>
						Dissertation on data engineering and machine learning using TypeScript, Python and
						TensorFlow. (73%)
					</p>

					<p class="modules-label">Modules studied:</p>
					<ul class="modules">
						<li>Distributed and Cloud Computing (85%)</li>
						<li>Penetration Testing and Malware Analysis (84%)</li>
						<li>Cyber Security and Risk Management (71%)</li>
						<li>Developing Secure Systems and Applications (75%)</li>
						<li>Applications of Machine Learning (67%)</li>
						<li>Programming Paradigms (61%)</li>
					</ul>

					<h3>BSc Computer Science</h3>
					<p class="meta">University of Birmingham &mdash; September 2020 &ndash; July 2023</p>
					<p class="sub">School of Computer Science</p>

					<h3>A-Levels</h3>
					<p class="meta"> &mdash; September 2018 &ndash; May 2020</p>
					<p>Maths (A*), Further Maths (A), Physics (A), Computing (A)</p>

					<h3>GCSEs</h3>
					<p class="meta"> &mdash; September 2013 &ndash; August 2018</p>
					<p>
						Maths (9), Music (9), Computer Science (9), Physics (9), English Literature (8),
						Chemistry (8), Biology (8), Religious Studies (7), English Language (6), BTEC Creative
						Digital Media (Distinction*), IGCSE Further Maths (A*)
					</p>
				</section>

				<section>
					<h2>Technical Skills</h2>

					<div class="skill-columns">
						<ul>
							<li>JavaScript, TypeScript</li>
							<li>Node.js</li>
							<li>Git</li>
							<li>REST APIs (Express.js, FastAPI)</li>
							<li>Relational databases (MySQL, PostgreSQL)</li>
							<li>Frontend frameworks (React, Svelte, Solid)</li>
							<li>Docker, Docker Compose</li>
							<li>Infrastructure as Code (Terraform)</li>
							<li>GitLab CI/CD, GitHub Actions</li>
						</ul>
						<ul>
							<li>Python</li>
							<li>Django</li>
							<li>SQLAlchemy</li>
							<li>Pydantic</li>
							<li>NumPy</li>
							<li>Pandas</li>
							<li>NLTK</li>
							<li>Scikit-Learn</li>
							<li>TensorFlow (Keras)</li>
							<li>Matplotlib</li>
							<li>Go</li>
							<li>Linux system administration</li>
						</ul>
					</div>
				</section>

				<section>
					<h2>Additional information</h2>
					<div class="skill-columns">
						<ul>
							<li>Holder of a full UK driving licence</li>
							<li>Grade 6 Guitar</li>
						</ul>
						<ul>
							<li>Grade 5 Music Theory</li>
							<li>Grade 4 Drums</li>
							<li>Grade 3 Piano</li>
						</ul>
					</div>
				</section>
			</div>
		</div>

		<div class="right">
			<section>
				<h2>Experience</h2>

				<h3>Research Assistant, Cardiff University</h3>
				<p class="meta">January 2025 &ndash; March 2025</p>
				<ul>
					<li>Attended weekly meetings</li>
					<li>Researched common adversarial attacks</li>
					<li>Implemented demonstrative tools in Python with Tkinter</li>
					<li>Wrote a supporting 5-page technical document</li>
				</ul>
			</section>

			<section>
				<h2>Projects</h2>

				<h3>
					<a href="https://lightningarena.com" target="_blank" rel="noreferrer">
						Lightning Arena <img src={linkSvg} alt="" width="14" height="14" class="inline-link" />
					</a>
				</h3>
				<p class="meta">May 2024 &ndash; Current</p>
				<ul>
					<li>Led a small team to create and run online events with 800+ unique participants</li>
					<li>Designed bespoke algorithms for the purposes of matchmaking participants</li>
					<li>Migrated from multi-repo to monorepo structure</li>
					<li>
						Created complex GitHub Actions CI/CD pipelines to automatically build multi-platform
						Docker images
					</li>
					<li>Hosted project using Terraform</li>
				</ul>

				<h3>
					<a href="https://github.com/foppage/goto" target="_blank" rel="noreferrer">
						Goto <img src={linkSvg} alt="" width="14" height="14" class="inline-link" />
					</a>
				</h3>
				<ul>
					<li>Go HTTP server backend using the Gin web framework</li>
					<li>SQLite database, migrations and queries written in SQL</li>
					<li>Built SPA frontend built using Vite + React</li>
					<li>Created a Dockerfile with a multi-stage build process</li>
					<li>Implemented CI/CD pipeline to build and deploy application using Docker Compose</li>
				</ul>

				<h3>
					<a href="https://github.com/foppage/services" target="_blank" rel="noreferrer">
						Homelab <img src={linkSvg} alt="" width="14" height="14" class="inline-link" />
					</a>
				</h3>
				<ul>
					<li>Provisioned home server running Proxmox for multiple users</li>
					<li>
						Used Infrastructure as Code tooling (Terraform) to declaratively define infrastructure
						configuration
					</li>
					<li>Installed services using Docker containers, served through Cloudflare Tunnels</li>
					<li>Developed CI/CD pipeline to apply Terraform configuration on closed pull requests</li>
					<li>Configured VPS running Ubuntu Server to host various services</li>
				</ul>

				<h3>
					<a href="https://github.com/foppage/macro" target="_blank" rel="noreferrer">
						Macro <img src={linkSvg} alt="" width="14" height="14" class="inline-link" />
					</a>
				</h3>
				<ul>
					<li>Frequent interaction with client to ensure delivery of application</li>
					<li>Used WebSockets to interact with external software</li>
					<li>Designed reactive frontend with TypeScript and Svelte</li>
				</ul>

				<h3>Private 6 Mans</h3>
				<p class="meta">December 2018 &ndash; August 2022</p>
				<ul>
					<li>Used JavaScript libraries such as Discord.js to interact with the Discord API</li>
					<li>Listened to user feedback to develop new features</li>
					<li>
						Designed algorithms to handle queueing, team and match creation, and score reporting
					</li>
					<li>Used and handled MySQL database to store player data</li>
					<li>Developed website using Express.js to show live data to users</li>
					<li>
						Used in over 2000+ communities before handover, currently used in 3500+ communities
					</li>
				</ul>
			</section>
		</div>
	</div>
</div>

<style>
	.cv {
		max-width: 1100px;
		margin: 0 auto;
		padding: 48px 32px;
	}

	header {
		margin-bottom: 40px;
	}

	h1 {
		color: #f472b6;
		font-size: 40px;
		font-weight: 700;
		margin-bottom: 12px;
		letter-spacing: -0.03em;
	}

	.contact {
		display: flex;
		gap: 28px;
		flex-wrap: wrap;
		margin-bottom: 16px;
	}

	.contact-item {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 14px;
	}

	.contact-item img {
		filter: brightness(0) saturate(100%) invert(65%) sepia(18%) saturate(2878%) hue-rotate(291deg)
			brightness(99%) contrast(97%);
	}

	.summary {
		font-size: 15px;
		line-height: 1.6;
		color: #b0b0b0;
		max-width: 800px;
	}

	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
	}

	.left {
		align-self: start;
	}

	.card {
		background: #252525;
		border-radius: 8px;
		padding: 24px;
	}

	section {
		margin-bottom: 32px;
	}

	section:last-child {
		margin-bottom: 0;
	}

	h2 {
		color: #f472b6;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 14px;
		border-bottom: 2px solid #f472b6;
		padding-bottom: 6px;
	}

	h3 {
		color: #d4d4d4;
		font-size: 16px;
		font-weight: 600;
		margin-top: 20px;
		margin-bottom: 4px;
	}

	.meta {
		font-size: 13px;
		color: #888;
		margin-bottom: 6px;
	}

	.sub {
		font-size: 14px;
		color: #b0b0b0;
		margin-bottom: 6px;
	}

	p {
		font-size: 14px;
		line-height: 1.6;
		margin-bottom: 10px;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		font-size: 14px;
		line-height: 1.65;
		padding-left: 16px;
		position: relative;
		color: #b0b0b0;
	}

	li::before {
		content: '-';
		position: absolute;
		left: 4px;
		color: #666;
	}

	.modules-label {
		font-size: 14px;
		margin-top: 8px;
		margin-bottom: 4px;
		color: #d4d4d4;
	}

	.modules {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 16px;
	}

	.skill-columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 16px;
	}

	.skill-columns li {
		font-size: 13px;
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

	@media (max-width: 800px) {
		.columns {
			grid-template-columns: 1fr;
		}
	}
</style>
