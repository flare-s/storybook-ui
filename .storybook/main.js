module.exports = {
  // stories: [
  //   "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  // ],
  stories: ['../src/components/**/*.stories.js'],

  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',

  ],
  features: {
    postcss: false,
    interactionsDebugger: true,
  },
  framework: "@storybook/svelte",
  core: {
    builder: "@storybook/builder-webpack4",
  },
};
