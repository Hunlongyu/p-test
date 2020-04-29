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
        mac: {
          icon: 'build/icons/icon.icons',
          category: 'public.app-category.developer-tools',
          target: 'default'
        },
        win: {
          icon: 'build/icons/icon.ico',
          target: [ 'nsis', 'portable', 'zip' ]
        },
        linux: {
          icon: 'build/icons',
          category: 'Development'
        },
        publish: [{
          'provider': 'github',
          'owner': 'Hunlongyu',
          'repo': 'p-test'
        }]
      }
    }
  }
}
