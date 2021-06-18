## 开始

安装完本组件库之后在main.js中引入样式文件
```javascript
import 'milkway-ui/dist/lib/milkway-ui.css'
```

Vue单文件组件中使用

```vue
<template>
  <Button>按钮</Button>
</template>

<script>
import {Button} from 'milkway-ui'
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>
```