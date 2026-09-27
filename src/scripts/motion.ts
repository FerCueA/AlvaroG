import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/**
 * Smooth scrolling + scroll reveal. Skipped on mobile (performance) and when
 * the user prefers reduced motion.
 */
export function initScrollMotion(): void {
	const prefersReducedMotion = window.matchMedia(REDUCED_MOTION).matches;
	const isMobile = window.matchMedia("(max-width: 767px)").matches;

	if (prefersReducedMotion || isMobile) return;

	const lenis = new Lenis({
		smoothWheel: true,
		lerp: 0.085,
		wheelMultiplier: 0.95,
	});

	const raf = (time: number) => {
		lenis.raf(time);
		requestAnimationFrame(raf);
	};
	requestAnimationFrame(raf);

	lenis.on("scroll", ScrollTrigger.update);

	gsap.utils.toArray<HTMLElement>("[data-gsap='reveal']").forEach((element) => {
		const delay = Number(element.getAttribute("data-reveal-delay") || 0) / 1000;
		gsap.fromTo(
			element,
			{ autoAlpha: 0, y: 48 },
			{
				autoAlpha: 1,
				y: 0,
				delay,
				duration: 1.05,
				ease: "power3.out",
				scrollTrigger: {
					trigger: element,
					start: "top 82%",
					once: true,
				},
			},
		);
	});
}

/**
 * Reveals the meridian marker of each section heading as it enters view.
 * Without motion (reduced motion) the markers are shown immediately.
 */
export function initMeridianReveal(): void {
	const markers = document.querySelectorAll<HTMLElement>("[data-meridian]");
	if (markers.length === 0) return;

	if (window.matchMedia(REDUCED_MOTION).matches) {
		markers.forEach((marker) => marker.classList.add("is-visible"));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			});
		},
		{ rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
	);

	markers.forEach((marker) => observer.observe(marker));
}
