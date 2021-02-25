<template>
  <div id="wapper">
    <!-- 背景图 -->
    <img class="wap_back opacity"
         src="../assets/tigger.jpg"
         alt="" />
    <!-- 登录/注册 -->
    <div class="content"
         ref="verifyWidth">
      <!-- 用户头像 -->
      <svg-icon iconname="icon-huangguan"
                class="crown"></svg-icon>
      <div class="avatar">
        <a-avatar src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg"
                  :size="64"
                  icon="user" />
      </div>
      <!-- 用户名 -->
      <div id="search"
           class="search-box">
        <div class="search-input-out">
          <div class="search-btn-input">
            <div class="search-select">
              <svg-icon iconname="icon-yonghuming"></svg-icon>
            </div>
            <input type="text"
                   autocomplete="off"
                   autofocus="autofocus"
                   placeholder="请输入用户名"
                   class="search-input"
                   v-model="userName">
          </div>
        </div>
      </div>
      <!-- 密码 -->
      <div id="search"
           class="search-box">
        <div class="search-input-out">
          <div class="search-btn-input">
            <div class="search-select">
              <svg-icon iconname="icon-mima"></svg-icon>
            </div>
            <input :type="!showPass ? 'password' : 'text'"
                   autocomplete="off"
                   autofocus="autofocus"
                   placeholder="请输入密码"
                   class="search-input"
                   v-model="passWord">
            <div @click="showPass = !showPass">
              <svg-icon :iconname="!showPass?'icon-mimabukejian':'icon-mimakejian'" class="eye"></svg-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- 安全验证 -->
      <div id="search"
           class="search-box">
        <!-- 点击安全验证 -->
        <div class="verify-input"
             @click.stop="verify">
          <div :class="isFinish ? 'icon-verify finish': 'icon-verify'">
            <svg-icon iconname="icon-yanzhengma"></svg-icon>
          </div>
          <span :style="{color:(isFinish? '#44ad53':'#757575')}">{{!isFinish && msg == '' ? '请完成安全验证！' : msg}}</span>
        </div>
        <P class="reminder">
          <svg-icon iconname="icon-tishi"></svg-icon>
          <span>温馨提示: 您将在完成安全验证后直接登录！</span>
        </P>
        <!-- 安全验证滑块 -->
        <div class="verify-content"
             v-if="showVer">
          <slide-verify ref="slideblock"
                        @again="onAgain"
                        @fulfilled="onFulfilled"
                        @success="onSuccess"
                        @fail="onFail"
                        @refresh="onRefresh"
                        :accuracy="accuracy"
                        :slider-text="text"
                        :w="verifyWidth">
          </slide-verify>
          <!-- <div>{{msg}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideVerify from '../components/slide-verify'
import { isLogin } from '@/api/index'
export default {
  components: {
    slideVerify
  },
  data () {
    return {
      showVer: false,
      msg: '',
      text: '向右滑',
      //   精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 1,
      verifyWidth: 0,
      isFinish: false,
      userName: '',
      passWord: '',
      showPass: false
    }
  },
  created () {},
  mounted () {
    this.verifyWidth = this.$refs.verifyWidth.offsetWidth
  },
  watch: {},
  computed: {},
  methods: {
    verify () {
      if (this.userName === '' || this.passWord === '') {
        this.$popup({
          messType: 'info',
          content: '验证前请将用户名密码补充完整！！！'
        })
      } else {
        if (this.isFinish) {
          this.showVer = false
        } else {
          this.showVer = true
        }
      }
    },
    onSuccess (times) {
      this.msg = `验证通过, 耗时${(times / 1000).toFixed(1)}s`
      this.showVer = false
      // 是否完成验证
      this.isFinish = true
      const data = {
        userName: this.userName,
        passWord: this.passWord
      }
      // 登录
      isLogin(data).then((data) => {
        console.log(data.data)
      })
    },
    onFail () {
      this.msg = '验证不通过'
    },
    onAgain () {
      this.msg = '检测到非人为操作的哦！'
      // 刷新
      this.$refs.slideblock.reset()
    },
    onRefresh () {
      console.log('点击了刷新小图标')
      this.msg = ''
    },
    onFulfilled () {
      console.log('刷新成功啦！')
    },
    handleClick () {
      // 父组件直接可以调用刷新方法
      this.$refs.slideblock.reset()
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  width: 76px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.svg-icon {
  margin-right: 0.9em;
}
.crown {
  font-size: 8px;
  display: flex;
  margin: 0 auto;
}
.avatar {
  display: flex;
  justify-content: center;
}
#search {
  position: relative;
  margin-top: 4.4px;
  .verify-input {
    font-size: 3px;
    font-weight: 400;
    line-height: 7px;
    box-sizing: border-box;
    width: 76px;
    height: 7px;
    padding: 0 10px;
    border: none;
    color: #757575;
    border-radius: 2px;
    outline: 0;
    background: rgba(255, 255, 255, 0.804);
    box-shadow: 0px 1px 6px 0px rgb(34 34 38 / 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    //   transition-duration: 0.4s; // 规定完成过渡效果需要花费的时间
    cursor: pointer;
    .icon-verify {
      width: 1.8em;
      height: 1.8em;
      background: #fff;
      border-radius: 50%;
      margin-right: 0.4em;
      position: relative;
      .svg-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.8em;
        height: 0.8em;
      }
    }
    span {
      vertical-align: middle;
      height: 100%;
    }
  }
  //   .verify-input:hover {
  //     color: #3979ff !important;
  //     .icon-verify {
  //       background: #3979ff !important;
  //       color: #fff !important;
  //     }
  //   }
  .verify-content {
    position: absolute;
    top: -46px;
    background: #fff;
    border-radius: 2px;
    // padding: 2.6px;
  }
  .finish {
    background: #44ad53 !important;
    color: #fff !important;
  }
  .reminder {
    color: #fff;
    height: 8px;
    line-height: 8px;
    .svg-icon {
      color: red !important;
      margin-right: 1px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
  .eye {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-right: 2px;
    cursor: pointer;
    color: #555666;
  }
}
</style>
