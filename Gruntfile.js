module.exports = function (grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        run: {
            server: {
                cmd: 'node',
                args: [
                    'scripts/webserver.js'
                ]
            }
        }


    });

    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('default', ['run:server']);

};