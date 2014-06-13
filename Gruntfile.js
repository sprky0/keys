module.exports = function(grunt) {

	grunt.file.defaultEncoding = 'utf8';
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Project configuration.
	grunt.initConfig({
		copy : {
			main : {
				src : "src/keys.js",
				dest : "dist/index.js"
			}
		},
		uglify : {
			main : {
				files : {
					'dist/index.min.js' : ['dist/index.js']
				}
			}
		}
	});

	// dist build
	grunt.registerTask('default', ['copy','uglify']);

};
