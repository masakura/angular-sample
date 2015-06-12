(function(){
  'use strict';

  module.exports = {
    bower: {
      files: ['bower.json'],
      tasks: ['wiredep']
    },
    js: {
      files: ['<%= paths.app %>/{,directives,service,components}/{,*/}*.js'],
      tasks: ['jshint', 'yuidoc'],
      options: {
        livereload: true
      }
    },
    jstest: {
      files: ['karma/**/*.js'],
      tasks: ['test:watch']
    },
    gruntfile: {
      files: ['Gruntfile.js']
    },
    styles: {
      files: ['<%= paths.app %>/styles/{,*/}*.css'],
      tasks: ['newer:copy:styles', 'autoprefixer']
    }
  };
})();