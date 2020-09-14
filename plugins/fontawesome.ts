import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCheck, faTimes, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faSearch, faCheck, faTimes, faKey, faUser);

Vue.component('font-awesome-icon', FontAwesomeIcon);
