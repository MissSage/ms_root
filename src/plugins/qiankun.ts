// import { useUserStore } from '../store'
import { registerMicroApps, addGlobalUncaughtErrorHandler } from "qiankun"

export const initQianKun = (isDev: boolean) => {
  // 注册子应用
  registerMicroApps([
    {
      // 子应用名称，name值必须与子应用vite.config.ts文件中plugins属性qiankun的第一个参数值一致
      name: "vue3",
      // 默认会加载这个路径下的html，解析里面的js,结尾的/需要
      entry: isDev ? "//localhost:5174/vue3/" : "//139.155.178.206/vue3/",
      // 加载的容器（微应用会显示到这个容器里面，一定要保证主应用中有这个容器）
      container: "#subAppContainerVue3", // 和app.vue配置的节点一致
      // 匹配的路由
      activeRule: "/vue", // 访问：http://localhost:5174/vue
    },
    {
      // 子应用名称，name值必须与子应用vite.config.ts文件中plugins属性qiankun的第一个参数值一致
      name: "ms_components",
      // 默认会加载这个路径下的html，解析里面的js,结尾的/需要
      entry: isDev ? "//localhost:3456/ms_components/" : "//139.155.178.206/ms_components/",
      // 加载的容器（微应用会显示到这个容器里面，一定要保证主应用中有这个容器）
      container: "#subAppContainerVue3", // 和app.vue配置的节点一致
      // 匹配的路由
      activeRule: "/components", // 访问：http://localhost:5174/vue
    },
    {
      // 子应用名称，name值必须与子应用vite.config.ts文件中plugins属性qiankun的第一个参数值一致
      name: "react_app",
      // 默认会加载这个路径下的html，解析里面的js,结尾的/需要
      entry: "//139.155.178.206/react/",
      // 加载的容器（微应用会显示到这个容器里面，一定要保证主应用中有这个容器）
      container: "#subAppContainerVue3", // 和app.vue配置的节点一致
      // 匹配的路由
      activeRule: "/react", // 访问：http://localhost:5174/vue
    }
    // 再有其他子应用，同理
  ])

  // 添加全局异常捕获
  addGlobalUncaughtErrorHandler(handler => {
    console.log("异常捕获", handler)
  })
}
