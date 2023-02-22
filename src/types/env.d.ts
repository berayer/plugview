
interface ImportMetaEnv {
  /** 程序端口 */
  readonly VITE_PORT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
