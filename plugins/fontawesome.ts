import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faSearch, faCheck, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);
