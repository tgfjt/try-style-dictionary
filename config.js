// https://amzn.github.io/style-dictionary/#/config
module.exports = {
  source: ['tokens/**/*.js'],

  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    web: {
      transformGroup: 'web',
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [
        {
          format: "javascript/es6",
          destination: "variables.js"
        },
        {
          destination: 'variables.d.ts',
          format: 'typescript/es6-declarations'
        }
      ]
    },
  }
}
