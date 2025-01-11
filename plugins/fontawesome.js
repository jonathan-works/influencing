import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faPlay, faShareNodes, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faPlay, faHeart, faComment, faShareNodes, faArrowLeft, faArrowRight);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
