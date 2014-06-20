module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      build: ['build/']
    },
    concat: {
      basic: {
        src: ['site/js/*.js'],
        dest: 'build/template.js'
      }
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
    copy: {
      main: {
        files: [
          { 
            expand: true, 
            src: ['site/fonts/*'], 
            dest: 'build/fonts/',
            flatten: true, 
            filter: 'isFile'
          },
          {
            expand: true, 
            src: ['site/images/*'], 
            dest: 'build/images/',
            flatten: true, 
            filter: 'isFile'
          },
        ]
      }
    },
    watch: {
      styles: {
        files: ['site/less/**/*.less'], // which files to watch
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['clean', 'less', 'includes']);
  grunt.registerTask('default', ['build', 'concat', 'copy', 'watch']);
};
