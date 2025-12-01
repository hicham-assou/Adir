// Configuration
const CONFIG = {
	email: 'lamridelrida@gmail.com',
	typewriterTexts: {
		fr: ['Vidéaste & Photographe', 'Créateur de contenu', 'Artiste visuel'],
		en: ['Videographer & Photographer', 'Content Creator', 'Visual Artist']
	}
};

// Portfolio Data - Updated for client-based structure
const clientProjects = [
	{
		id: 1,
		name: { fr: 'Projet Luxuria', en: 'Luxuria Project' },
		description: { fr: 'Campagne publicitaire pour la marque de luxe Luxuria, axée sur l\'élégance et l\'exclusivité.', en: 'Advertising campaign for the luxury brand Luxuria, focused on elegance and exclusivity.' },
		thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
		gallery: [
			{ type: 'image', src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80', alt: 'Luxuria product shot 1' },
			{ type: 'image', src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80', alt: 'Luxuria campaign visual 1' },
			{ type: 'video', src: 'videos/video_test.mp4', alt: 'Video test', poster: './images/Photo_de_profil_sisi_first.jpg' }
		]
	},
	{
		id: 2,
		name: { fr: 'Mariage Céleste', en: 'Celestial Wedding' },
		description: { fr: 'Immortalisation d\'un mariage féerique dans un cadre enchanteur, capturant chaque émotion.', en: 'Immortalization of a magical wedding in an enchanting setting, capturing every emotion.' },
		thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
		gallery: [
			{ type: 'image', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80', alt: 'Wedding ceremony' },
			{ type: 'image', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80', alt: 'Couple portrait' },
			{ type: 'image', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80', alt: 'Wedding details' }
		]
	},
	{
		id: 3,
		name: { fr: 'Voyage Aventure', en: 'Adventure Travel' },
		description: { fr: 'Reportage photo et vidéo d\'une expédition à travers des paysages sauvages et préservés.', en: 'Photo and video reportage of an expedition through wild and preserved landscapes.' },
		thumbnail: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
		gallery: [
			{ type: 'image', src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80', alt: 'Mountain landscape' },
			{ type: 'image', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80', alt: 'Forest scene' },
			{ type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Travel montage' }
		]
	},
	{
		id: 4,
		name: { fr: 'Portrait Studio', en: 'Studio Portrait' },
		description: { fr: 'Séances photo en studio mettant en valeur des portraits artistiques et professionnels.', en: 'Studio photo sessions highlighting artistic and professional portraits.' },
		thumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
		gallery: [
			{ type: 'image', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80', alt: 'Studio portrait 1' },
			{ type: 'image', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80', alt: 'Studio portrait 2' },
			{ type: 'image', src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80', alt: 'Abstract portrait' }
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
	document.getElementById('projectModalTitle').textContent = project.name[currentLang];
	document.getElementById('projectModalDescription').textContent = project.description[currentLang];
	
	const galleryHtml = project.gallery.map((item) => {
		const globalIndex = galleryItemsMap.get(item.src);
		if (item.type === 'video') {
			// Utilise le poster personnalisé si défini, sinon utilise le thumbnail du projet
			const posterImage = item.poster || 'images/video_poster.jpg';
			return `
				<div class="project-gallery-item" onclick="openLightbox(${globalIndex})">
					<video src="${item.src}" poster="${posterImage}" preload="metadata" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
						Votre navigateur ne supporte pas la balise vidéo.
					</video>
					<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;">
						<svg width="60" height="60" viewBox="0 0 24 24" fill="white" style="opacity: 0.9; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">
							<path d="M8 5v14l11-7z"/>
						</svg>
					</div>
				</div>
			`;
		} else {
			return `
				<div class="project-gallery-item" onclick="openLightbox(${globalIndex})">
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
	document.getElementById('lightbox').classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeLightbox() {
	document.getElementById('lightbox').classList.remove('active');
	document.body.style.overflow = 'auto';
	const video = document.getElementById('lightboxVideo');
	if (video) video.pause();
}

function navigateLightbox(dir) {
	lightboxIndex = (lightboxIndex + dir + allGalleryItems.length) % allGalleryItems.length;
	updateLightbox();
}

function updateLightbox() {
	const item = allGalleryItems[lightboxIndex];
	const img = document.getElementById('lightboxImg');
	const video = document.getElementById('lightboxVideo');
	
	if (item.type === 'video') {
		img.style.display = 'none';
		video.style.display = 'block';
		video.src = item.src;
		video.play().catch(e => console.log("Autoplay prevented: ", e));
	} else {
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