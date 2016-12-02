module.exports = {
  entry : './public/app.jsx',
  output :{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    root:__dirname
    ,alias:{
      Greeter:'public/component/Greeter.jsx',
      GreeterMessage:'public/component/GreeterMessage.jsx',
      GreeterForm:'public/component/GreeterForm.jsx',
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
}
