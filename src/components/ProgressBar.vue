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
 * @component
 * @example
 * <ProgressBar :spent="100" :remaining="50"></ProgressBar>
 */
export default {
  name: 'ProgressBar',
  props: {
    spent: {
      type: Number,
      default: 30,
    },
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