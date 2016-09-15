module.exports = function(grunt) {
    
    require('time-grunt')(grunt);
    var wpt = require("./.wpt.js") || {}; 

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Builds SASS
        sass: {
          dist: {
            files: {
                'app/public/stylesheets/app.css': 'src/scss/app.scss',
                'app/public/stylesheets/app-ie6.css': 'src/scss/app-ie6.scss',
                'app/public/stylesheets/app-ie7.css': 'src/scss/app-ie7.scss',
                'app/public/stylesheets/app-ie8.css': 'src/scss/app-ie8.scss',
            },
            options: {
              //includePaths: ['path/to/included/files'],
              //outputStyle: 'compressed',
              imagePath: '../images'
            }
          }
        },

        scsslint: {
            dist: [
                'src/**/*.scss'
            ]
        },

        // concat: {
        //     dist: {
        //         src: [
        //             'src/javascripts/application.js',
        //             'src/javascripts/application/utils.js',
        //             'src/javascripts/application/*'
        //         ],
        //         dest: 'app/public/javascripts/application.js',
        //     }
        // },

        uglify: {
            // dist: {
            //     src: 'app/public/javascripts/application.js',
            //     dest: 'app/public/javascripts/application.min.js'
            // },
            vendor: {
                options: {
                    preserveComments : true,
                    banner : "<script>",
                    footer : "</script>" 
                },
                files: {
                   'app/views/vendor/loadJS.hbs': ['src/javascripts/vendor/loadJS.js']
                }
            }
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
            },
            all: [
                'Gruntfile.js', 
                'app/app.js',
                'app/data/**/*.js', 
                'app/routes/**/*.js', 
                'src/**/*.js', 
                '!src/**/modernizr-custom.js', 
                '!src/**/vendor/*.js'
            ]
        },

        imagemin: {
            options: {
                optimizationLevel: 3,
                svgoPlugins: [{ removeViewBox: false }],
            },
            dist: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'src/images/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,jpeg,gif,svg}'], // Actual patterns to match
                    dest: 'app/public/images/' // Destination path prefix
                }]
            }
        },

        copy: {
            vendor: {
                files: [
                    {
                        src: 'bower_components/meyer-reset/stylesheets/_meyer-reset.scss',
                        dest: 'src/scss/vendor/_meyer-reset.scss'
                    },
                    {
                        src: 'bower_components/html5shiv/dist/html5shiv.min.js',
                        dest: 'app/public/javascripts/vendor/html5shiv.min.js'
                    },
                    {
                        src: 'bower_components/loadJS/loadJS.js',
                        dest: 'src/javascripts/vendor/loadJS.js'
                    }
                ]
                
            }
        },

        perfbudget: {
            default: {
                options: {
                    url: 'http://express-frontend.herokuapp.com/',
                    key: wpt.key
                }
            }
        },

        svgstore: {
            options: {
                prefix : 'icon-',
                svg: {
                    style: "display: none;"
                }
            },
            default: {
                files: {
                    'app/views/partials/svg_defs.hbs': ['app/public/images/svg/icons/*.svg'],
                },
            },
        },

    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-perfbudget');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    // grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-svgstore');
    
    // Setup vendor assets
    grunt.registerTask('get:vendor',    ['copy:vendor', 'uglify:vendor']);

    // Build assets from src
    // grunt.registerTask('build:css',     ['scsslint:dist', 'sass:dist']);
    grunt.registerTask('build:css',     ['sass:dist']);
    //grunt.registerTask('build:js',      ['jshint:all', 'concat:dist', 'uglify:dist']);
    grunt.registerTask('build:img',     ['imagemin:dist']);
        // Build * ALL THE THINGS! *
        // grunt.registerTask('build',         ['build:css', 'build:js', 'build:img']);
        grunt.registerTask('build',         ['build:css', 'build:img']);

    // Default task during development
    grunt.registerTask('default', ['build:css']);

};
