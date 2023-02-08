const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: {
    ...rootMain.core,
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      }
    }
  },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|ts)',
  ],
  addons: [
    ...rootMain.addons,
  ],
  features: {
    storyStoreV7: true
  },
  staticDirs: [{ from: '../../../../styles/', to: '/styles' }],
  webpackFinal: async (config, {configType}) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, {configType});
    }

    return config;
  },
};
