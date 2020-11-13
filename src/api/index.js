import request from '@/utils/request'

// // 登录
export function getLogin(form) {
  return request({
    url: "/login",
    method: "post",
    data: form
  });
}

// 用户信息
export function getUser(token) {
  return request({
    url: "/user",
    method: "get",
    params: token
  });
}

// 列表
export function getList() {
  return request({
    url: "/list",
    method: "get",
  });
}
