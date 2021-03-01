<template>
    <!-- 头部操作栏 -->
    <div class="user_top">
        <div class="title">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1063219477,3011929956&fm=15&gp=0.jpg" alt="">
        </div>
        <!-- 全局搜索 -->
        <global-search ref="child"></global-search>
    </div>
</template>

<script>
import globalSearch from '../components/globalSearch'
export default {
  name: 'NavBar',
  components: {
    globalSearch
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.title{
  z-index: 9;
  position: absolute;
  padding: 4px;
  img{
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
}
</style>
