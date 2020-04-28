module.exports = {
  pages: {
    index: 'src/main.js',
    mini: 'src/mini/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        copyright: 'Copyright @ 2020 Hunlongyu',
        artifactName: 'P-Test_Setup_${version}.${ext}',
        win: {
          target: {
            target: 'nsis',
            arch: [
              'x64',
              'ia32'
            ]
          }
        }
      }
    }
  }
}
