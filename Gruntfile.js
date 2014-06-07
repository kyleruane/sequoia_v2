module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      build: ['build/']
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "build/css/style.css": "site/less/style.less"
        }
      }
    },
    includes: {
      build: {
        cwd: 'site',
        src: [ '*.html', 'pages/*.html' ],
        dest: 'build/',
        options: {
          flatten: true,
          includePath: 'site/include'
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'less', 'includes']);
  grunt.registerTask('default', ['build', 'watch']);
};
