const path=require('path')
module.exports={
    mode:'development',
    entry:{
        main:'./src/index.js',
    },
    module:{
        rules:[{
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
            test:/\.(eot|ttf|svg)$/,          //使用file-loader来打包字体文件，打包第三方字体
            use:{
                loader:'file-loader',      
            }
        }
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}