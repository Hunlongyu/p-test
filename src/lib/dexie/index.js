import Dexie from 'dexie'

const db = new Dexie('ZYDB')

db.version(1).stores({
  theme: '++id, theme',
  site: '++id, site',
  video: '++id, name, type, time, detail, urls, index'
})

db.version(2).stores({
  setting: 'id, theme, site, language',
  history: '++id, name, detail, index, currentTime, playTime',
  video: '++id, name, type, time, detail, urls, index'
})

const initData = [
  {
    theme: 'light',
    site: 0,
    language: 'zh-cn'
  }
]

db.on('populate', () => {
  db.setting.bulkAdd(initData)
})

db.open()

export default db
