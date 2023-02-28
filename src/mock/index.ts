import { random } from 'lodash'

/** 模拟登录接口 */
export const api_login = (auth: string) => {
  console.log(`登录认证: ${auth}`)
  return new Promise<any>((res) => {
    const data = {
      code: '200',
      msg: '',
      data: '1E31BC2A8BA5C9DEE337A0D6CF007B93'
    }
    setTimeout(() => {
      res(data)
    }, random(3) * 1000)
  })
}
