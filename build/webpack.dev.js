const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const webpack=require('webpack')
module.exports={
    // development devtool:'cheap-module-eval-source-map',
    // production devtool:'cheap-module-source-map'
    mode:'development',
    devtool:"cheap-module-eval-source-map",   


    entry:{
        // lodash:'./src/lodash.js',
        main:'./src/index.js',
        
        // sub:'./src/index.js'
    },
    devServer:{
        contentBase:'./dist' ,
        open:true, //自动打开浏览器并且访问浏览器地址    
        hot:true,               //开启HMR
        hotOnly:true,         
    },
    module:{
        rules:[
           { test: /\.js$/, 
            exclude: /node_modules/,    //在node modules里的代码不进行转义
            loader: "babel-loader",
            options:{
                presets:[
                    ['@babel/preset-env',{
                            "targets": {
                            "edge": "17",
                            "firefox": "60",
                            "chrome": "67",
                            "safari": "11.1",
                            },
                            "useBuiltIns": "usage",
                        }
                ]]} 
        },   
            {
            test:/\.jpg$/,
            use:{
                loader:'url-loader',
                options:{
                    //place holder
                    name:'[name]_[hash].[ext]',
                    outputPath:'images/',    
                    limit:2048,     //limit，超过2kb就打包
                }
            }
        },{
            test:/\.scss$/,
            //使用css-loade和style-loader进行打包
            use:[
                'style-loader',         //使用css-loade和style-loader进行css打包
                // 'css-loader',
                {
                    loader:'css-loader',
                    options:{                  
                        importLoaders:2,      //保证在scss里引入的scss文件也可以执行loader
                        modules:true
                    }
                },
                'sass-loader',              //使用sass-loader来进行scss预处理打包
                'postcss-loader',
            ]   
            },{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader',                
                'postcss-loader',
            ]   
            },{
            test:/\.(eot|ttf|svg)$/,          //使用file-loader来打包字体文件，打包第三方字体
            use:{
                loader:'file-loader',      
            }
        }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template:"src/index.html"    //使用htmlwebpackplugin的template来指定模板，在打包之前运行
    }),new CleanWebpackPlugin(), //在打包打包之前运行，先清除文件
    new webpack.HotModuleReplacementPlugin(),
],    
    optimization:{
        usedExports:true,     //tree-shaking;
        splitChunks:{
            chunks:'all',
        }
    },
    output:{
        // filename:'bundle.js',
        // publicPath:'http://cdn.com.cn',    //使用publicpath来进行公共路径的配置
        publicPath:'./',
        filename:'[name].js',
        path:path.resolve(__dirname,'../dist')
    }
}