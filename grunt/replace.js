// Replace compiled template images sources from ../src/html to ../dist/html
module.exports = {
  src_images: {
    options: {
      usePrefix: false,
      patterns: [ 
        {
          match: /(url\(*[^)])(\.\.\/src\/img\/)/gi,  // Matches url('../img') or url(../img) and even url("../img")
          replacement: '$1img/'
        }
      ]
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['<%= paths.dist %>/*.html'],
      dest: '<%= paths.dist %>'
    }]
  }
};
