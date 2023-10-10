export const localDomain = 'http://localhost:3005'
export const prodDomain = 'https://whatever.com'
const status = 'development'

export const domain = (status === 'development') ? localDomain : prodDomain