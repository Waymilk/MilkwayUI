/*
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-23 16:13:22
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-07 13:59:45
 */
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import InputDemo from './components/InputDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
import { h } from 'vue'

const md = string => {
  return h(Markdown,{content:string,key:string})
}
const history  = createWebHashHistory()
export const router  = createRouter({
  history,
  routes:[
    {path:'/',component: Home},
    {path:'/doc',component: Doc,children:[
      {path:'intro',component: md(intro)},
      {path:'install',component: md(install)},
      {path:'get-started',component: md(getStarted)},
      {path:'switch',component: SwitchDemo},
      {path:'button',component: ButtonDemo},
      {path:'input',component: InputDemo},
      {path:'dialog',component: DialogDemo},
      {path:'tabs',component: TabsDemo},
    ]}
  ]
})