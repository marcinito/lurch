
const HtmlWebpackPlugin = require("html-webpack-plugin")

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const path=require("path")

module.exports={
    mode:"development",
entry:{
    main:'./src/main.js',
   
      
    

    

    
},
output:{
    path:path.resolve(__dirname,"dist"),
    filename:'[name]-bundle.js'
},
plugins:[
    new HtmlWebpackPlugin({
       template:'./src/index.html',
       filename:"index.html",
       inject:"body",
       chunks:['main']

    }),


 new FaviconsWebpackPlugin('./src/stylesImage/favicon.png')
],
module: {
    rules: [
 
   
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      
  
      {
        test:/\.html$/,
        
          loader:'html-loader'
        
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        use:[
          {
          loader:'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'fonts/'
          }
          }

        ]
      },

 
    ],
  },

devServer:{
    static:path.join(__dirname,"dist"),
    port:3001,
    open:true,
    hot:true,
    compress:true,
  

},
performance: {
  hints: false,
  maxEntrypointSize: 512000,
  maxAssetSize: 512000
}
}
