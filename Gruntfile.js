module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bumpup: ['package.json', 'bower.json'],
    tagrelease: {
      file: 'package.json',
      commit:  true,
      message: 'Release %version%',
      prefix:  '',
      annotate: false
    }
  });

  grunt.loadNpmTasks('grunt-tagrelease');
  grunt.loadNpmTasks('grunt-bumpup');

  grunt.registerTask('default', []);
  grunt.registerTask('release', function (type) {
    type = type ? type : 'patch';
    grunt.task.run('bumpup:' + type);
    grunt.task.run('tagrelease');
  });
};