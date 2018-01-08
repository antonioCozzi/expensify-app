const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test'){
     require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
     require('dotenv').config({ path: '.env.development' })
}

// process.env.NODE_ENV

module.exports = (env) => {
     const isProduction = env === 'production'
     const CSSExtract = new ExtractTextPlugin('styles.css')

     return {
          entry: './src/app.js',
          output: {
               path: path.join(__dirname, 'public', 'dist'), //absolute path: the one for the pjt on your machine. Così facendo, diciamo di prendere la directory automaticamente e di mergiarla con la cartella public
               filename: 'bundle.js'
          },
          module: {
               rules: [{
                    loader: 'babel-loader',
                    test: /\.js$/, //ogni volta che vedi un qualcosa che finisce con .js, eseguilo con babel-loader
                    exclude: /node_modules/ //...tranne i node_modules (vengono esclusi dal compilatore)
               },
               {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                         use: [
                              {
                                   loader: 'css-loader',
                                   options: {
                                        sourceMap: true
                                   }
                              },
                              {
                                   loader: 'sass-loader',
                                   options: {
                                        sourceMap: true
                                   }
                              }
                         ]
                    })
               }]
          },
          plugins: [
               CSSExtract,
               new webpack.DefinePlugin({
                    'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                    'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                    'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                    'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                    'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                    'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
               })
          ],
          devtool: isProduction ? 'source-map' : 'inline-source-map',//reindirizza, se ci sono errori in console, al componente dove è l'errore
          devServer: {
               contentBase: path.join(__dirname, 'public'),
               historyApiFallback: true,
               publicPath: '/dist/'
          }
     }
}