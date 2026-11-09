(() => {
	'use strict';

	const header = document.getElementById('header');
	const toggle = document.querySelector('.mobile-menu-toggle');
	const scrim = document.querySelector('.site-scrim');
	const navLinks = Array.from(document.querySelectorAll('#nav a'));
	const mobile = window.matchMedia('(max-width: 1024px)');
	let menuOpen = false;

	function setMenu(open, restoreFocus = false) {
		menuOpen = open;
		header.classList.toggle('is-open', open);
		toggle.setAttribute('aria-expanded', String(open));
		toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
		scrim.hidden = !open;
		// Keep the off-screen menu out of the keyboard focus order.
		header.inert = mobile.matches && !open;
		if (restoreFocus) toggle.focus();
	}

	toggle.addEventListener('click', () => setMenu(!menuOpen));
	scrim.addEventListener('click', () => setMenu(false, true));
	header.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			if (!mobile.matches) return;
			setMenu(false);
			const hash = link.getAttribute('href');
			const target = hash.startsWith('#') ? document.querySelector(hash) : null;
			if (target) {
				target.setAttribute('tabindex', '-1');
				target.focus({ preventScroll: true });
			}
		});
	});
	document.addEventListener('keydown', (event) => {
		if (!menuOpen || !mobile.matches) return;
		if (event.key === 'Escape') {
			setMenu(false, true);
			return;
		}
		if (event.key !== 'Tab') return;
		const items = [toggle, ...header.querySelectorAll('a[href]')];
		const first = items[0];
		const last = items[items.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	});
	mobile.addEventListener('change', () => setMenu(false));
	setMenu(false);
	document.documentElement.classList.add('js-enabled');

	let scrollQueued = false;
	const progress = document.querySelector('.scroll-progress span');
	function updateScroll() {
		const doc = document.documentElement;
		const scrollable = doc.scrollHeight - doc.clientHeight;
		progress.style.width = `${scrollable > 0 ? Math.min(100, Math.max(0, doc.scrollTop / scrollable * 100)) : 0}%`;
		scrollQueued = false;
	}
	window.addEventListener('scroll', () => {
		if (scrollQueued) return;
		scrollQueued = true;
		window.requestAnimationFrame(updateScroll);
	}, { passive: true });
	window.addEventListener('resize', updateScroll, { passive: true });
	updateScroll();

	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (!visible) return;
			navLinks.forEach((link) => {
				const active = link.hash === `#${visible.target.id}`;
				link.classList.toggle('active', active);
				if (active) link.setAttribute('aria-current', 'location');
				else link.removeAttribute('aria-current');
			});
		}, { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.15, 0.35] });
		navLinks.forEach((link) => {
			const section = document.querySelector(link.hash);
			if (section) observer.observe(section);
		});
	}

	// Animate only after an element enters the viewport. Static content never
	// depends on animation classes or an observer callback becoming available.
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	if ('IntersectionObserver' in window && 'animate' in document.documentElement && !reducedMotion.matches) {
		const elements = Array.from(document.querySelectorAll(
			'.hero-copy, .stat-card, .summary-panel, .section-heading, .experience-item, ' +
			'.skill-tier, .info-panel, .certification-card, .project-card, .article-card'
		));
		const siblingCounts = new Map();
		const delays = new Map();
		const animations = new Set();
		elements.forEach((element) => {
			const index = siblingCounts.get(element.parentElement) || 0;
			delays.set(element, Math.min(index, 3) * 80);
			siblingCounts.set(element.parentElement, index + 1);
		});
		const revealObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				revealObserver.unobserve(entry.target);
				if (reducedMotion.matches) return;
				const animation = entry.target.animate([
					{ opacity: 0, transform: 'translateY(34px)' },
					{ opacity: 1, transform: 'none' }
				], {
					duration: 850,
					delay: delays.get(entry.target),
					easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
					fill: 'backwards'
				});
				animations.add(animation);
				animation.onfinish = () => animations.delete(animation);
			});
		}, { threshold: 0.08 });
		elements.forEach((element) => revealObserver.observe(element));
		reducedMotion.addEventListener('change', () => {
			if (!reducedMotion.matches) return;
			revealObserver.disconnect();
			animations.forEach((animation) => animation.cancel());
			animations.clear();
		});
	}
})();
