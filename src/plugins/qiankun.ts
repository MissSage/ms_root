// import { useUserStore } from '../store'
import { registerMicroApps, addGlobalUncaughtErrorHandler } from "qiankun"
export const subApps = [
  {
    title: "vue3vite子应用",
    // 子应用名称，name值必须与子应用vite.config.ts文件中plugins属性qiankun的第一个参数值一致
    name: "vue3",
    routeName: 'vue',
    // 默认会加载这个路径下的html，解析里面的js,结尾的/需要
    entry: "/vue3/",
    // 加载的容器（微应用会显示到这个容器里面，一定要保证主应用中有这个容器）
    container: "#subAppContainerVue3", // 和app.vue配置的节点一致
    // 匹配的路由
    activeRule: "/vue" // 访问：http://localhost:5174/vue
  },
  {
    title: "ms组件库",
    // 子应用名称，name值必须与子应用vite.config.ts文件中plugins属性qiankun的第一个参数值一致
    name: "ms_components",
    routeName: 'components',
    // 默认会加载这个路径下的html，解析里面的js,结尾的/需要
    entry: "/ms_components/",
    // 加载的容器（微应用会显示到这个容器里面，一定要保证主应用中有这个容器）
    container: "#subAppContainerVue3", // 和app.vue配置的节点一致
    // 匹配的路由
    activeRule: "/components" // 访问：http://localhost:5174/vue
  },
  {
    title: "react子应用",
    // 子应用名称，name值必须与子应用vite.config.ts文件中plugins属性qiankun的第一个参数值一致
    name: "react_app",
    components: 'react',
    // 默认会加载这个路径下的html，解析里面的js,结尾的/需要
    entry: "/ms_react/",
    // 加载的容器（微应用会显示到这个容器里面，一定要保证主应用中有这个容器）
    container: "#subAppContainerVue3", // 和app.vue配置的节点一致
    // 匹配的路由
    activeRule: "/react" // 访问：http://localhost:5174/vue
  }
  // 再有其他子应用，同理
]
// 注册子应用
registerMicroApps(subApps)

// 添加全局异常捕获
addGlobalUncaughtErrorHandler(handler => {
  console.log("异常捕获", handler)
})
