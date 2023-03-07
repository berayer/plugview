
interface ImportMetaEnv {
  /** 程序端口 */
  readonly VITE_PORT: number
  /** 后台代理地址 */
  VITE_PROXY_URL:string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
