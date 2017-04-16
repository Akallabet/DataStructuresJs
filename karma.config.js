module.exports = function(config) {
  config.set({
    // ... normal karma configuration
    files: [
      // only specify one entry point
      // and require all tests in there
      'src/index.test.js'
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      // add webpack as preprocessor
      'src/index.test.js': ['webpack']
    },
    reporters: ['mocha'],
    browsers: ['Chrome'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ]
  });
};
