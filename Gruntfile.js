module.exports = function(grunt) {
    //Project configuration.
    //https://gruntjs.com/configuring-tasks
    //https://gruntjs.com/getting-started
    //require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),                
        run: {
            eslint: {
                cmd: './node_modules/.bin/eslint',
                args: [
                    ' *.js '
                ]
            },
            jslint : {
                cmd: './node_module/.bin/jslint',
                args:[
                    'src/main.js'
                ]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            src_client_sources: {
                src: ['src/client/**/*.js'],
                dest: 'client_dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            src_client_sources: {
                files: {
                    'client_dist/<%= pkg.name %>.min.js': ['<%= concat.src_client_sources.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true,
                     src: ['client_dist/*min*.js'],
                     dest: 'client_public',
                     filter: 'isFile'},
                ],
            },
        },
        clean: {
            client_dist: ['client_dist/**'],
            client_public: ['client_public']
            //contents: ['path/to/dir/*']
            //subfolders: ['path/to/dir/*/'],
            //css: ['path/to/dir/*.css'],
            //all_css: ['path/to/dir/**/*.css']
        },
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**/*.ts"]
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

    grunt.loadNpmTasks('grunt-jslint');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-ts");
    

    // registering tasks
    grunt.registerTask('jslint', [
         'run:jslint']);
    grunt.registerTask('eslint', [
        'run:eslint'
    ]);

    //eslink as a grunt taks was a problem for me
    //lets running it as grunt run:eslint
    //grunt.registerTask('eslint', 'Run EsLint', ['eslint']);
    grunt.loadNpmTasks('grunt-run');
    
    
    grunt.registerTask('BuildMessage', 'Building project...', function() {
        grunt.log.write('Build sucessfully...').ok();
    });

    // Loading using a local git copy
    grunt.loadNpmTasks('intern');
    
    // Register a test task
    grunt.registerTask('test', ['intern:node']);
    
    // Register a task for webdriver tests
    grunt.registerTask('test:browser', ['intern:browser']);
    
    grunt.registerTask('default', ['clean','concat','uglify','copy', 'BuildMessage' ]);    
}
