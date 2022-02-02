module.exports = {
    publicPath:"",
    pages: {
      index: {
        entry: 'src/index/main.js',
        template: 'public/index.html',
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      users: {
        entry: 'src/users/main.js',
        template: 'public/users.html',
        filename: 'users.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Users Page',
        chunks: ['chunk-vendors', 'chunk-common', 'users']
      },
    }
  }