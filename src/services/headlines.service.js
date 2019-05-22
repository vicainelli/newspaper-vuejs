import Axios from 'axios'

const API_KEY = `&apiKey=${process.env.VUE_APP_NEWS_KEY}`
const RESOURCE_NAME = `/top-headlines?`

export default {
  getAll(country, category) {
    return Axios.get(
      `${RESOURCE_NAME}country=${country}&category=${category}${API_KEY}`
    )
  }
}
