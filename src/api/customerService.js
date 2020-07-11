import request from '@/utils/request'

export function regist(data) {
	debugger
  return request({
    url: '/cs/regist',
    method: 'post',
    data
  })
}
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
