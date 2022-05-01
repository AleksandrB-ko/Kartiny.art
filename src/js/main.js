import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import russianLangInputs from "./modules/russianLangInputs";
import showHiddenStyles from "./modules/showHiddenStyles";
import showServerCards from "./modules/showServerCards";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    russianLangInputs('[name="name"]');
    russianLangInputs('[name="message"]');
    showHiddenStyles('.button-styles', '.styles-2');
    showServerCards('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
});