module.exports = function (api) {
  api.cache.never();
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.BABEL_ENV === 'production'
  ) {
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./'],
            extensions: [
              '.ios.js',
              '.android.js',
              '.js',
              '.ts',
              '.tsx',
              '.json',
            ],
          },
        ],
        ['transform-remove-console', {exclude: ['error', 'warn', 'info']}],
        // ["@babel/plugin-transform-flow-strip-types"],
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        // ["@babel/plugin-proposal-class-properties", { "loose": true }]
      ],
    };
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        },
      ],
      // ["@babel/plugin-transform-flow-strip-types"],
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      // ["@babel/plugin-proposal-class-properties", { "loose": true }]
      'react-native-reanimated/plugin',
    ],
  };
};
