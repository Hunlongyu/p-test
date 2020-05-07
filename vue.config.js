module.exports = {
  pages: {
    index: 'src/main.js',
    mini: 'src/mini/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.electron.ptest',
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        copyright: 'Copyright @ 2020 Hunlongyu',
        productName: 'ptest',
        publish: [
          {
            provider: 'github',
            owner: 'Hunlongyu',
            repo: 'p-test',
            releaseType: 'draft'
          }
        ]
      }
    }
  }
}
