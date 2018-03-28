### 已完成
本demo实现了，用yarn安装各个模块，TypeScript+jQuery+VSCode的整合

### 参考
http://www.cnblogs.com/faunjoe88/p/7160650.html

### 搭建环境
```
tsc --init
yarn
yarn add lite-server concurrently @types/jquery@3.3.1 @types/bootstrap@4.0.0

```

### 运行
1. 用lite-server实时编译和刷新脚本
```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
    "lite": "lite-server",
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
```
1. 用chrome debug插件在VSCode中直接调试ts
```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "chrome",
			"request": "launch",
			"name": "启动 Chrome 并打开 localhost",
			"url": "http://localhost:9222",
			"webRoot": "${workspaceFolder}/dist",
			"sourceMaps": true,
			"port": 9222
		}
	]
}
```
