import Cookies from 'js-cookie'

const TokenKey = process.env.VUE_APP_COOKIE_TOKEN_KEY
  ? process.env.VUE_APP_COOKIE_TOKEN_KEY
  : 'Lrhealth-Data-Token'

const getToken = () => {
  return Cookies.get(TokenKey)
}

const setToken = token => {
  return Cookies.set(TokenKey, token)
}

const removeToken = () => {
  return Cookies.remove(TokenKey)
}

export { getToken, setToken, removeToken }
