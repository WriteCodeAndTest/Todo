module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      { importSource: '@emotion/react', runtime: 'automatic' },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@emotion',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-private-methods'],
    ['@babel/plugin-proposal-private-property-in-object'],
    '@babel/plugin-transform-runtime',
  ],
  assumptions: {
    setPublicClassFields: false,
  },
};
