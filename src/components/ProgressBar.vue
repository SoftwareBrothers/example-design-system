<template>
  <div class="progress-wrapper">
    <div class="from-start" :style="{ width: progress + '%' }">
      Time spent: <b>{{spent}}</b>
      <div class="remaining" :class="{ reverse: isSmall }">
        Remaining estimate: <b>{{remaining}}</b>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Shows progress in a given Project.
 * By giving *spent* and *remaining* time (in hours) it computes the
 * progress and shows it in the UI.
 *
 * @component
 * @example <caption>Basic</caption>
 * <ProgressBar :spent="100" :remaining="50" />
 * 
 * @example <caption>Almost done</caption>
 * <ProgressBar :spent="100" :remaining="5" />
 */
export default {
  name: 'ProgressBar',
  props: {
    /**
     * How many hours have already been spent
     */
    spent: {
      type: Number,
      default: 30,
    },
    /**
     * What is the remaining number of hours
     */
    remaining: {
      type: Number,
      default: 40,
    }
  },
  computed: {
    progress: function() {
      return +this.spent / (+this.remaining + +this.spent) * 100
    },
    isSmall: function() {
      return this.progress < 60;
    }
  }
}
</script>

<style scoped>
  .progress-wrapper {
    height: 32px;
    background: rgba(0,87,106,0.1);
    color: #00576A;
    border-radius: 50px;
  }
  .progress-wrapper div {
    padding: 6px 16px;
    height: 20px;
  }
  .from-start {
    float: left;
    background: #00576A;
    color: #fff;
    position: relative;
    border-radius: 50px 0 0 50px;
  }
  
  .remaining {
    position: absolute;
    right: 0;
    top: 0;
  }
  .remaining.reverse {
    right: -200px;
    color: #00576A;
  }
</style>