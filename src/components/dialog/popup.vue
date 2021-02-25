<template>
  <transition name="fade">
    <div class="messageBox" v-if="show">
      <div class="icon-title">
        <!-- error -->
        <svg-icon iconname="icon-shanchuguanbicha"
                  class="error"
                  v-if="messType === 'error'"></svg-icon>
        <!-- success -->
        <svg-icon iconname="icon-duigou"
                  class="success"
                  v-if="messType === 'success'"></svg-icon>
        <!-- info -->
        <svg-icon iconname="icon-info"
                  class="info"
                  v-if="messType === 'info'"></svg-icon>
      </div>
      <p>{{content}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      messType: '',
      content: ''
    }
  },
  created () {},
  mounted () {
    setTimeout(() => {
      this.show = false
    }, 1500)
  },
  watch: {},
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
// 渐变过渡
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2.5s;
  }
  .fade-leave-to{
    opacity: 0;
  }
.messageBox {
  display: flex;
  padding: 0 2px;
  position: absolute;
  left: 50%;
  top: 6%;
  transform: translateX(-50%);
  height: 8px;
  line-height: 8px;
  .svg-icon{
    margin-top: 1.6px;
  }
  p {
    color: #fff;
  }
}
.error {
  color: red;
}
.success {
  color: green;
}
.info {
  color: yellow;
}
</style>
