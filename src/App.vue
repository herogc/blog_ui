<template>
  <div id="app" @click="test">
    <Nav-bar v-if="isShow"></Nav-bar>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/navBar.vue'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      isShow: false
    }
  },
  mounted () {},
  methods: {
    // 点击页面其他地方关闭下拉列表
    test () {
      this.$eventBus.$emit('test')
    }
  },
  watch: {
    $route (e) {
      if (e.name === 'Login') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>
<style lang="less">
html,body,#app{
  width: 100%;
  height: 100%;
}
#app{
    position: relative;
}
</style>
