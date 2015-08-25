module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      src: {
        cwd: 'src',
        dest: 'dist',
        expand: true,
        src: '**/*.{css,sass,scss}'
      }
    },
    release: {
      options: {
        additionalFiles: 'bower.json',
        beforeRelease: 'copy',
        commitMessage: 'Release <%= version %>',
        tagMessage: ''
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('default', []);
};