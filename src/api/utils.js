import axios from 'axios'
import _ from 'lodash'
// import * as WSLogger from './webservices-logger'

export function configureAxiosDefaults(authToken, baseUrl) {
  axios.defaults.baseURL = baseUrl
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken
  axios.defaults.headers.post['Content-type'] = 'application/json'
  axios.defaults.withCredentials = true

  // axios.interceptors.request.use(
  //   config => {
  //     console.log('axios.interceptors.request.use', config)
  //     WSLogger.logCall(config.method, config.url)
  //     return config
  //   },
  //   error => {
  //     //console.log('request error', error)
  //     Promise.reject(error)
  //   }
  // )

  // axios.interceptors.response.use(
  //   response => {
  //     // console.log('---response', response)
  //     WSLogger.logResponse(response.config, response)
  //     return response
  //   },
  //   error => {
  //     // console.log('response error', error.message)
  //     Promise.reject(error)
  //   }
  // )
}

export function get(url) {
  return axios
    .get(url)
    .then(response => {
      return _.has(response, 'data') ? response.data : null
    })
    .catch(error => {
      if (error.response) {
        const res = { code: error.response.status, msg: error.response.data, error: error }
        throw res
      } else {
        const res = { code: 500, msg: error.message, error: error }
        throw res
      }
    })
}

export function post(url, data) {
  return axios
    .post(url, data)
    .then(response => {
      return _.has(response, 'data') ? response.data : null
    })
    .catch(error => {
      if (error.response) {
        const res = { code: error.response.status, msg: error.response.data, error: error }
        throw res
      } else {
        const res = { code: 500, msg: error.message, error: error }
        throw res
      }
    })
}

export function put(url, data) {
  return axios
    .put(url, data)
    .then(response => {
      return _.has(response, 'data') ? response.data : null
    })
    .catch(error => {
      if (error.response) {
        const res = { code: error.response.status, msg: error.response.data, error: error }
        throw res
      } else {
        const res = { code: 500, msg: error.message, error: error }
        throw res
      }
    })
}

export function patch(url, data) {
  return axios
    .patch(url, data)
    .then(response => {
      return _.has(response, 'data') ? response.data : null
    })
    .catch(error => {
      if (error.response) {
        const res = { code: error.response.status, msg: error.response.data, error: error }
        throw res
      } else {
        const res = { code: 500, msg: error.message, error: error }
        throw res
      }
    })
}

export function remove(url) {
  return axios
    .delete(url)
    .then(response => {
      return _.has(response, 'data') ? response.data : null
    })
    .catch(error => {
      if (error.response) {
        const res = { code: error.response.status, msg: error.response.data, error: error }
        throw res
      } else {
        const res = { code: 500, msg: error.message, error: error }
        throw res
      }
    })
}
