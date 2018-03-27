module.exports = function( grunt ) {

  grunt.initConfig({
    uglify : {
      options : {
        mangle : false
      },
      my_target : {
        files : {
          // 'assets/js/min/script.min.js' : [ 'assets/js/script.js' ]
          'assets/js/min/script.min.js' : [ 'assets/js/script.js' ]
        }
      }
    }, // uglify

    // ## ## ## ## CSS - SASS ## ## ## ## //
    sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: [{
              cwd: "assets/sass/",
              src: "*.{scss,sass}",
              dest: "assets/css/",
              expand: true,
              ext: ".css"
            }]
        }
    }, // sass

    cssmin: {
        target: {
          files: {
            'assets/css/style.min.css': 'assets/css/style.css'
          }
        }
    }, // css min

    // ## ## ## ## HTML - JADE ## ## ## ## //
    jade: {
      compile: {
        options: {
          client: false,
          pretty: true,
          data: {
            debug: true,
            timestamp: "<%= grunt.template.today() %>"
          }
        },
        files: [{
          cwd: "jade",
          src: "**/*.jade",
          dest: "",
          expand: true,
          ext: ".html"
        }]
      }
    }, // jade

    // ## ## ## ## SERV ## ## ## ## //

    watch: {
      options: {
        livereload: true
      },

      // JS
      js: {
        files: ['assets/js/*.{js,coffee}'],
        // tasks: ["coffee", "uglify"]
        tasks: ["uglify"]
      },

      // CSS
      css: {
        files: ['assets/sass/*.{scss,sass}'],
        tasks: ['sass', 'cssmin']
      },

      // HTML
      html: {
        files: "jade/**/*.jade",
        tasks: "jade"
      }

    }, // watch

    connect: {
      server: {
        options: {
          port: 9090,
          base: '.',
          hostname: "localhost",
          livereload: true,
          open: true
        }
      }
    } // connect

  }); // grunt.initConfig

  // JS
  // grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // CSS
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // HTML
  grunt.loadNpmTasks('grunt-contrib-jade');
  // SERV
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Task Defult
  // grunt.registerTask( 'default', [ 'coffee', 'uglify', 'sass', 'cssmin', 'jade'] );
  grunt.registerTask( 'default', [ 'uglify', 'sass', 'cssmin', 'jade'] );
  // Task Custom
  grunt.registerTask( 'w', [ 'connect', 'watch' ] );

};
