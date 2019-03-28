<template>
  <div class="back" id="back">
    <img src="@/static/img/icons/back.png" alt="" @click='back'>
  </div>
</template>
<script>
export default {
  name: 'back',
  data() {
    return {
    }
  },
  mounted() {
    // console.log(window)
  },
  methods: {
    back() {
      window.history.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .back 
    width 48px
    height 48px
    position fixed
    top 20px
    left 20px

</style>
