This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 分析包大小

- 安装插件 `yarn add source-map-explorer`
- 然后在`package.json`中，将以下行添加到`scripts`中：

```json
  "analyze": "source-map-explorer build/static/js/main.*"
```

- 分析 `bundle`(包) 运行生产构建然后运行分析脚本

```json
  npm run build
  npm run analyze
```

> 几种方式使用样式

- `jsx` 标签中使用样式

```js
  <p style={{color: 'red'}}></p>
```

- 外部引入样式

```js
  <p className={"title"}></p>
```

- `render` 中定义变量在 `jsx` 中使用

```js
  let title = {
    color: 'red'
  }
  <p style={title}></p>
```

### 组件之间通讯

> 父子之间赋值

- 

> 子父之间赋值


> 兄弟之间赋值

- 实现方式
  - 使用 `React Context` 
  - 使用如何传值进行
![avatar](/src/assets/images/content.png)
