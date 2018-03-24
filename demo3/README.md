### 参考
https://www.cnblogs.com/xuanhun/p/6027624.html

### 依赖环境
**VSCode**  
```	
choco install -y vscode
```	
**node.js**  
```
choco install -y nodejs
```
**几个依赖的npm包**  
concurrently——Node包，用于并发执行命令  
lite-server——Node包，轻量级的Node开发服务器  
```shell
npm init
npm i --save-dev concurrently
npm i --save-dev lite-server
```
注：
1. --save-dev会将依赖关系保存到package.json
2.  "tsc -w"——以监控模式运行TypeScript编译器。后台始终保持进程。一旦TypeScript文件变化即会重编译
3.  "dependencies"——生产环境中需要的依赖包
4.  "devDependencies"——开发中要使用的安装包

**修改package.jsonn的scripts**  
```json
  "scripts": {
    "start": "concurrently \"npm run tsc:w\" \"npm run lite\"",
    "lite": "lite-server",
    "tsc:w": "tsc -w"
  },
  ```
**配置tsconfig.json** 
**配置bs-config.json** 
### 开始
npm run start