<template>
  <section class="wrapper">
    <header>
      {{title}}
      <div class="opts">
        <!-- @slot Here should go all the top header options -->
        <slot name="options"></slot>
      </div>
    </header>
    <div class='inner-content'>
      <!-- @slot Main, central, content of the component -->
      <slot />
    </div>
  </section>
</template>

<script>
/**
 * This component is just a Box with border.
 * It serves as an example of how you can incorporate
 * components together.
 * 
 * Component also has slots, methods and events.
 *
 * @component
 * @example <caption>Basic usage just with the default slot</caption>
 * <Box>
 *   I am inside a slot
 * </Box>
 * 
 * @example <caption>Using second component inside</caption>
 * <Box>
 *   <ProgressBar :spent="spent" :remaining="50"></ProgressBar>
 * </Box>
 * 
* @example <caption>Example of passing an entire component in a preview</caption>
 * {
 *   template: `<Box>
 *     <ProgressBar :spent="spent" :remaining="50"></ProgressBar>
 *     <ProgressBar :spent="50" :remaining="50" style="margin-top: 20px"></ProgressBar>
 *   </Box>`,
 *   data: function() {
 *     return {spent: 223};
 *   }
 * }
 */
export default {
  name: "Box",
  props: {
    /**
     * This will be in the header
     */
    title: {
      type: String,
      default: "My box"
    }
  },
  methods: {
    /**
     * Also, you can describe methods for each component
     * the same as you would do this in regular @jsdoc
     * documented file
     * 
     * @param {string} prop1      some example property
     * @param {string} prop2      other property
     */
    exampleMethod(prop1, prop2) {
      // method body

      // The method could even throw an event
      /**
       * This event could be thrown by component in case
       * of some kind of unexpected behaviour.
       * 
       * @category API
       * @event unexpectedEvent
       */
      this.$emit('unexpecteEvent')
    }
  }
}
</script>

<style scoped>
  section.wrapper {
    background: #fff;
    border: 1px solid #DADADA;
    border-radius: 4px;
    padding: 32px;
  }

  section.wrapper > header {
    font-size: 18px;
    color: #211D1A;
    font-weight: bold;
    margin-bottom: 20px;
  }
</style>