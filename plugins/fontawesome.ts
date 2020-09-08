import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);
