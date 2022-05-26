const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@layout-header-background': '#0A91BF', '@primary-color': '#0A91BF' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};