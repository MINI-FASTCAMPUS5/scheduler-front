import axios from 'axios'

const api = axios.create({
  baseURL: 'http://minischeduler-env.eba-m9yfe83y.ap-northeast-2.elasticbeanstalk.com'
})
export default api
