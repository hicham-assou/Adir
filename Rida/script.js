// Configuration
const CONFIG = {
	email: 'lamridelrida@gmail.com',
	typewriterTexts: {
		fr: ['Vidéaste & Photographe', 'Créateur de contenu', 'Artiste visuel'],
		en: ['Videographer & Photographer', 'Content Creator', 'Visual Artist']
	}
};

// Helper function to convert Google Drive share link to embed link
function convertDriveLink(url) {
	if (url.includes('drive.google.com')) {
		const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
		if (fileIdMatch) {
			return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
		}
	}
	return url;
}

// Portfolio Data - Updated for client-based structure
const clientProjects = [
	{
		id: 1,
		name: { fr: 'StreetKap', en: 'StreetKap' },
		description: { fr: 'Fast-food américain à Bruxelles spécialisé dans la street food "loaded" : frites chargées, buns briochés et Kapsalons revisités.', en: 'American fast food in Brussels specializing in "loaded" street food: loaded fries, brioche buns, and revisited Kapsalons' },
		thumbnail: 'images/Miniature_StreetKap.png',
		gallery: [
			{ 
				type: 'video-drive', 
				src: 'https://drive.google.com/file/d/1xuZAtXCtc1D5r1Ynfr0p0jtu4tnM4p26/view?usp=sharing',
				alt: 'Vidéo 4.8',
				poster: 'images/Miniature_1+1.png'
			},
			{ 
				type: 'video-drive', 
				src: 'https://drive.google.com/file/d/1xuZAtXCtc1D5r1Ynfr0p0jtu4tnM4p26/view?usp=sharing',
				alt: 'Vidéo like Gta',
				poster: 'images/Miniature_1+1.png'
			},
			{ 
				type: 'video-drive', 
				src: 'https://drive.google.com/file/d/1xuZAtXCtc1D5r1Ynfr0p0jtu4tnM4p26/view?usp=sharing',
				alt: 'Vidéo StreetKap',
				poster: 'images/Miniature_1+1.png'
			}
		]
	},
	{
		id: 2,
		name: { fr: 'Pales', en: 'Pales' },
		description: { fr: 'Pales est une marque belge de boissons gazeuses artisanales et éthiques aux saveurs originales. Une partie des bénéfices est reversée pour soutenir des causes humanitaires.', en: 'Pales is a Belgian brand of ethical, craft soft drinks with original flavors. A portion of the profits is donated to support humanitarian causes.' },
		thumbnail: 'images/PalesMiniature.png',
		gallery: [
			{ type: 'image', src: 'projets/pales/pales-1.jpg', alt: 'Photos Pales' },
			{ type: 'image', src: 'projets/pales/pales-2.jpg', alt: '' },
			{ type: 'image', src: 'projets/pales/pales-3.jpg', alt: '' },
			{ 
				type: 'video-drive', 
				src: 'https://drive.google.com/file/d/folders/1apVEYVW8pW76z7Pp4uDzGgPPuwG14QDC',
				alt: 'AfterMovie',
				poster: 'images/AfterMovieMiniaturePales.png'
			},
			{ 
				type: 'video-drive', 
				src: 'https://drive.google.com/drive/folders/1apVEYVW8pW76z7Pp4uDzGgPPuwG14QDC',
				alt: 'Micro Troittoir',
				poster: 'images/PalesMT.png'
			}
		]
	},
	{
		id: 3,
		name: { fr: 'Molenbeek4Brussels', en: 'Molenbeek4Brussels' },
		description: { fr: 'Une initiative ambitieuse soutenant la candidature de Molenbeek comme Capitale européenne de la Culture en 2030, axée sur la diversité et la créativité urbaine.', en: 'An ambitious initiative supporting Molenbeek bid as European Capital of Culture in 2030, focusing on diversity and urban creativity.' },
		thumbnail: 'images/MiniatureMB.png',
		gallery: [
			{ type: 'video', src: 'projets/Molenbeek4Brussels/RWDM_VS_SERAING.mp4', alt: 'AfterMovie d\'un match de foot', poster: './images/MiniaMBrwdm.png' },
			{ type: 'video', src: 'projets/Molenbeek4Brussels/Vidéo_retour_1_Banquet.mp4', alt: 'Video informative', poster: './images/MiniatureBanquet.png' }
		]
	},
	{
		id: 4,
		name: { fr: 'Noobs Tournament', en: 'Studio Portrait' },
		description: { fr: 'Ceci n\'est pas de l\'e-sport. C\'est le Noobs Tournament : vos créateurs préférés, du gameplay approximatif et une ambiance survoltée. 100% divertissement, 0% tryhard.', en: 'This is not esports. It\'s the Noobs Tournament: your favorite creators, questionable gameplay, and electric vibes. 100% entertainment, 0% tryhard.' },
		thumbnail: 'images/MiniatureNTsmash.png',
		gallery: [
			{ type: 'image', src: 'projets/Noobs_Tournament/NoobsSmash (1).jpg', alt: 'Photos du noobs' },
			{ type: 'image', src: 'projets/Noobs_Tournament/NoobsSmash (2).jpg', alt: 'Photos du noobs' },
			{ type: 'image', src: 'projets/Noobs_Tournament/NoobsSmash (3).jpg', alt: 'Photos du noobs' },
			{ type: 'image', src: 'projets/Noobs_Tournament/NoobsSmash (4).jpg', alt: 'Photos du noobs' },
			{ type: 'image', src: 'projets/Noobs_Tournament/NoobsSmash (5).jpg', alt: 'Photos du noobs' },
			{ type: 'image', src: 'projets/Noobs_Tournament/NoobsSmash (6).jpg', alt: 'Photos du noobs' }
		]
	},
	{
		id: 5,
		name: { fr: 'L\'Agora', en: 'L\'Agora' },
		description: { fr: 'La voix du football de rue bruxellois. De l\'asphalte des agoras aux talents de demain, nous célébrons la culture foot authentique de la capitale.', en: 'The voice of Brussels street football. From the asphalt of the agoras to tomorrow\'s talents, we celebrate the capital\'s authentic football culture.' },
		thumbnail: 'images/AgoraMinia.png',
		gallery: [
			{ type: 'video', src: 'projets/LAgora/CityVsRéal.mp4', alt: 'Vidéo du match City Vs Réal', poster: './images/miniareal.png' },
			{ type: 'video', src: 'projets/LAgora/Version Fini Agora X Sorare Vlog.mp4', alt: 'première journée de pro league', poster: './images/MiniaMatch.png' }
		]
	},
	{
		id: 6,
		name: { fr: 'SummerBreak', en: 'SummerBreak' },
		description: { fr: 'Le clap de fin officiel de tes vacances. Musique, vibes estivales et good times pour clôturer la saison en beauté.', en: 'The official closing act of your holidays. Music, summer vibes, and good times to end the season with a bang.' },
		thumbnail: 'images/SummerBreak.png',
		gallery: [
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (1).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (2).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (3).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (4).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (5).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (6).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (7).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (8).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (9).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (10).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (11).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (12).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (13).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (14).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (15).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (16).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (17).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (18).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (19).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (20).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (21).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (22).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (23).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (24).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (25).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (26).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (27).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (28).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (29).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (30).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (31).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (32).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (33).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (34).jpg', alt: 'Photos du SummerBreak' },
			{ type: 'image', src: 'projets/SummerBreakYume/Summer (35).jpg', alt: 'Photos du SummerBreak' }
		]
	},
	{
		id: 7,
		name: { fr: 'Yume Squad', en: 'Yume Squad' },
		description: { fr: 'Le collectif bruxellois de créateurs de contenu le plus déjanté, connu pour ses concepts sur TikTok (Petit Bac, Imposteur) et ses événements réunissant la scène belge', en: 'The craziest Brussels-based content creator collective, known for their TikTok concepts and events bringing the Belgian scene together.' },
		thumbnail: 'images/YumeSquadMinia.png',
		gallery: [
			{ type: 'video', src: 'projets/YumeSquad/TierList meilleurs arabes.mp4', alt: 'vidéo divertissement', poster: './images/TierListMinia.png' }
		]
	},
	{
		id: 8,
		name: { fr: 'Moto', en: 'Motor' },
		description: { fr: 'Des photos prises par passion de moto', en: 'Photos taken out of a passion for motorcycles.' },
		thumbnail: 'projets/AfricaTwin/AfricaTwin (1).jpg',
		gallery: [
			{ type: 'image', src: 'projets/AfricaTwin/AfricaTwin (1).jpg', alt: 'Moto' },
			{ type: 'image', src: 'projets/AfricaTwin/AfricaTwin (2).jpg', alt: 'Moto' },
			{ type: 'image', src: 'projets/AfricaTwin/AfricaTwin (3).jpg', alt: 'Moto' },
			{ type: 'image', src: 'projets/AfricaTwin/AfricaTwin (4).jpg', alt: 'Moto' },
			{ type: 'image', src: 'projets/AfricaTwin/AfricaTwin (5).jpg', alt: 'Moto' },
			{ type: 'image', src: 'projets/AfricaTwin/AfricaTwin (6).jpg', alt: 'Moto' },
			{ type: 'image', src: 'projets/AfricaTwin/AfricaTwin (7).jpg', alt: 'Moto' },
		]
	}
];

// Create flat gallery array for lightbox
let allGalleryItems = [];
let galleryItemsMap = new Map();

function buildGalleryIndex() {
	allGalleryItems = [];
	let index = 0;
	clientProjects.forEach(project => {
		project.gallery.forEach(item => {
			allGalleryItems.push(item);
			galleryItemsMap.set(item.src, index);
			index++;
		});
	});
}

// State
let currentLang = 'fr';
let lightboxIndex = 0;

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
	buildGalleryIndex();
	initPreloader();
	initParticles();
	initNavigation();
	initTypewriter();
	initScrollAnimations();
	initPortfolioClients();
	initProjectModal();
	initMagneticButtons();
	initParallax();
	initLanguageToggle();
});

// Preloader
function initPreloader() {
	setTimeout(() => {
		document.getElementById('preloader').classList.add('hidden');
		document.body.style.overflow = 'auto';
	}, 2000);
}

// Particles System
function initParticles() {
	const canvas = document.getElementById('particles-canvas');
	const ctx = canvas.getContext('2d');
	let particles = [];
	
	function resize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	resize();
	window.addEventListener('resize', resize);

	class Particle {
		constructor() {
			this.reset();
		}
		reset() {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.size = Math.random() * 2 + 0.5;
			this.speedX = (Math.random() - 0.5) * 0.5;
			this.speedY = (Math.random() - 0.5) * 0.5;
			this.opacity = Math.random() * 0.5 + 0.2;
		}
		update() {
			this.x += this.speedX;
			this.y += this.speedY;
			if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
				this.reset();
			}
		}
		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
			ctx.fill();
		}
	}

	for (let i = 0; i < 80; i++) {
		particles.push(new Particle());
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		particles.forEach(p => {
			p.update();
			p.draw();
		});
		particles.forEach((a, i) => {
			particles.slice(i + 1).forEach(b => {
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < 120) {
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - dist / 120)})`;
					ctx.stroke();
				}
			});
		});
		requestAnimationFrame(animate);
	}
	animate();
}

// Navigation
function initNavigation() {
	const nav = document.getElementById('nav');
	const hamburger = document.getElementById('hamburger');
	const mobileMenu = document.getElementById('mobileMenu');
	const navLinks = document.querySelectorAll('.nav-link');
	const sections = document.querySelectorAll('section');
	const scrollProgress = document.getElementById('scrollProgress');

	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY;
		nav.classList.toggle('scrolled', scrollY > 50);

		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const progress = (scrollY / docHeight) * 100;
		scrollProgress.style.width = progress + '%';

		let current = '';
		sections.forEach(section => {
			const sectionTop = section.offsetTop - 200;
			if (scrollY >= sectionTop) current = section.getAttribute('id');
		});
		navLinks.forEach(link => {
			link.classList.remove('active');
			if (link.getAttribute('href') === '#' + current) link.classList.add('active');
		});
	});

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
	});

	mobileMenu.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			hamburger.classList.remove('active');
			mobileMenu.classList.remove('active');
		});
	});
}

// Typewriter Effect
function initTypewriter() {
	const element = document.getElementById('typewriter');
	const texts = CONFIG.typewriterTexts[currentLang];
	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;

	function type() {
		const currentText = texts[textIndex];
		if (isDeleting) {
			element.textContent = currentText.substring(0, charIndex - 1);
			charIndex--;
		} else {
			element.textContent = currentText.substring(0, charIndex + 1);
			charIndex++;
		}

		let typeSpeed = isDeleting ? 50 : 100;
		if (!isDeleting && charIndex === currentText.length) {
			typeSpeed = 2000;
			isDeleting = true;
		} else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			textIndex = (textIndex + 1) % texts.length;
			typeSpeed = 500;
		}
		setTimeout(type, typeSpeed);
	}
	type();
}

// Scroll Animations
function initScrollAnimations() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				
				if (entry.target.classList.contains('skill')) {
					const bar = entry.target.querySelector('.skill-progress');
					if (bar) bar.style.width = bar.dataset.width + '%';
				}

				if (entry.target.classList.contains('stat')) {
					const num = entry.target.querySelector('.stat-number');
					if (num) animateCounter(num, parseInt(num.dataset.count));
				}
			}
		});
	}, { threshold: 0.2 });

	document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .skill, .stat').forEach(el => observer.observe(el));
}

function animateCounter(element, target) {
	let current = 0;
	const increment = target / 50;
	const timer = setInterval(() => {
		current += increment;
		if (current >= target) {
			element.textContent = target + '+';
			clearInterval(timer);
		} else {
			element.textContent = Math.floor(current);
		}
	}, 30);
}

// Portfolio Client Cards
function initPortfolioClients() {
	const clientsContainer = document.getElementById('portfolioClients');
	clientsContainer.innerHTML = clientProjects.map((project, index) => `
		<article class="portfolio-client-card reveal" style="--i: ${index}" data-index="${index}">
			<div class="portfolio-client-card-header">
				<img src="${project.thumbnail}" alt="${project.name[currentLang]}" loading="lazy">
				<div class="portfolio-client-card-overlay">
					<h3 class="portfolio-client-title">${project.name[currentLang]}</h3>
					<span class="portfolio-client-subtitle">${project.description[currentLang].substring(0, 50)}...</span>
				</div>
			</div>
		</article>
	`).join('');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) entry.target.classList.add('visible');
		});
	}, { threshold: 0.1 });
	
	clientsContainer.querySelectorAll('.portfolio-client-card').forEach((el, index) => {
		observer.observe(el);
		el.addEventListener('click', () => openProjectModal(index));
	});
}

// Project Modal
function initProjectModal() {
	// Modal initialized
}

function openProjectModal(index) {
	const modal = document.getElementById('projectModal');
	const project = clientProjects[index];
	currentProjectIndex = index; // Store current project
	currentProjectGallery = project.gallery; // Store current project gallery
	
	document.getElementById('projectModalTitle').textContent = project.name[currentLang];
	document.getElementById('projectModalDescription').textContent = project.description[currentLang];
	
	const galleryHtml = project.gallery.map((item, itemIndex) => {
		if (item.type === 'video-drive') {
			// Vidéo Google Drive - afficher avec miniature personnalisée
			const posterImage = item.poster || project.thumbnail;
			return `
				<div class="project-gallery-item" onclick="openLightbox(${itemIndex})">
					<img src="${posterImage}" alt="${item.alt || project.name[currentLang]}" loading="lazy">
					<div class="video-play-overlay">
						<svg width="60" height="60" viewBox="0 0 24 24" fill="white" style="opacity: 0.9; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">
							<path d="M8 5v14l11-7z"/>
						</svg>
					</div>
				</div>
			`;
		} else if (item.type === 'video') {
			// Vidéo locale
			const posterImage = item.poster || 'images/video_poster.jpg';
			return `
				<div class="project-gallery-item" onclick="openLightbox(${itemIndex})">
					<video src="${item.src}" poster="${posterImage}" preload="metadata">
						Votre navigateur ne supporte pas la balise vidéo.
					</video>
					<div class="video-play-overlay">
						<svg width="60" height="60" viewBox="0 0 24 24" fill="white" style="opacity: 0.9; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">
							<path d="M8 5v14l11-7z"/>
						</svg>
					</div>
				</div>
			`;
		} else {
			return `
				<div class="project-gallery-item" onclick="openLightbox(${itemIndex})">
					<img src="${item.src}" alt="${item.alt || project.name[currentLang]}" loading="lazy">
				</div>
			`;
		}
	}).join('');
	
	document.getElementById('projectModalGallery').innerHTML = galleryHtml;
	
	modal.classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
	document.getElementById('projectModal').classList.remove('active');
	document.body.style.overflow = 'auto';
}

// Lightbox
function openLightbox(index) {
	lightboxIndex = index;
	updateLightbox();
	updateLightboxButtons(); // Mettre à jour les boutons
	document.getElementById('lightbox').classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeLightbox() {
	document.getElementById('lightbox').classList.remove('active');
	document.body.style.overflow = 'auto';
	
	// Nettoyer toutes les vidéos
	const video = document.getElementById('lightboxVideo');
	if (video) video.pause();
	
	// Nettoyer l'iframe si présent
	const iframe = document.querySelector('#lightbox iframe');
	if (iframe) iframe.src = '';
}

function navigateLightbox(dir) {
	lightboxIndex = lightboxIndex + dir;
	
	// Limiter la navigation au projet actuel
	if (lightboxIndex < 0) {
		lightboxIndex = 0; // Ne pas aller avant le premier item
	} else if (lightboxIndex >= currentProjectGallery.length) {
		lightboxIndex = currentProjectGallery.length - 1; // Ne pas aller après le dernier item
	}
	
	updateLightbox();
	updateLightboxButtons();
}

function updateLightboxButtons() {
	const prevBtn = document.querySelector('.lightbox-prev');
	const nextBtn = document.querySelector('.lightbox-next');
	
	// Cacher le bouton précédent si on est au début
	if (lightboxIndex === 0) {
		prevBtn.style.opacity = '0.3';
		prevBtn.style.cursor = 'not-allowed';
	} else {
		prevBtn.style.opacity = '1';
		prevBtn.style.cursor = 'pointer';
	}
	
	// Cacher le bouton suivant si on est à la fin
	if (lightboxIndex === currentProjectGallery.length - 1) {
		nextBtn.style.opacity = '0.3';
		nextBtn.style.cursor = 'not-allowed';
	} else {
		nextBtn.style.opacity = '1';
		nextBtn.style.cursor = 'pointer';
	}
}

function updateLightbox() {
	const item = currentProjectGallery[lightboxIndex]; // Utiliser la galerie du projet actuel
	const img = document.getElementById('lightboxImg');
	const video = document.getElementById('lightboxVideo');
	
	if (item.type === 'video-drive') {
		// Vidéo Google Drive - utiliser iframe
		img.style.display = 'none';
		video.style.display = 'none';
		
		// Vérifier s'il y a déjà un iframe, sinon le créer
		let iframe = document.querySelector('#lightbox iframe');
		if (!iframe) {
			iframe = document.createElement('iframe');
			iframe.style.width = '100%';
			iframe.style.height = '80vh';
			iframe.style.border = 'none';
			iframe.style.borderRadius = '8px';
			iframe.setAttribute('allowfullscreen', 'true');
			iframe.setAttribute('allow', 'autoplay');
			document.querySelector('.lightbox-content').appendChild(iframe);
		}
		iframe.style.display = 'block';
		iframe.src = convertDriveLink(item.src);
	} else if (item.type === 'video') {
		// Vidéo locale
		const iframe = document.querySelector('#lightbox iframe');
		if (iframe) iframe.style.display = 'none';
		
		img.style.display = 'none';
		video.style.display = 'block';
		video.src = item.src;
		video.play().catch(e => console.log("Autoplay prevented: ", e));
	} else {
		// Image
		const iframe = document.querySelector('#lightbox iframe');
		if (iframe) iframe.style.display = 'none';
		
		video.style.display = 'none';
		video.pause();
		img.style.display = 'block';
		img.src = item.src;
		img.alt = item.alt || 'Image';
	}
}
// Keyboard navigation
document.addEventListener('keydown', (e) => {
	if (!document.getElementById('lightbox').classList.contains('active')) return;
	if (e.key === 'Escape') closeLightbox();
	if (e.key === 'ArrowLeft') navigateLightbox(-1);
	if (e.key === 'ArrowRight') navigateLightbox(1);
});

// Magnetic Buttons
function initMagneticButtons() {
	document.querySelectorAll('.magnetic').forEach(btn => {
		btn.addEventListener('mousemove', (e) => {
			const rect = btn.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
		});
		btn.addEventListener('mouseleave', () => {
			btn.style.transform = 'translate(0, 0)';
		});
	});
}

// Parallax
function initParallax() {
	const heroBg = document.getElementById('heroBg');
	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY;
		if (heroBg && scrollY < window.innerHeight) {
			heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`;
		}
	});
}

// Language Toggle
function initLanguageToggle() {
	document.getElementById('langToggle').addEventListener('click', () => {
		currentLang = currentLang === 'fr' ? 'en' : 'fr';
		updateLanguage();
	});
}

function updateLanguage() {
	document.querySelectorAll('[data-fr][data-en]').forEach(el => {
		const text = el.dataset[currentLang];
		if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
			el.placeholder = text;
		} else if (el.innerHTML.includes('<span>')) {
			el.innerHTML = text;
		} else {
			el.textContent = text;
		}
	});
	
	document.querySelectorAll('.portfolio-client-card').forEach((card, index) => {
		const project = clientProjects[index];
		card.querySelector('.portfolio-client-title').textContent = project.name[currentLang];
		card.querySelector('.portfolio-client-subtitle').textContent = project.description[currentLang].substring(0, 50) + '...';
	});

	document.documentElement.lang = currentLang;
	
	const typewriter = document.getElementById('typewriter');
	typewriter.textContent = '';
	initTypewriter();
}

// Copy Email
function copyEmail() {
	const email = CONFIG.email;
	navigator.clipboard.writeText(email).then(() => {
		const tooltip = document.getElementById('copyTooltip');
		tooltip.classList.add('show');
		setTimeout(() => tooltip.classList.remove('show'), 2000);
	});
}

document.querySelector('.email-copy')?.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') copyEmail();
});