const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)
module.exports = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/preset-typescript',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-xstate-addon/preset",
    "storybook-dark-mode",
  ],
  staticDirs: ['../assets'],
  framework: "@storybook/react",
  previewHead: (head) => (`
    ${head}
    <style>
      @font-face {
        font-family: 'exocet';
        src: url('./exocet.ttf');
      }
      body {
        color: white;
        height: 100vh;
        background: linear-gradient(
      200.96deg, #000000 -29.09%, #262626 51.77%, #000000 129.35%);
        font-family: exocet;
        margin: 0 !important;
        padding: 0 !important;
        background: #1e1e1e;
        background-size:16px 16px;
      }
      ::-webkit-scrollbar {
        width: 0px !important;
      }
    </style>
  `),
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        "presets": ["@babel/preset-env", "@babel/preset-typescript"],
        "plugins": [
          ["@emotion",
            {
              "autoLabel": "dev-only",
              "labelFormat": "[filename]--[local]",
              "cssPropOptimization": true
            }
          ],
        ]
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        }
      }
    };
  },
}
