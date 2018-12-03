//https://login.microsoftonline.com
const BASE_URL_DEV = 'http://desalegacionespruebas.laliga.es'
const BASE_URL_PROD = 'https://localhost'
export const BASE_URL = process.env.NODE_ENV === `production` ? BASE_URL_PROD : BASE_URL_DEV
