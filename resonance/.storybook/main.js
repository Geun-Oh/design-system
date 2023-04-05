const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')
module.exports = {
  webpackFinal: async config => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return {
      ...config,
      resolve: {
        ...config.resolve,
        ...config.resolve.plugins.push(new TsconfigPathsPlugin({}))
      }
    };
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};