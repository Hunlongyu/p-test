module.exports = {
  pages: {
    index: 'src/main.js',
    mini: 'src/mini/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.electron.zyplayer',
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        copyright: 'Copyright @ 2020 Hunlongyu',
        productName: 'pTest-v${version}'
      }
    }
  }
}
