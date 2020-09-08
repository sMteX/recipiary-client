import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faSearch, faCheck);

Vue.component('font-awesome-icon', FontAwesomeIcon);
