module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': 'webpack5',
  },
  'staticDirs': ['../public'],
  'webpackFinal': (config) => {
    config.resolve.fallback = {
      'constants': require.resolve('constants-browserify'),
      'fs': false,
      'http': require.resolve('stream-http'),
      'https': require.resolve('https-browserify'),
      'path': require.resolve('path-browserify'),
      'stream': require.resolve('stream-browserify'),
      'timers': require.resolve('timers-browserify'),
      'zlib': require.resolve('browserify-zlib'),
      'stack-utils': false,
    };
    return config;
  },
}