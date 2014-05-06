// Generated on 2014-04-15 using generator-webapp 0.4.9
'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        app: 'public/assets'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        php: {
            options: {
                hostname: 'localhost',
                port: 8000,
                // open: true,
                base: 'public/',
                keepalive: true
            },
            watch: {
                options: {
                    livereload: true
                }
            }
        },

        watch: {
            js: {
                files: ['<%= config.app %>/js/{,*/}*.js', ],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['<%= config.app %>/sass/{,*/}*.scss'],
                tasks: ['compass']
            },
            css: {
                files: ['<%= config.app %>/css/{,*/}*.css'],
                options: {
                    livereload: true
                }
            },
            laravel: {
                files: [
                    'app/views/**',
                    'app/routes.php',
                ],
                options: {
                    livereload: true
                }
            },
        },

        compass: {
            compile: {
                options: {
                    require: 'bootstrap-sass',
                    sassDir: '<%= config.app %>/sass',
                    cssDir: '<%= config.app %>/css',
                    raw: 'output_style= :compressed\n'
                }
            }
        },

        concurrent: {
            target: {
                tasks: ['php', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }


    });

    grunt.registerTask('default', function() {
        grunt.task.run([
            'compass',
            'concurrent'
        ]);
    });

};