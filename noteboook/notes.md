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



##Tree-shaking
只支持es module的引用，require不支持
在package.json里对sideEffects进行配置

##Development和Production模式的区分和打包
webpack common来提取webpack配置中共有的部分
webpacl-merge 把共有配置和线上配置进行合并

##code spliting
打包带来的问题：打包后的文件会很大，加载时间很长；
当业务逻辑改变后，用户重新访问页面，会重新加载一个大型文件。
import _ from 'lodash';
window._=_;
然后在index.js里只写业务逻辑
Code Spliting在没有webpack出现以前也有
webpack的插件可以非常容易帮我们实现code spliting
同步代码做在optimization里进行配置        
splitChunks:{
            chunks:'all'
        }
splitChunks做异步代码分割（import)的时候，无需做任何配置，会自动做代码分割
会把代码分割到0.js里

##SplitChunksPlugin
/*webpackChunkName:"loadsh"*/使用魔法注释
chunks: async all 两个参数
cacheGroups:vendors{} //打包到vendors这个组中
minsize 大于minsize的时候才做代码的分割
minChunks: 1和2
automaticNameDelimiter:"~"
通过借助import异步加载代码，可以使页面加载更快
##打包分析，Preloading，Prefecting
You can generate the required JSON file for this tool by running webpack --profile --json > stats.json
需要关注的是coverage，在webpack打包过程中需要考虑的是多些异步代码，这样可以时加载的js体积变小
同步的代码只能提升缓存，对性能提升意义不大
##css代码分割
MiniCSSExtractPlugin
webpack打包时，默认会把css打包到js里

##webpack和cacheing



