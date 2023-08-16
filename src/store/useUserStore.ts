import {acceptHMRUpdate, defineStore} from 'pinia'
export const useUserStore  = defineStore('user',{
  state: () => {
    return {
      name: 'Jack'
    }
  },
  actions: {
   async setName(name: string){
    // const res = await apiLogin(user,password)
    this.$patch({
      name,
      // ...res
    })
   } 
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}