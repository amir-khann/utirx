const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@layout-header-background': '#6B63FF', '@primary-color': '#6B63FF' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};