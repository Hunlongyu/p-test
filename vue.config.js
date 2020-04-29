module.exports = {
  pages: {
    index: 'src/main.js',
    mini: 'src/mini/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.electron.${name}',
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        copyright: 'Copyright @ 2020 ${authore}',
        artifactName: 'PTest-${cpu}-${version}.${ext}',
        productName: 'pTest-${version}',
        publish: [{
          'provider': 'github',
          'owner': 'Hunlongyu',
          'repo': 'p-test'
        }]
      }
    }
  }
}
