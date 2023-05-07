module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      [
        '@babel/plugin-transform-runtime',
        {
            absoluteRuntime: false,
            corejs: false,
            helpers: true,
            regenerator: true,
            version: '7.0.0-beta.0',
        },
    ]
    ],
  };
};
