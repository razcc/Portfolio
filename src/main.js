import Vue from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollanimation'
import ScrollAnimation2 from './directives/scroll2'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars, faAnglesDown, faChevronLeft, faChevronRight, faX, faEnvelope, faArrowLeft,} from '@fortawesome/free-solid-svg-icons'

// Brands
import { faHtml5 as html, faCss3Alt as css, faBootstrap as bootstrap, faJs as js, faVuejs as vue, faPhp as php, faLaravel as laravel,faGit as faGit, faGithub as gitHubBrand, faLinkedinIn as linkedinBrand, faCodepen as codePenBrand, faInstagram as InstagramBrand } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faGit,faUserSecret, faChevronLeft,faArrowLeft, faChevronRight, faBars, faAnglesDown, gitHubBrand, linkedinBrand, codePenBrand, InstagramBrand, html, css, bootstrap, js, vue, php, laravel, faX,faEnvelope)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.directive('scrollanimation', ScrollAnimation);
Vue.directive('scroll2',ScrollAnimation2)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

