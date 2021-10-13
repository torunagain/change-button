const path = require('path');

const webpackConfigBase = {

     //module此处为loader区域，一般文件内容解析，处理放在此处，如babel，less,postcss转换等
     module: {
       rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node-modules/,
          loader: 'babel-loader',
          options: {
              cacheDirectory: true,
              cacheCompression: false
          }
      },
      //   {
      //     test: /\.(js|jsx)$/,
      //     exclude: /node-modules/,
      //     loader: 'babel-loader',
      //     options: {
      //         cacheDirectory: true,
      //         cacheCompression: false,
      //         presets: ['@babel/preset-react'],
      //     }
      // },
    //   {
    //     test: /\.(ts|tsx)$/,
    //     exclude: /node-modules/,
    //     use: [
    //         'babel-loader', 'ts-loader'
    //     ]
    // },
         {
           test: /\.css$/,
           use: [
             'style-loader',
             'css-loader',
             {
               loader: 'postcss-loader',
               options: {
                 ident: 'postcss',
                 plugins: (loader) => [
                   require('autoprefixer')()
                 ],
               }
             }
           ]
         }
       ]
     }
   }
   module.exports = webpackConfigBase