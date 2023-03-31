export const login = (dispatch, send, auth, payload) => {
  const response = dispatch(send(auth, payload))
  (response.status) ? <Navigate /> : response.error
}

export const register = (dispatch, send,  auth, payload) => {
  const response = dispatch(send(auth, payload))
  (response.status) ? <Navigate /> : response.error
}
