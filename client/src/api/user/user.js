import request from '@/utils/request'

export function queryUser(params) {
  return request({
    url: '/api/v2/user',
    params
  })
}

export function createUser(data) {
  return request({
    url: '/api/v2/user',
    method: 'POST',
    data
  })
}

export function updateUser(id, data) {
  return request({
    url: `/api/v2/user/${id}`,
    method: 'PUT',
    data
  })
}

export function editUser(id) {
  return request({
    url: `/api/v2/user/${id}/edit`
  })
}

export function destoryUser(id) {
  return request({
    url: `/api/v2/user/${id}`,
    method: 'DELETE'
  })
}
