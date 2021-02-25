<template>
  <div class="global_search">
    <!-- <div class="dateTime">
      <span>
        <svg-icon iconname="icon-shijian1"></svg-icon>
      </span>
      <span style="vertical-align: middle;">{{dateTime}}</span>
    </div> -->
    <div id="search"
         class="search-box">
      <div class="search-input-out">
        <div class="search-btn-input">
          <div class="search-select"
               @click.stop="isShow = !isShow">
            <img :src="newSelectLogo"
                 alt="">
            <div class="dropdown-icon"></div>
          </div>
          <input type="text"
                 autocomplete="off"
                 autofocus="autofocus"
                 placeholder="全局搜索目录信息..."
                 class="search-input">
          <div class="search-engines-list"
               v-if="isShow">
            <div class="engines-item"
                 v-for="(item,index) in selectList"
                 :key="index"
                 @click="otherWebsit(item)">
              <img :src="item.logoImg">
              <div class="engines-name">{{item.websiteName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录/用户信息 -->
    <div class="topLeft">
      <img src="../assets/menu.png"
           alt="">
    </div>
    <div class="topRight"
         @click="info">
      <img src="../assets/login-avatar.png"
           alt="">
    </div>
    <!-- <a-tooltip placement="bottomRight">
      <template slot="title">
        <span>登录享受更多惊喜呦！</span>
      </template>
      <div class="topRight">
        <img src="../assets/login-avatar.png" alt="">
      </div>
    </a-tooltip> -->
  </div>
</template>

<script>
export default {
  name: 'globalSearch',
  data () {
    return {
      dateTime: '',
      selectList: [
        {
          logoImg:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1063219477,3011929956&fm=15&gp=0.jpg',
          websiteName: 'myBlog'
        },
        {
          logoImg:
            'https://img-operation.csdnimg.cn/csdn/silkroad/img/1605079837396.png',
          websiteName: 'Github'
        },
        {
          logoImg:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2440249014,289326480&fm=26&gp=0.jpg',
          websiteName: 'Gitee'
        },
        {
          logoImg:
            'https://img-operation.csdnimg.cn/csdn/silkroad/img/1607569811165.png',
          websiteName: 'CSDN'
        },
        {
          logoImg:
            'https://img-operation.csdnimg.cn/csdn/silkroad/img/1605079886779.png',
          websiteName: 'baidu'
        }
      ],
      isShow: false,
      isLogin: false,
      newSelectLogo:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1063219477,3011929956&fm=15&gp=0.jpg'
    }
  },
  mounted () {
    const _this = this
    this.timer = setInterval(() => {
      _this.dateTime = _this.format(Date.parse(new Date()))
    }, 1000)
    this.$eventBus.$on('test', () => {
      _this.stopSelect()
    })
  },
  methods: {
    format (value) {
      var date = new Date(parseInt(value) + 8 * 3600 * 1000)
      return date.toJSON().substr(0, 19).replace('T', ' ')
    },
    changeSelect () {
      this.isShow = true
    },
    stopSelect () {
      this.isShow = false
    },
    otherWebsit (e) {
      this.newSelectLogo = e.logoImg
    },
    info () {
      if (this.isLogin) {
        // 已登录
        this.$router.push({ name: 'userInfo' })
      } else {
        // 未登录
        this.$router.push({ name: 'Login' })
      }
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>
<style lang="less" scoped>
// <------ 全局搜索 ------>
.global_search {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  padding: 4px;
  .dateTime {
    font-size: 4px;
    color: #fff;
    z-index: 1;
    margin-right: 4px;
  }
  #search {
    z-index: 10;
    outline: none;
    height: auto;
    justify-content: center;
  }
  #search-input {
    background: rgba(255, 255, 255, 0.804);
    border-radius: 10px;
  }
  #search .search-input-out {
    position: relative;
  }
  #search .search-input-out .search-btn-input {
    display: flex;
  }
  #search .search-input-out .search-btn-input .search-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    border-radius: 2px 0 0 2px;
    height: 7px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
    }
  }
  #search .search-input-out .search-btn-input .search-select > img {
    width: 5.6px;
    height: 5.6px;
    margin-right: 6px;
  }
  #search .search-input-out .search-btn-input .search-select .dropdown-icon {
    position: absolute;
    top: 50%;
    right: 3px;
    width: 0;
    margin-top: -0.6px;
    border-top: solid 1.4px #999aaa;
    border-right: solid 1.4px transparent;
    border-left: solid 1.4px transparent;
  }
  #search .search-input-out .search-btn-input .search-select::after {
    content: '';
    display: block;
    width: 0;
    height: 4px;
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translateY(-50%);
    border-right: 0.3px solid #999aaa;
  }
  #search .search-input-out .search-btn-input input {
    font-size: 3px;
    font-weight: 400;
    line-height: 7px;
    box-sizing: border-box;
    width: 70px;
    height: 7px;
    padding-right: 10px;
    padding-left: 18px;
    border: none;
    color: #555666;
    border-radius: 2px;
    outline: 0;
    background: rgba(255, 255, 255, 0.804);
    box-shadow: 0px 1px 6px 0px rgb(34 34 38 / 10%);
  }
  #search .search-input-out .search-engines-list {
    width: 100%;
    position: absolute;
    z-index: 10000;
    top: 9px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 1px 6px 0px rgb(34 34 38 / 10%);
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.804);
    display: block;
    display: flex;
    justify-content: center;
  }
  .search-engines-list .engines-item {
    flex: 1;
    padding: 2px;
    text-align: center;
    color: #000000bd;
    cursor: pointer;
    img {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .engines-name {
      margin-top: 1px;
      font-size: 3px;
    }
  }
  .search-engines-list .engines-item:hover {
    background: rgba(255, 255, 255, 0.8);
  }
}
</style>
