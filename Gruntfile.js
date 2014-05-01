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



        /*php: {
            dev: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    open: true,
                    base: 'public',
                    //livereload: '<%= connect.options.livereload %>'
                },
                watch: {
                    options: {
                        livereload: 45678
                    },
                }
            }
        },*/

        php: {
            options: {
                hostname: 'localhost',
                port: 8000,
                //open: true,
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
                files: ['<%= config.app %>/js/{,*/}*.js'],
                options: {
                    livereload: true //35729
                }
            },
            styles: {
                files: ['<%= config.app %>/css/{,*/}*.css'],
                task: ['php:dev'],
                options: {
                    livereload: true //35729
                }
            },
            views: {
                files: ['public/index.php'],
                options: {
                    livereload: true //35729
                }
            },
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


    grunt.registerTask('default', [
        'concurrent:target'
    ]);

};