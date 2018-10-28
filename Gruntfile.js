module.exports = function(grunt) {

    // Project configuration.
    //https://gruntjs.com/configuring-tasks
    //https://gruntjs.com/getting-started
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/public/**/*.js'],
                dest: 'src/public/dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'src/public/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        intern: {
	    options: {
                //WARNING: excludeInstrumentation is deprecated, use coverage instead.
		//excludeInstrumentation: true,
		//require: 'app/Block.js',
		suites: [ 'tests/unit/*.js', 'tests/integration/*.js' ],
		reporters: [ 'runner' ]
	    },
	    node: {
		options: {}
	    },
	    browser: {
		options: {
		    environments: 'chrome'
		}
	    }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });


    

    // Load the plugin that provides the "uglify" task.
    //https://davidburgos.blog/how-to-fix-grunt-contrib-uglify-for-es6/
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    
    
    // Default task(s).
    grunt.registerTask('BuildMessage', 'Building project...', function() {
        grunt.log.write('This is just a Build Message from BuildMessage task...').ok();
    });

    // Loading using a local git copy
    grunt.loadNpmTasks('intern');
    
    // Register a test task
    grunt.registerTask('test', ['intern:node']);
    
    // Register a task for webdriver tests
    grunt.registerTask('test:browser', ['intern:browser']);
    
    grunt.registerTask('default', ['test','concat','uglify','BuildMessage']);
    
}
