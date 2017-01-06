// Compile Sass to CSS
module.exports = {
	dist: {
		options: {
			outputStyle: 'expanded'
		},
		files: {
			'<%= paths.src %>/css/main.css' : '<%= paths.src %>/css/scss/main.scss'
		}
	}
};