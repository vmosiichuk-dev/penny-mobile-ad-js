import { createSlideCta, createSlideImg } from '@components';
import { createSlideOutButton } from './slideOutButton.js';
import { slideOutImages } from './slideOut.constants.js';
import { CLASSES, GSAP_CLASSES } from '@constants/classes.js';
import './slideOut.styles.css';

export function createSlideOut(clickTag, onClick) {
	const slideClass = CLASSES.slideOut;
	const gsapClass = GSAP_CLASSES.slideOut;

	const slideOut = document.createElement('div');
	slideOut.classList.add(CLASSES.slide, slideClass);

	slideOutImages.forEach((imgData) => {
		const slideImg = createSlideImg(imgData, slideClass, gsapClass);
		slideOut.appendChild(slideImg);
	});

	const slideOutButton = createSlideOutButton(onClick, slideClass, gsapClass);
	slideOut.appendChild(slideOutButton);

	const slideCta = createSlideCta(clickTag, slideClass, gsapClass);
	slideOut.appendChild(slideCta);

	return slideOut;
}
