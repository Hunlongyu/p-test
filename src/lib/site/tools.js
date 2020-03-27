import axios from 'axios'
import sites from './sites'
const zy = {
  n: 0, // sites[n] 视频源
  id: 0, // 视频类型
  pages: 1, // 第几页
  keywords: '', // 搜索关键字
  getFilms (n = 0, id = 1, pages = 1) {
    return new Promise((resolve, reject) => {
      const url = sites[n].view.replace(/{id}/, id).replace(/{pages}/, pages)
      const type = sites[n].type
      axios.get(url).then(res => {
        const data = res.data
        if (type === 0) {
          this.typeZero(data)
        }
      }).catch(error => {
        console.log(error)
      })
    })
  },
  typeZero (txt) {
    console.log('lala')
    const t = 'lala'
    return t
  }
}

export default zy
