#Webpack---模块打包工具
##loader
官网可以查询到相应的插件
file-loader ---处理静态资源

##css-module
具体的loaders可以查看官网解决
##plugins--让打包更便捷
HTMLWEBPACKplugin:会在打包结束后自动生成一个html文件，并且把打包生成的js文件自动引入到html文件中
##sourceMap
现在我们在控制台里知道了dist目录下main.js第96行出错，
sourceMap是一个映射关系，他知道main.js和src/index.js下面的映射
development devtool:'cheap-module-eval-source-map',
production devtool:'cheap-module-source-map'

##webpack-dev-server
添加webpack-dev-server可以自动刷新和启动服务器，一旦代码发生改变可以自动进行打包

##HMR hot moudule replacement


##babel
babel loader是webpack和代码之间的通信
npm install @babel/preset-env --save-dev
##babel-polyfill
import "@babel/polyfill"
