import db from './index'
const { history } = db
export default {
  async add (doc) {
    return await history.add(doc)
  },
  async all () {
    return await history.toArray()
  },
  async remove (id) {
    return await history.delete(id)
  },
  async clear () {
    return await history.clear()
  }
}
