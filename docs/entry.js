
    window.reactComponents = {};

    window.vueComponents = {};

  
      import Vue from 'vue/dist/vue.js';

      window.Vue = Vue;


      import VueWrapper from '../node_modules/better-docs/lib/vue-wrapper.js';

      window.VueWrapper = VueWrapper;

    
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/components/Box.vue';
vueComponents['Box'] = Component0;

import Component1 from '../src/components/dashName.vue';
vueComponents['dash-name'] = Component1;

import Component2 from '../src/components/ReactComponent.jsx';
reactComponents['Documented'] = Component2;

import Component3 from '../src/components/ProgressBar.vue';
vueComponents['ProgressBar'] = Component3;