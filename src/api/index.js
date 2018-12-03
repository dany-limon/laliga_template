import { get, /*patch, post, put, remove, */ configureAxiosDefaults } from './utils'
import * as ApiConfig from '../config/api'

export function configure(token) {
  configureAxiosDefaults(token, ApiConfig.BASE_URL)
}

export const logIn = () => get('/token')
export const getMe = () => get('/api/v1/me')
