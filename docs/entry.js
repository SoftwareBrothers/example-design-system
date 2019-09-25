
    window.Components = {};

  
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

  import Box from '../src/components/Box.vue';
Components['Box'] = Box;

import Documented from '../src/components/ReactComponent.jsx';
Components['Documented'] = Documented;

import ProgressBar from '../src/components/ProgressBar.vue';
Components['ProgressBar'] = ProgressBar;