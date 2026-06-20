const { createApp } = Vue;

createApp({
	data() {
		return {
			activeSection: 'about',
			menuOpen: false,
			scrollProgress: 0,
			navItems: [
				{ id: 'about', label: 'About' },
				{ id: 'experience', label: 'Experience' },
				{ id: 'skills', label: 'Skills' },
				{ id: 'education', label: 'Education' },
				{ id: 'certifications', label: 'Certifications' },
				{ id: 'project', label: 'Projects' }
			],
			socialLinks: [
				{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/said-rasidin/', icon: 'icon brands fa-linkedin', external: true },
				{ label: 'GitHub', href: 'https://www.github.com/said-rasidin/', icon: 'icon brands fa-github', external: true },
				{ label: 'Medium', href: 'https://said-rasidin.medium.com/', icon: 'icon brands fa-medium', external: true },
				{ label: 'CV', href: 'Rasid_CV_2026.pdf', icon: 'icon solid fa-file-pdf', external: true },
				{ label: 'Email', href: 'mailto:said-rasidin@pm.me', icon: 'icon solid fa-envelope', external: false }
			],
			stats: [
				{ value: '5+', label: 'Years in data and ML roles' },
				{ value: 'AI agents', label: 'NL2SQL and chat-with-data delivery' },
				{ value: '95% -> 20%', label: 'Recommendation CPU reduction' },
				{ value: '2h -> 15m', label: 'NLP pipeline speed-up' }
			],
			experience: [
				{
					title: 'Senior Machine Learning Engineer',
					company: 'TenEleven.ai',
					companyUrl: 'https://www.teneleven.ai/',
					logo: 'images/logos/teneleven.png',
					logoAlt: 'TenEleven.ai logo',
					year: '2025',
					range: '2025 -',
					period: 'July 2025 - Present',
					location: 'Jakarta, Indonesia',
					points: [
						'Architected and delivered production-grade AI solutions for conversational AI, agentic systems, and data-driven applications.',
						'Owned design, implementation, testing, and evaluation of an internal business analytics agent using NL2SQL and chat-with-data workflows.',
						'Designed conversational AI platforms with tool calling, API orchestration, state management, automated workflows, and evaluation loops.',
						'Explored OpenClaw and Hermes PoCs as agentic solution workflows, alongside Agentic RAG, autonomous task-oriented agents, and multi-step reasoning pipelines.'
					]
				},
				{
					title: 'Data Scientist',
					company: 'Tribun Network - KG Media',
					companyUrl: 'https://www.tribunnews.com/',
					logo: 'images/logos/tribunnews.png',
					logoAlt: 'Tribunnews.com logo',
					year: '2024',
					range: '2024 - 2025',
					period: 'August 2024 - June 2025',
					location: 'Jakarta, Indonesia',
					points: [
						'Developed personalized advertorial boosting strategies to increase page views and optimize content delivery.',
						'Researched and implemented hierarchical text classification with PyTorch for news content categorization.',
						'Leveraged LLMs for data conditioning and labeling, improving data quality and reducing manual effort.',
						'Built recommendation and search capabilities, including tags/articles recommendation and internal image search.',
						'Optimized recommendation delivery by integrating Qdrant and caching, reducing CPU usage from 95% to 20%.',
						'Streamlined the entity extraction pipeline using BERT, reducing daily processing time from 2 hours to 15 minutes.'
					]
				},
				{
					title: 'Data Scientist',
					company: 'Praktis.co',
					companyUrl: 'https://www.praktis.co',
					logo: 'images/logos/praktis.png',
					logoAlt: 'Praktis.co logo',
					year: '2022',
					range: '2022 - 2024',
					period: 'October 2022 - July 2024',
					location: 'Jakarta, Indonesia',
					points: [
						'Built forecasting models with Vertex AI AutoML for rapid ML system development.',
						'Implemented text similarity search using embeddings and cosine similarity to align product categories across marketplaces.',
						'Collaborated with academic experts to formulate production scheduling optimization models using Pyomo and Lingo.',
						'Developed Min-Max inventory monitoring logic and visualized it in Metabase to improve inventory management.',
						'Pioneered advanced demand forecasting models in Python orchestrated by Airflow for batch inference.'
					]
				},
				{
					title: 'Data Analyst',
					company: 'Praktis.co',
					companyUrl: 'https://www.praktis.co',
					logo: 'images/logos/praktis.png',
					logoAlt: 'Praktis.co logo',
					year: '2021',
					range: '2021 - 2022',
					period: 'November 2021 - October 2022',
					location: 'Jakarta, Indonesia',
					points: [
						'Developed SKU-level forecasting models for demand prediction across thousands of products.',
						'Cleaned and migrated reporting dashboard data into a data warehouse to reduce response times.',
						'Conducted ad-hoc analyses for business decision support.'
					]
				},
				{
					title: 'Data Science Trainee',
					company: 'Jakarta Smart City',
					companyUrl: 'https://smartcity.jakarta.go.id/',
					logoText: 'JSC',
					year: '2021',
					range: '2021',
					period: 'August 2021 - October 2021',
					location: 'Remote',
					points: [
						'Researched few-shot learning methods to categorize CRM report images and improve flexibility for new classes.',
						'Deployed a prototype model for web app and prediction API serving.',
						'Contributed insights on practical big-data implementation across public service sectors.'
					]
				},
				{
					title: 'Thesis Project (Research Intern)',
					company: 'PPPGL',
					companyUrl: 'https://mgi.esdm.go.id/',
					logo: 'images/logos/badan-geologi.png',
					logoAlt: 'Badan Geologi logo',
					year: '2019',
					range: '2019',
					period: 'August 2019 - October 2019',
					location: 'Bandung, Indonesia',
					points: [
						'Conducted seismic data pre-processing, processing, and imaging for marine geology research.',
						'Applied multiple attenuation methods including SRME and Radon Transform for clearer seismic imaging.',
						'Performed geological structure interpretation beneath the Seram Sea area.'
					]
				}
			],
			skills: [
				{ title: 'Programming', icon: 'icon solid fa-code', items: 'Python, SQL, Git, software engineering fundamentals' },
				{ title: 'ML and AI', icon: 'icon solid fa-microchip', items: 'Machine learning, deep learning, PyTorch, LLM workflows' },
				{ title: 'Data Platforms', icon: 'icon solid fa-cogs', items: 'Airflow, BigQuery, Metabase, Microsoft Fabric' },
				{ title: 'Backend', icon: 'icon solid fa-server', items: 'FastAPI, Docker, API orchestration, batch inference' },
				{ title: 'Cloud', icon: 'icon solid fa-cloud', items: 'Azure AI, GCP Vertex AI, Cloud Run, AWS EC2, S3, Athena' },
				{ title: 'Optimization', icon: 'icon solid fa-project-diagram', items: 'Pyomo, Lingo, scheduling, inventory logic, forecasting' },
				{ title: 'Product Delivery', icon: 'icon solid fa-chart-line', items: 'Automation, analytics, stakeholder communication, measurable impact' },
				{ title: 'Languages', icon: 'icon solid fa-language', items: 'Indonesian, English (C1 Advanced)' }
			],
			certifications: [
				{
					name: 'Google Professional Machine Learning Engineer',
					period: 'Sep 2024 - Sep 2026',
					url: 'https://www.credly.com/badges/a7b42d22-eff8-41ab-bac9-a8720667dbcd/linked_in_profile',
					logo: 'images/logos/google-cloud.svg',
					logoAlt: 'Google Cloud logo'
				},
				{
					name: 'Azure AI Engineer Associate',
					period: 'Sep 2025 - Oct 2026',
					url: 'https://learn.microsoft.com/en-us/users/saidrasidin-7624/credentials/9f0ce9afb7607975?ref=https%3A%2F%2Fwww.linkedin.com%2F',
					logo: 'images/logos/azure.svg',
					logoAlt: 'Microsoft Azure logo'
				},
				{
					name: 'Databricks Certified Generative AI Engineer Associate',
					period: 'Apr 2026 - Apr 2028',
					url: 'https://credentials.databricks.com/9b357875-3e14-41ca-9607-dd5caefb434b',
					logo: 'images/logos/databricks.svg',
					logoAlt: 'Databricks logo'
				}
			],
			projects: [
				{
					title: 'Few-Shot Image Classification With JAKI Report Images',
					category: 'Computer Vision',
					image: 'images/few-shot-jsc.png',
					alt: 'Few-shot image classification project preview',
					url: 'https://medium.com/jakartasmartcity/few-shot-image-classification-with-jaki-report-images-68128813f003',
					description: 'Built a few-shot image classification approach for JAKI report images to reduce manual categorization and provide category recommendations.'
				},
				{
					title: 'Random Forest and ANN Model with Oversampling Data',
					category: 'Classification',
					image: 'images/RF-ANN.png',
					alt: 'Random Forest and ANN project preview',
					url: 'https://medium.com/analytics-vidhya/random-forest-and-ann-model-with-oversampling-data-b7adde23e55f',
					description: 'Compared Random Forest and ANN models on imbalanced data using SMOTE to evaluate oversampling effects on classification performance.'
				},
				{
					title: 'Drone Aerial View Segmentation',
					category: 'Segmentation',
					image: 'images/drone_project.png',
					alt: 'Drone aerial segmentation project preview',
					url: 'https://medium.com/@saidr567/drone-aerial-view-segmentation-44046ff003b5',
					description: 'Explored high-resolution aerial image segmentation for drone imagery and transfer learning limitations in bird-eye-view data.'
				},
				{
					title: 'Semantic Segmentation in Seismic Images',
					category: 'Geoscience AI',
					image: 'images/seismic_project.png',
					alt: 'Semantic segmentation in seismic images preview',
					url: 'https://medium.com/analytics-vidhya/semantic-segmentation-in-seismic-images-70cde2175f01',
					description: 'Applied U-Net with ResNet backbones to delineate salt bodies in seismic images and support subsurface interpretation.'
				},
				{
					title: 'Mineral Image Classification',
					category: 'Deep Learning',
					image: 'images/mineral_project.png',
					alt: 'Mineral image classification project preview',
					url: 'https://medium.com/@saidr567/mineral-klasifikasi-menggunakan-deep-learning-373cea77694b',
					description: 'Trained a deep learning model to classify seven mineral classes and evaluated robustness across varied samples.'
				},
				{
					title: 'COVID-19 Early Detection from X-Ray Images',
					category: 'Healthcare AI',
					image: 'images/covid19_project.png',
					alt: 'COVID-19 X-ray detection project preview',
					url: 'https://medium.com/jovianml/covid-19-early-detection-from-x-ray-images-aided-by-ai-e4642d514323',
					description: 'Built an AI-assisted X-ray classification workflow for faster COVID-19 screening in high-volume testing scenarios.'
				},
				{
					title: 'Sentiment Analysis COVID-19',
					category: 'NLP',
					image: 'images/sentiment_project.png',
					alt: 'Sentiment analysis project preview',
					url: 'https://github.com/said-rasidin/ML_Project/tree/master/Sentiment%20Analysis%20Covid-19',
					description: 'Built a sentiment classification pipeline for COVID-19 tweets to analyze public opinion trends from social media data.'
				},
				{
					title: 'Text Extraction and Summarization',
					category: 'NLP',
					image: 'images/text_sum_project.png',
					alt: 'Text extraction and summarization project preview',
					url: 'https://github.com/said-rasidin/ML_Project/tree/master/Text%20Extraction',
					description: 'Developed a PDF text extraction and summarization tool using TF-IDF scoring to surface important sentences quickly.'
				},
				{
					title: 'Seram Sea Marine Seismic Study',
					category: 'Publication',
					image: 'images/jurnal_ta_project.png',
					alt: 'Marine seismic study publication preview',
					url: 'https://ejournal.mgi.esdm.go.id/index.php/bomg/article/view/622',
					description: 'Published a marine seismic study combining multiple attenuation methods to improve seismic interpretation quality.'
				}
			]
		};
	},
	mounted() {
		const sections = this.navItems
			.map((item) => document.getElementById(item.id))
			.filter(Boolean);

		const observer = new IntersectionObserver((entries) => {
			const visible = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

			if (visible) {
				this.activeSection = visible.target.id;
			}
		}, {
			rootMargin: '-22% 0px -55% 0px',
			threshold: [0.15, 0.35, 0.6]
		});

		sections.forEach((section) => observer.observe(section));

		this.setupScrollProgress();
		this.setupReveal();
	},
	methods: {
		closeMenu() {
			this.menuOpen = false;
		},
		setupScrollProgress() {
			const update = () => {
				const doc = document.documentElement;
				const scrollable = doc.scrollHeight - doc.clientHeight;
				this.scrollProgress = scrollable > 0
					? Math.min(100, Math.max(0, (doc.scrollTop / scrollable) * 100))
					: 0;
			};

			update();
			window.addEventListener('scroll', () => {
				window.requestAnimationFrame(update);
			}, { passive: true });
			window.addEventListener('resize', update, { passive: true });
		},
		setupReveal() {
			const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			const elements = Array.from(document.querySelectorAll('.reveal'));

			if (reduceMotion || !('IntersectionObserver' in window)) {
				elements.forEach((el) => el.classList.add('is-visible'));
				return;
			}

			// Stagger each element relative to its siblings for a cascading entrance.
			elements.forEach((el) => {
				const siblings = Array.from(el.parentElement.children)
					.filter((child) => child.classList.contains('reveal'));
				el.style.setProperty('--reveal-index', siblings.indexOf(el));
			});

			const revealObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
					} else {
						entry.target.classList.remove('is-visible');
					}
				});
			}, {
				threshold: 0.14,
				rootMargin: '0px 0px -10% 0px'
			});

			elements.forEach((el) => revealObserver.observe(el));
		}
	}
}).mount('#portfolio-app');
