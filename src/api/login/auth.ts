import api from '..'

export const auth = async (token: string) => {
  return await api('/api', {
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
    .then((res) => res.data.data)
    .catch((err) => {
      console.error(err)
      return {}
    })
}
