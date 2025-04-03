export default {
  entry: './index.mjs',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    parser: {
      javascript: {
        importMeta: false,
        url: false,
      },
    },
  },
}
