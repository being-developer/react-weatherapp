var webpack = require('webpack');
module.exports = {
  entry : [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ]
  ,externals:{
      jquery:'jQuery'
  }
  ,plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output :{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    root:__dirname,
    alias:{
      Main:'app/component/Main.jsx',
      Nav:'app/component/Nav.jsx',
      About:'app/component/About.jsx',
      Weather:'app/component/Weather.jsx',
      WeatherForm:'app/component/WeatherForm.jsx',
      WeatherMessage:'app/component/WeatherMessage.jsx',
      WeatherAPI:'app/api/WeatherAPI.jsx',
      Example:'app/component/Example.jsx'
    },
    extensions:['','.js','.jsx']
  }
  ,module:{
    loaders:[
      {
        loader:"babel-loader",
        query:{
          presets:['react','es2015']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]
  }
  ,devtool:'cheap-module-eval-source-map'
}
