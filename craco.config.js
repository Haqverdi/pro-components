const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

process.env.BROWSER = 'none';

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          'src/theme/antd.customize.less'
        ),
      },
    },
  ],
  // webpack: {
  //   alias: {
  //     '@ant-design/icons/lib/dist$': path.join(__dirname, 'src/theme/icons.js'),
  //   },
  //   configure: webpackConfig => webpackConfig,
  // },
};
