const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  "core": {
    "builder": {
      "name": "@storybook/builder-vite",
      "options": {
        viteConfigPath: "vite.storybook.config.ts"
      }
    }
  },  
  docs: {
    autodocs: "tag",
  },
};
export default config;
