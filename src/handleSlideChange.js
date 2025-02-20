import { gsap } from 'gsap';
import { GSAP_OPTIONS } from '@constants/gsap.js';
import { CLASSES, GSAP_CLASSES } from '@constants/classes.js';

export function handleSlideChange(slideIn, slideOut) {
	const slideOutSelector = `.${GSAP_CLASSES.slideOut}`;
	const slideInSelector = `.${GSAP_CLASSES.slideIn}`;

	const slider = document.querySelector(`.${CLASSES.slider}`);

	function handleSlideIn() {
		slider.appendChild(slideIn);

		const slideInFromOptions = GSAP_OPTIONS.getSlideInFrom(
			window.innerWidth
		);

		slideIn.style.display = 'grid';

		gsap.fromTo(
			slideInSelector,
			slideInFromOptions,
			GSAP_OPTIONS.slideInTo
		);
	}

	function handleSlideOut() {
		const slideOutOptions = GSAP_OPTIONS.getSlideOut(window.innerWidth);

		gsap.to(slideOutSelector, {
			...slideOutOptions,
			onStart: () => {
				gsap.to(slideOutSelector, GSAP_OPTIONS.opacity);
				handleSlideIn();
			},
			onComplete: () => {
				slider.removeChild(slideOut);
			},
		});
	}

	handleSlideOut();
}
