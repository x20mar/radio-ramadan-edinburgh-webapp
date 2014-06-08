module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
        temp: {
            src: [ 'temp/*' ]
        },
        dist: {
            src: [ 'build/*' ]
        },    
    },
    copy: {
        dist: {
            files: [  
                {expand : true, dest : 'build/application/img', cwd : 'src/application/img', src : ['**/*.png']},
                {expand : true, dest : 'build/application/fonts', cwd : 'src/libs/fonts', src : ['**/*.*']},
            ]
        }
    },
    cssmin: {
        combine: {
            files: {
                'build/application/compiled.css': ['src/libs/*.css', 'src/application/*.css']
            }
        }
    },
    processhtml: {
        dist: {
            files: {
                'build/index.html': ['src/index.html']
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
                'build/application/compiled.js': ['src/libs/jquery.min.js', 'src/libs/jquery-ui.custom.min.js', 'src/libs/fullcalendar.min.js', 'src/libs/gcal.js', 'src/libs/snap.min.js', 'src/libs/angular.min.js', 'src/libs/angular-bootstrap.min.js', 'src/libs/angular-route.min.js', 'src/libs/angular-snap.min.js', 'src/libs/angular-calendar.js', 'src/libs/angular-media-player.min.js', 'temp/plangular.js', 'temp/main.js']
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
            {expand: true, cwd: 'temp/', src: ['compiled.js'], dest: 'build/application', ext: '.gz.js'},
            {expand: true, cwd: 'temp/', src: ['compiled.css'], dest: 'build/application', ext: '.gz.css'}
        ]
        }
    },
cordovacli: {
    options: {
        path: 'cordivacli-build'
    },
    cordova: {
        options: {
            command: ['create','platform','plugin','build'],
            platforms: ['android'],
            plugins: ['device','dialogs'],
            path: 'cordiva-build',
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
            platforms: ['android']
        }
    },
    add_plugins: {
        options: {
            command: 'plugin',
            action: 'add',
            plugins: [
                'media'
            ]
        }
    },
    build_ios: {
        options: {
            command: 'build',
            platforms: ['ios']
        }
    },
    build_android: {
        options: {
            command: 'build',
            platforms: ['android']
        }
    },
    emulate_android: {
        options: {
            command: 'emulate',
            platforms: ['android'],
            args: ['--target','Nexus5']
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
  grunt.registerTask('mobile', ['default', 'cordovacli']);
};