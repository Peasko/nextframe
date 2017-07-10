module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    // var saveLicense = require('uglify-save-license');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            options: {
                compress: false
            },
            files: {
                src: 'less/main.less',
                dest: 'main.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};
