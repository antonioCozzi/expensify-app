const path = require('path')

module.exports = {
     entry: './src/app.js',
     output: {
          path: path.join(__dirname, 'public'), //absolute path: the one for the pjt on your machine. Così facendo, diciamo di prendere la directory automaticamente e di mergiarla con la cartella public
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
               use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
               ]
          }]
     },
     devtool: 'cheap-eval-source-map',//reindirizza, se ci sono errori in console, al componente dove è l'errore
     devServer: {
          contentBase: path.join(__dirname, 'public'),
          historyApiFallback: true
     }
}