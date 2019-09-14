
    window.Components = {};

  
      import Vue from 'vue/dist/vue.js';

      window.Vue = Vue;


      import Wrapper from '../node_modules/better-docs/lib/vue-wrapper.js';

      window.Wrapper = Wrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import ProgressBar from '../src/components/ProgressBar.vue';
Components['ProgressBar'] = ProgressBar;