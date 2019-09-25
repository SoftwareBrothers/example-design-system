<template>
  <div>
    Hello from dash with a prop <b>{{exampleProp}}</b>
  </div>
</template>

<script>
/**
 * @classdesc
 * This example symbolize the usage of vue components with a dash'ed name
 * 
 * You also can add a description in the top level
 * (so called class level) part of the page. You can do this with
 * `@classdesc` tag
 * 
 * Furthermore you can hide `Constructor` part with `@hideconstructor`
 * @hideconstructor
 * @component
 */
export default {
  name: 'dash-name',
  props: {
    exampleProp: {
      type: String,
      default: 'I am prop',
    }
  }
}
</script>