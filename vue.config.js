module.exports = {
  transpileDependencies: [
    '@tool-belt'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/store-of-medical-education-programs/'
    : '/'
}
