<template>
  <div class="setting">
    <div class="setting-box zy-scroll" v-if="show.setting">
      <div class="logo"><img src="@/assets/image/logo.png"></div>
      <div class="info"><a href="https://github.com/Hunlongyu/ZY-Player">{{$t('website')}}99</a><a href="https://github.com/Hunlongyu/ZY-Player/issues">{{$t('issues')}}</a></div>
      <div class="update11">v0.2.27
        <el-button size="small" v-show="update.flag" @click="openUpdate()">更新</el-button>
      </div>
      <div class="change">
        <div class="zy-select" @mouseleave="show.language = false">
          <div class="vs-placeholder" @click="show.language = true">{{$t('language')}}</div>
          <div class="vs-options" v-show="show.language">
            <ul>
              <li :class="s.language === i.key ? 'active' : ''" v-for="(i, j) in languages" :key="j" @click="languageClick(i.key)">{{ i.name }}</li>
            </ul>
          </div>
        </div>
        <div class="zy-select" @mouseleave="show.site = false">
          <div class="vs-placeholder" @click="show.site = true">{{$t('default_site')}}</div>
          <div class="vs-options" v-show="show.site">
            <ul>
              <li :class="s.site === i.key ? 'active' : ''" v-for="(i, j) in sites" :key="j" @click="siteClick(i.key)">{{ i.name }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="theme">
        <div class="title">{{$t('theme')}}</div>
        <div class="theme-box">
          <div @click="changeTheme('light')" class="theme-item light">
            <div class="theme-image">
              <img src="../assets/image/light.png" alt="">
            </div>
            <div class="theme-name">Light</div>
          </div>
          <div @click="changeTheme('dark')" class="theme-item dark">
            <div class="theme-image">
              <img src="../assets/image/dark.png" alt="">
            </div>
            <div class="theme-name">Dark</div>
          </div>
        </div>
      </div>
      <div class="qrcode">
        <div class="title">{{$t('donate')}}</div>
        <div class="qrcode-box">
          <img class="qrcode-item" src="../assets/image/alipay.png">
          <img class="qrcode-item" src="../assets/image/wepay.jpg">
        </div>
      </div>
    </div>
    <div class="update" v-if="update.show">
      <div class="wrapper">
        <div class="body">
          <div class="content" v-html="update.html"></div>
          <div class="progress" v-show="update.percent > 0">
            <el-progress :percentage="update.percent"></el-progress>
            <div class="info">大小: {{update.size}} KB</div>
          </div>
        </div>
        <div class="footer">
          <el-button size="small" @click="cancelUpdate">取消</el-button>
          <el-button size="small" @click="startUpdate">更新</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import setting from '../lib/dexie/setting'
import { sites } from '../lib/site/sites'
import { ipcRenderer } from 'electron'
export default {
  name: 'setting',
  data () {
    return {
      s: {},
      languages: [
        {
          key: 'zhCn',
          name: '中文'
        },
        {
          key: 'en',
          name: 'English'
        }
      ],
      sites: sites,
      show: {
        setting: false,
        language: false,
        site: false
      },
      update: {
        flag: false,
        show: true,
        html: '',
        percent: 0,
        size: 0
      }
    }
  },
  computed: {
    theme: {
      get () {
        return this.$store.getters.getTheme
      },
      set (val) {
        this.SET_THEME(val)
      }
    },
    language: {
      get () {
        return this.$store.getters.getLanguage
      },
      set (val) {
        this.SET_LANGUAGE(val)
      }
    },
    site: {
      get () {
        return this.$store.getters.getSite
      },
      set (val) {
        this.SET_SITE(val)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_THEME', 'SET_LANGUAGE', 'SET_SITE']),
    languageClick (e) {
      this.language = e
      this.show.language = false
      this.$i18n.locale = e
      this.s.language = e
      setting.update(this.s).then(res => {
        this.$m.success(this.$t('set_success'))
      })
    },
    siteClick (e) {
      this.site = e
      this.show.site = false
      this.s.site = e
      setting.update(this.s).then(res => {
        this.$m.success(this.$t('set_success'))
      })
    },
    changeTheme (e) {
      this.theme = e
      this.s.theme = e
      setting.update(this.s).then(res => {
        this.$m.success(this.$t('set_success'))
      })
    },
    checkUpdate () {
      console.log('开始检测更新')
      ipcRenderer.send('checkForUpdate')
      ipcRenderer.on('update-available', (e, info) => {
        this.update.flag = true
        this.update.html = info.releaseNotes
        console.log('有更新, 其版本号为: ' + info.version)
      })
    },
    cancelUpdate () {
      this.update.show = false
    },
    openUpdate () {
      this.update.show = true
    },
    startUpdate () {
      ipcRenderer.send('quitAndInstall')
      ipcRenderer.on('download-progress', (info, progress) => {
        this.update.percent = parseInt(progress.percent)
        this.update.size = progress.total
        console.log('progress', progress, JSON.stringify(progress))
        console.log('进度: ' + parseFloat(progress.percent).toFixed(0))
      })
      ipcRenderer.on('update-downloaded', () => {
        console.log('下载完毕, 开始安装')
      })
    }
  },
  created () {
    this.checkUpdate()
    setting.find().then(res => {
      this.s = res
      this.theme = res.theme
      this.$i18n.locale = this.s.language
      this.show.setting = true
    })
  }
}
</script>
<style lang="scss" scoped>
.setting{
  height: 660px;
  width: 100%;
  padding: 20px 0;
  .setting-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow-y: auto;
  }
 .logo{
    margin-top: 10px;
    width: 100%;
    text-align: center;
    img{
      width: 120px;
      height: auto;
    }
  }
  .info{
    width: 100%;
    margin-top: 20px;
    text-align: center;
    a{
      text-decoration: none;
      margin: 0 10px;
      font-size: 14px;
    }
  }
  .change{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    margin-top: 40px;
    .zy-select{
      margin-right: 20px;
    }
  }
  .theme{
    width: 100%;
    padding-left: 20px;
    margin-top: 20px;
    .theme-box{
      display: flex;
      justify-content: flex-start;
      margin-top: 10px;
      .theme-item{
        width: 200px;
        height: 180px;
        margin-right: 20px;
        cursor: pointer;
        border-radius: 2px;
        .theme-image{
          width: 180px;
          margin: 10px auto;
          img{
            width: 100%;
          }
        }
        .theme-name{
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  .qrcode{
    width: 100%;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    .qrcode-box{
      display: flex;
      justify-content: flex-start;
      margin-top: 10px;
      .qrcode-item{
        width: auto;
        height: 300px;
        margin-right: 20px;
        border-radius: 2px;
      }
    }
  }
  .update{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    .wrapper{
      background-color: #fff;
      padding: 30px 40px;
      border-radius: 4px;
      max-width: 500px;
      max-height: 90%;
      overflow: auto;
      .footer{
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
