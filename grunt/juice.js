// Inline stylesheets into email HTML templates
module.exports = {
	your_target: {
		options: {
			preserveMediaQueries: true,
			applyAttributesTableElements: false, 
			preserveImportant: true,
			preserveFontFaces: true,
			webResources: {
		    	images: false
		    }
		},
		files: [{
			expand: true,
      		src: ['<%= paths.dist %>/*.html'],
      		dest: ''
		}]
	}
};