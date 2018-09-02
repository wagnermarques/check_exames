module.exports = function(grunt) {

    // Project configuration.
    //https://gruntjs.com/configuring-tasks
    //https://gruntjs.com/getting-started
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/*',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });
    
    // Load the plugin that provides the "uglify" task.
    //https://davidburgos.blog/how-to-fix-grunt-contrib-uglify-for-es6/
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    
    // Default task(s).
    grunt.registerTask('BuildMessage', 'Just a Build message....', function() {
        grunt.log.write('This is just a Build Message from BuildMessage task...').ok();
    });
    
    grunt.registerTask('default', ['uglify','BuildMessage']);

}
