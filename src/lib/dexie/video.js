import db from './index'
const { video } = db
export default {
  async add (doc) {
    return await video.add(doc)
  },
  async all () {
    return await video.toArray()
  },
  async remove (id) {
    return await video.delete(id)
  }
}
