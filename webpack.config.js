const path = require('path');
const HTMLWebpackPlugin= require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin=require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin=require('terser-webpack-plugin');


const isDev=process.env.NODE_ENV==='development';
const isProd=!isDev;
const optimization=()=>{
const config= {
   splitChunks: {
  chunks:'all'
}
} 
if (isProd){
  config.minimizer=[
    new OptimizeCssAssetWebpackPlugin(),
    new TerserWebpackPlugin()
  ]


}
return config
}

module.exports={
  context:path.resolve(__dirname,'src'),
  mode:'development',
  entry: {
  main: ["@babel/polyfill",'./index.jsx'] ,
 analytics:'./analytics.js'
    },
 
output:{
    filename:'[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
},
resolve:{
extensions:['.js','.json','.png'],
alias:{
  '@models':path.resolve(__dirname,'./src/models'),
  '@':path.resolve(__dirname,'src')
}
},
optimization: optimization(),
devServer:{
  port:4200,
  hot:isDev
},
plugins:[
  new HTMLWebpackPlugin( {
 template:'./index.html',
 minify:{
collapseWhitespace:isProd
 }
    },
  ),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([
    {
      from:path.resolve(__dirname,'src/favicon.ico'),
      to:path.resolve(__dirname,'dist')
    }
  ]),
  new MiniCssExtractPlugin({
    filename:'[name].[hash].css'
  }),
 
],
module:{
  rules:[
    {
      test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
             hmr:isDev,
             reloadAll:true
            },
          },
          'css-loader',
        ],
    },
    {   
      test:/\.(png|jpg|svg|gif)$/,
      use:['file-loader'],
    },
    {
      test:/\.(ttf|woff|woff2|eot)$/,
      use:['file-loader'],
      },
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader:{
          loader:'babel-loader',
          options:{
            presets :[
            '@babel/preset-env'
            ],
            plugins:[
              '@babel/plugin-proposal-class-properties'
            ]
          }
        } 
      },
      { test: /\.jsx$/, 
        exclude: /node_modules/, 
        loader:{
          loader:'babel-loader',
          options:{
            presets :[
              '@babel/preset-react',
            ],
            
          }
        } 
      }
  ]
}

}