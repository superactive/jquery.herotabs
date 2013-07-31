module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                options: {
                    report: 'gzip',
                    preserveComments: 'some'
                },
                files: {
                    'src/jquery.herotabs.min.js': 'src/jquery.herotabs.js',
                    'src/jquery.herotabs-animate.min.js': 'src/jquery.herotabs-animate.js'
                }
            }
        }
    });

    grunt.registerTask('default', [
        'uglify'
    ]);

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
