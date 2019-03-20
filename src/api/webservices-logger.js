/*eslint-disable no-console */

import moment from 'moment'
import axios from 'axios'

const showLogs = process.env.NODE_ENV === `development` && console.groupEnd

export const config = values => {
  if (!showLogs) return

  console.groupCollapsed(' %capi %cconfig %c@ ' + moment(Date.now()).format('HH:MM:SS.mmm'), 'color:grey; font-weight: 100', 'font-weight: bold', 'color:grey')

  console.log('parameters%o', values)

  console.groupEnd()
}

export const logCall = (method, url, parameters) => {
  if (!showLogs) return

  console.groupCollapsed(
    ' %capi call %c' + method + ' ' + url + ' %c@ ' + moment(Date.now()).format('HH:MM:SS.mmm'),
    'color:grey; font-weight: 100',
    'font-weight: bold;',
    'color:grey'
  )

  console.log('%c endpoint %c' + url, 'font-weight: bold;', '')

  parameters && console.log('%c parameters %o', 'font-weight: bold;', parameters)

  //console.log('%c baseURL' + ' %c' + axios.defaults.baseURL, 'font-weight: bold;', '')

  console.log('%c headers %o', 'font-weight: bold;', axios.defaults.headers)

  console.groupEnd()
}

export const logResponse = (config, response) => {
  if (!showLogs) return

  console.groupCollapsed(
    ' %capi response %c  %c@ ' + moment(Date.now()).format('HH:MM:SS.mmm'),
    'color:grey; font-weight: 100',
    'font-weight: bold;',
    'color:grey'
  )

  config && config.method && console.log('%c method %o', 'font-weight: bold;', config.method)
  config && config.url && console.log('%c url %o', 'font-weight: bold;', config.url)
  response && response.data && console.log('%c data %o', 'font-weight: bold;', response.data)
  response && response.status && console.log('%c status %o', 'font-weight: bold;', response.status)

  console.groupEnd()
}

export const logError = (method, url, error) => {
  if (!showLogs) return

  console.groupCollapsed(
    ' %capi error %c' + method + ' ' + url + ' %c@ ' + moment(Date.now()).format('HH:MM:SS.mmm'),
    'color:grey; font-weight: 100',
    'font-weight: bold; color: FireBrick;',
    'color:grey'
  )

  if (error && error.response) {
    console.log('%c status %o', 'font-weight: bold;', error.response.status)

    if (error.response.data.errors) {
      console.log('%c errors %o', 'font-weight: bold;', error.response.data.errors)
    } else {
      console.log('%c data %o', 'font-weight: bold;', error.response.data)
    }
  }

  console.groupEnd()
}
