import { defineStore } from 'pinia'

interface TabStore {
  /** 用户菜单 */
  menus: GlobalMenu[]
}

export const useTabStore = defineStore('tabStore', {
  state: (): TabStore => ({
    menus: []
  })
})
