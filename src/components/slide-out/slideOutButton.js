import { slideOutArrow } from '@assets/slide-out';
import { CLASSES } from '@constants/classes.js';

export function createSlideOutButton(onClick, slideClass, gsapClass) {
	const slideArrowClass = `${slideClass}--arrow`;

	const slideButton = document.createElement('button');
	slideButton.addEventListener('click', onClick);
	slideButton.classList.add(CLASSES.slideItem, slideArrowClass, gsapClass);

	const slideButtonImg = document.createElement('img');
	slideButtonImg.src = slideOutArrow;
	slideButtonImg.alt = 'Slide change arrow button';
	slideButtonImg.loading = 'lazy';

	slideButton.appendChild(slideButtonImg);

	return slideButton;
}
