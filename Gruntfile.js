module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            temp: {
                src: [ 'temp/*' ]
            },
            dist: {
                src: [ 'cordovacli-build/www/*' ]
            },    
        },
        copy: {
            dist: {
                files: [  
                    {expand : true, dest : 'cordovacli-build/www/application/img', cwd : 'src/application/img', src : ['**/*.png']},
                    {expand : true, dest : 'cordovacli-build/www/application/fonts', cwd : 'src/libs/fonts', src : ['**/*.*']},
                ]
            }
        },
        cssmin: {
            combine: {
                files: {
                    'cordovacli-build/www/application/compiled.css': ['src/libs/*.css', 'src/application/*.css']
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'cordovacli-build/www/index.html': ['src/index.html']
                }
            }
        },
        ngmin: {
            main: {
                src: ['src/application/main.js'],
                dest: 'temp/main.js'
            },
            plangular: {
                src: ['src/libs/plangular.js'],
                dest: 'temp/plangular.js'
            },
        },
        uglify: {
            dist: {
                files: {
                    'cordovacli-build/www/application/compiled.js': ['src/libs/jquery.min.js', 'src/libs/jquery-ui.custom.min.js', 'src/libs/fullcalendar.min.js', 'src/libs/gcal.js', 'src/libs/snap.min.js', 'src/libs/angular.min.js', 'src/libs/angular-bootstrap.min.js', 'src/libs/angular-route.min.js', 'src/libs/angular-snap.min.js', 'src/libs/angular-calendar.js', 'src/libs/angular-media-player.min.js', 'temp/plangular.js', 'temp/main.js']
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                files: [
                    // Each of the files in the src/ folder will be output to
                    // the dist/ folder each with the extension .gz.js
                    {expand: true, cwd: 'temp/', src: ['compiled.js'], dest: 'cordovacli-build/www/application', ext: '.gz.js'},
                    {expand: true, cwd: 'temp/', src: ['compiled.css'], dest: 'cordovacli-build/www/application', ext: '.gz.css'}
                ]
            }
        },
        cordovacli: {
            options: {
                path: 'cordovacli-build'
            },
            cordova: {
                options: {
                    command: ['create','platform','plugin','build'],
                    platforms: ['android', 'ios'],
                    plugins: ['device','dialogs'],
                    path: 'cordovacli-build',
                    id: 'org.radioramadanedinburgh.app',
                    name: 'Radio Ramadan'
                }
            },
            create: {
                options: {
                    command: 'create',
                    id: 'org.radioramadanedinburgh',
                    name: 'app'
                }
            },    
            add_platforms: {
                options: {
                    command: 'platform',
                    action: 'add',
                    platforms: ['android', 'ios']
                }
            },
            add_plugins: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: ['media','inappbrowser']
                }
            },      
            build_android: {
                options: {
                    command: 'build',
                    platforms: ['android']
                }
            },
            build_ios: {
                options: {
                    command: 'build',
                    platforms: ['ios']
                }
            },
            emulate_android: {
                options: {
                    command: 'emulate',
                    platforms: ['android'],
                    args: ['--target','Nexus_S']
                }
            }
        }
    });
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-cordovacli');
    // Default tasks.
    grunt.registerTask('default', ['clean', 'copy', 'ngmin', 'uglify', 'cssmin', 'processhtml']);
    grunt.registerTask('mobile-init', ['cordovacli:create', 'cordovacli:add_platforms', 'cordovacli:add_plugins']);
    grunt.registerTask('mobile-build-android', ['default', 'cordovacli:build_android']);
    grunt.registerTask('mobile-build-ios', ['default', 'cordovacli:build_ios']);
    grunt.registerTask('mobile-emulate-android', ['cordovacli:emulate_android']);
};