// Copy img file to dist
module.exports = {
	main: {
		files: [
			{
                expand: true,
                flatten: true, 
                src: '<%= paths.src_img %>/**',
                dest: '<%= paths.dist_img %>/',
                filter: 'isFile'
            }
		]
	}
};