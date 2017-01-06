module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {

  	// Pass data to tasks
  	data: {
  		paths: {
  			src: 'src',
  			src_img:    'src/img',
  			dist: 'dist',
  			dist_img:   'dist/img'
  		}
  	}
  });
};