  
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.ptest.app',
        productName: 'ptest',
        copyright: 'Copyright © 2020',
        win: {
          icon: './build/icons/icon.ico',
          target: [
            {
              target: 'nsis',
              arch: [
                'x64',
                'ia32'
              ]
            }
          ]
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        publish: [{
          'provider': 'github',
          'owner': 'Hunlongyu',
          'repo': 'p-test'
        }]
      },
      chainWebpackRendererProcess: config => {
        if (process.env.NODE_ENV === 'development') {
          config.plugins.delete('prefetch')
        }
      }
    }
  }
}