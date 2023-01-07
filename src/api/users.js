import { makeRequest } from "./makeRequest"

const URL = '/users'

export const getUser = (userId) => makeRequest({
  method: 'GET',
  url: `${URL}/${userId}`,
})

