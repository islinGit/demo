import serve from '../utils/request'
/**
 * 获取验证码
 */

export function getSms (data) {
  serve.request(
    {
      method: 'post',
      url: '/getsms',
      data: data
    }
  )
}
export function getUser () {
  serve.request({
    method: 'get',
    url: '/getUser',
    data: {}
  })
}

/**
 * 获取用户信息
 */

/**
 * 登录
 */
