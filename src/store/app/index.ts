import { defineStore } from 'pinia'

interface AppStore {
  /** 侧边栏折叠状态 */
  siderCollapse: boolean
  /** 侧边栏宽度 */
  siderWidth: number
  /** 侧边栏折叠之后的宽度 */
  collapsedWidth: number
}

export const useAppStore = defineStore('appStore', {
  state: (): AppStore => ({
    siderCollapse: false,
    siderWidth: 208,
    collapsedWidth: 64
  })
})
