export const configure = token => {}

export const logIn = () => new Promise(resolve => resolve({ token: '1234' }))

export const getMe = () => new Promise(resolve => resolve({ record: { email: 'a@a.com', nombre: 'aaa' } }))
