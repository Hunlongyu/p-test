import axios from 'axios'
import sites from './sites'
const zy = {
  n: 0, // sites[n] 视频源
  id: 0, // 视频类型
  page: 1, // 第几页
  keywords: '', // 搜索关键字
  // 获取浏览列表
  film_get (n = 0, id = 1, page = 1) {
    return new Promise((resolve, reject) => {
      const url = sites[n].view.replace(/{id}/, id).replace(/{page}/, page)
      const type = sites[n].type
      axios.get(url).then(async res => {
        const data = res.data
        if (type === 0) {
          const zeroData = await this.film_get_type_zero(data, n)
          resolve(zeroData)
        }
        if (type === 1) {
          const oneData = await this.film_get_type_one(data, n)
          resolve(oneData)
        }
        if (type === 2) {
          const twoData = await this.film_get_type_two(data, n)
          resolve(twoData)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  film_get_type_zero (txt, n = 0) {
    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser()
        const html = parser.parseFromString(txt, 'text/html')
        const list = html.querySelectorAll('.xing_vb li')
        const d = { list: [], total: 0, update: 0 }
        for (let i = 1; i < list.length - 1; i++) {
          const info = {
            site: n,
            name: list[i].childNodes[1].innerText,
            type: list[i].childNodes[3].innerText,
            time: list[i].childNodes[5].innerText,
            detail: sites[n].url + list[i].childNodes[1].querySelector('a').getAttribute('href'),
            urls: [],
            index: 0
          }
          d.list.push(info)
        }
        d.update = parseInt(html.querySelectorAll('.xing_top_right li strong')[0].innerText)
        d.total = parseInt(html.querySelectorAll('.xing_top_right li strong')[1].innerText)
        resolve(d)
      } catch (err) {
        reject(err)
      }
    })
  },
  film_get_type_one (txt, n = 0) {
    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser()
        const html = parser.parseFromString(txt, 'text/html')
        const list = html.querySelectorAll('.videoContent li')
        const d = { list: [], total: 0, update: 0 }
        for (let i = 0; i < list.length; i++) {
          const info = {
            site: n,
            name: list[i].querySelector('.videoName').innerText,
            type: list[i].querySelector('.category').innerText,
            time: list[i].querySelector('.time').innerText,
            detail: sites[n].url + list[i].querySelector('.address').getAttribute('href'),
            urls: [],
            index: 0
          }
          d.list.push(info)
        }
        d.update = parseInt(html.querySelectorAll('.header_list li span')[0].innerText)
        d.total = parseInt(html.querySelectorAll('.header_list li span')[1].innerText)
        resolve(d)
      } catch (err) {
        reject(err)
      }
    })
  },
  film_get_type_two (txt, n = 0) {
    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser()
        const html = parser.parseFromString(txt, 'text/html')
        const list = html.querySelectorAll('.nr')
        const d = { list: [], total: 0, update: 0 }
        for (let i = 0; i < list.length; i++) {
          const info = {
            site: n,
            name: list[i].querySelector('.name').innerText,
            type: list[i].querySelector('.btn_span').innerText,
            time: list[i].querySelector('.hours').innerText,
            detail: sites[n].url + list[i].querySelector('.name').getAttribute('href'),
            urls: [],
            index: 0
          }
          d.list.push(info)
        }
        d.update = parseInt(html.querySelector('.kfs em').innerText)
        d.total = parseInt(html.querySelector('.date span').innerText)
        resolve(d)
      } catch (err) {
        reject(err)
      }
    })
  },
  // 获取详情
  detail_get (n = 0, url) {
    return new Promise((resolve, reject) => {
      const type = sites[n].type
      axios.get(url).then(async res => {
        if (type === 0) {
          const zeroData = await this.detail_get_type_zero(res.data, n)
          resolve(zeroData)
        }
        if (type === 1) {
          const oneData = await this.detail_get_type_one(res.data, n)
          resolve(oneData)
        }
        if (type === 2) {
          const twoData = await this.detail_get_type_two(res.data, n)
          resolve(twoData)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  detail_get_type_zero (txt, n = 0) {
    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser()
        const html = parser.parseFromString(txt, 'text/html')
        const data = {
          site: n,
          info: '',
          desc: '',
          m3u8_urls: [],
          mp4_urls: []
        }
        const vodBox = html.querySelector('.vodBox')
        data.info = vodBox
        const vodInfo = html.querySelectorAll('.playBox')
        for (let i = 0; i < vodInfo.length; i++) {
          const k = vodInfo[i].innerText
          if (k.indexOf('剧情介绍') >= 0) {
            data.desc = vodInfo[i].querySelector('.vodplayinfo')
          }
        }
        const vodLi = html.querySelectorAll('.ibox .vodplayinfo li')
        const m3u8UrlArr = []
        const mp4UrlArr = []
        for (let i = 0; i < vodLi.length; i++) {
          const j = vodLi[i].innerText
          if (j.indexOf('.m3u8') >= 0) {
            m3u8UrlArr.push(j)
          }
          if (j.indexOf('.mp4') >= 0) {
            mp4UrlArr.push(j)
          }
        }
        data.m3u8_urls = m3u8UrlArr
        data.mp4_urls = mp4UrlArr
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  },
  detail_get_type_one (txt, n = 0) {
    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser()
        const html = parser.parseFromString(txt, 'text/html')
        const data = {
          site: n,
          info: '',
          desc: '',
          m3u8_urls: [],
          mp4_urls: []
        }
        const vodBox = html.querySelector('.white')
        data.info = vodBox
        const vodInfo = html.querySelectorAll('.white')
        for (let i = 0; i < vodInfo.length; i++) {
          const k = vodInfo[i].innerText
          if (k.indexOf('剧情介绍') >= 0) {
            data.desc = vodInfo[i].querySelector('div')
          }
        }
        const vodLi = html.querySelectorAll('.playlist li #m3u8')
        const m3u8UrlArr = []
        const mp4UrlArr = []
        for (let i = 0; i < vodLi.length; i++) {
          const j = vodLi[i].value
          if (j.indexOf('.m3u8') >= 0) {
            m3u8UrlArr.push(j)
          }
          if (j.indexOf('.mp4') >= 0) {
            mp4UrlArr.push(j)
          }
        }
        data.m3u8_urls = m3u8UrlArr
        data.mp4_urls = mp4UrlArr
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  },
  detail_get_type_two (txt, n = 0) {
    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser()
        const html = parser.parseFromString(txt, 'text/html')
        const data = {
          site: n,
          info: '',
          desc: '',
          m3u8_urls: [],
          mp4_urls: []
        }
        const vodBox = html.querySelector('.vodBox')
        data.info = vodBox
        data.desc = html.querySelector('.vodplayinfo')
        const vodLi = html.querySelectorAll('.vodplayinfo li')
        const m3u8UrlArr = []
        const mp4UrlArr = []
        for (let i = 0; i < vodLi.length; i++) {
          const j = vodLi[i].innerText
          if (j.indexOf('.m3u8') >= 0) {
            m3u8UrlArr.push(j)
          }
          if (j.indexOf('.mp4') >= 0) {
            mp4UrlArr.push(j)
          }
        }
        data.m3u8_urls = m3u8UrlArr
        data.mp4_urls = mp4UrlArr
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  },
  // 搜索列表
  search_get (n = 0, keywords = '', page = 1) {
    return new Promise((resolve, reject) => {
      const type = sites[n].type
      let url = null
      if (type === 0) {
        url = sites[n].search.replace(/{page}/, page).replace(/{keywords}/, keywords)
      }
      if (type === 1) {
        url = sites[n].search.replace(/{keywords}/, keywords)
      }
      axios.get(url).then(async res => {
        const data = res.data
        if (type === 0) {
          const zeroData = await this.search_get_type_zero(data, n)
          resolve(zeroData)
        }
        if (type === 1) {
          const oneData = await this.search_get_type_one(data, n)
          resolve(oneData)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  search_get_type_zero (txt, n = 0) {
    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser()
        const html = parser.parseFromString(txt, 'text/html')
        const list = html.querySelectorAll('.xing_vb li')
        const d = { list: [], total: 0 }
        for (let i = 1; i < list.length - 1; i++) {
          const info = {
            site: n,
            name: list[i].childNodes[1].innerText,
            type: list[i].childNodes[3].innerText,
            time: list[i].childNodes[5].innerText,
            detail: sites[n].url + list[i].childNodes[1].querySelector('a').getAttribute('href'),
            urls: [],
            index: 0
          }
          d.list.push(info)
        }
        d.total = html.querySelector('.nvc dd').innerText.replace(/[^\d]/g, '')
        resolve(d)
      } catch (err) {
        reject(err)
      }
    })
  },
  search_get_type_one (txt, n = 0) {
    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser()
        const html = parser.parseFromString(txt, 'text/html')
        const list = html.querySelectorAll('.videoContent li')
        const d = { list: [], total: 0 }
        for (let i = 0; i < list.length; i++) {
          const info = {
            site: n,
            name: list[i].querySelector('.videoName').innerText,
            type: list[i].querySelector('.category').innerText,
            time: list[i].querySelector('.time').innerText,
            detail: sites[n].url + list[i].querySelector('.address').getAttribute('href'),
            urls: [],
            index: 0
          }
          d.list.push(info)
        }
        d.total = list.length
        resolve(d)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default zy
