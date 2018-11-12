module.exports = {
  components: 'src/components/**/*.js',
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.(css|scss)$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoader: 1,
                modules: true,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        }
      ]
    }
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        }
      ]
    }
  }
}
