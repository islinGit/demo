import serve from '../utils/request'
/**
 * 获取验证码
 */
console.log(process.env.NODE_ENV)
export function getSms () {
  serve.request(
    {
      method: 'post',
      url: '/getSms',
      data: {
      }
    }
  )
}

/**
 * 获取用户信息
 */

/**
 * 登录
 */
