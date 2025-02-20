import { CLASSES } from '@constants/classes.js';

export function createSlideImg(imgData, slideClass, gsapClass) {
	const isSlideIn = slideClass === CLASSES.slideIn;

	const slideImg = document.createElement('img');
	slideImg.classList.add(CLASSES.slideItem, imgData.id, gsapClass);
	slideImg.src = imgData.src;
	slideImg.alt = imgData.alt;

	if (isSlideIn) slideImg.loading = 'lazy';

	return slideImg;
}
