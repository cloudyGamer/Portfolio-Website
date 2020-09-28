const path = require('path');
console.log(path.join(__dirname,'public'));
console.log(__dirname);
module.exports = (env) => {
     const ExtractTextPlugin = require('extract-text-webpack-plugin');
     const CSSExtract = new ExtractTextPlugin('styles.css');
     const isProduction = env === 'production';
     console.log('env',env);
     return {
               entry : ['regenerator-runtime/runtime','core-js','./src/app.js'],
              output : {
                  path: path.join(__dirname,'public'),
                  filename: 'bundle.js'
              },

               module: {
                  rules: [{
                          loader: 'babel-loader',
                          test: /\.js$/,  
                          exclude: /node_modules/
               },{
                   test:/\.s?css$/,
                   use: CSSExtract.extract({
                        use: [
                             {
                                  'loader':'css-loader',
                                  options: {
                                       sourceMap: true
                                  }
                             },
                             {
                                  'loader':'sass-loader',
                                  options: {
                                       sourceMap: true
                                  }
                             }
                        ]
                   })
                   }]
               },
               plugins: [
                    CSSExtract
               ],
               devtool: isProduction ?'source-map' : 'inline-source-map',
               devServer: {contentBase: path.join(__dirname,'public'),
                           historyApiFallback: true
                           }
                    };
};


//Users/pol/Documents/react-course-projects/Indecision-app