import { createSlideCta, createSlideImg } from '@components';
import { slideInImages } from './slideIn.constants.js';
import { CLASSES, GSAP_CLASSES } from '@constants/classes.js';
import './slideIn.styles.css';

export function createSlideIn(clickTag) {
	const slideClass = CLASSES.slideIn;
	const gsapClass = GSAP_CLASSES.slideIn;

	const slideIn = document.createElement('div');
	slideIn.classList.add(CLASSES.slide, slideClass);

	slideInImages.forEach((imgData) => {
		const slideImg = createSlideImg(imgData, slideClass, gsapClass);
		slideIn.appendChild(slideImg);
	});

	const slideCta = createSlideCta(clickTag, slideClass, gsapClass);
	slideIn.appendChild(slideCta);

	return slideIn;
}
