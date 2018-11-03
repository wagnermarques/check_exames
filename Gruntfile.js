module.exports = function(grunt) {

    //Project configuration.
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
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, src: ['dist/*min*.js'], dest: 'src/public/', filter: 'isFile'},
                ],
            },
        },
        clean: {
            dist: ['dist/**']
            "src/public/dist": ['src/public/dist/**']
            //contents: ['path/to/dir/*']
            //subfolders: ['path/to/dir/*/'],
            //css: ['path/to/dir/*.css'],
            //all_css: ['path/to/dir/**/*.css']
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

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-ts");
    
    // Default task(s).
    grunt.registerTask('BuildMessage', 'Building project...', function() {
        grunt.log.write('Build sucessfully...').ok();
    });

    // Loading using a local git copy
    grunt.loadNpmTasks('intern');
    
    // Register a test task
    grunt.registerTask('test', ['intern:node']);
    
    // Register a task for webdriver tests
    grunt.registerTask('test:browser', ['intern:browser']);
    
    grunt.registerTask('default', ['clean','concat','uglify','copy', 'BuildMessage']);    
}
