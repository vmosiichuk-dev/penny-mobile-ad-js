import { default as cta } from '@assets/cta.webp';
import { CLASSES } from '@constants/classes.js';

export function createSlideCta(clickTag, slideClass, gsapClass) {
	const slideCtaClass = `${slideClass}--cta`;

	const slideCta = document.createElement('a');
	slideCta.href = clickTag;
	slideCta.classList.add(CLASSES.slideItem, slideCtaClass, gsapClass);

	const ctaImg = document.createElement('img');
	ctaImg.src = cta;
	ctaImg.alt = `${slideClass} call to action`;
	ctaImg.loading = 'lazy';

	slideCta.appendChild(ctaImg);

	return slideCta;
}
