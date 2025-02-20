import { createSlideOut, createSlideIn } from '@components';
import { handleSlideChange } from './handleSlideChange.js';
import { CLICK_TAG_FALLBACK, SEARCH_PARAM_KEY } from '@constants/clicktag.js';
import { CLASSES } from '@constants/classes.js';

document.addEventListener('DOMContentLoaded', () => {
	const urlParams = new URLSearchParams(window.location.search);
	const clickTag = urlParams.get(SEARCH_PARAM_KEY) || CLICK_TAG_FALLBACK;

	const slider = document.querySelector(`.${CLASSES.slider}`);

	const slideIn = createSlideIn(clickTag);
	slideIn.style.display = 'none';

	const slideOut = createSlideOut(clickTag, () => {
		handleSlideChange(slideIn, slideOut);
	});

	slider.appendChild(slideOut);
});
