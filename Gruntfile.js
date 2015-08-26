module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    jsonlint: {
      manifests: './{bower,package}.json'
    },
    scsslint: {
      options: {
        config: './config/scss-lint.yml'
      },
      src: './src/**/*.scss'
    },
    copy: {
      src: {
        cwd: './src',
        dest: './dist',
        expand: true,
        src: '**/*.scss'
      }
    },
    release: {
      options: {
        additionalFiles: './bower.json',
        beforeRelease: 'copy',
        commitMessage: 'Release <%= version %>',
        tagMessage: ''
      }
    }
  });

  require('load-grunt-tasks')(grunt, {
    pattern: [
      'grunt-contrib-*',
      'grunt-jsonlint',
      'grunt-release',
      'grunt-scss-lint'
    ]
  });

  grunt.registerTask('default', [
    'jsonlint',
    'scsslint'
  ]);
};