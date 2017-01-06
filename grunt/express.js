// Browser-based preview task
module.exports = {
  server: {
    options: {
      port: 3000,
      hostname: 'localhost',
      bases: ['<%= paths.dist %>', '<%= paths.src %>'],
      // bases: ['<%= paths.dist %>'],
      server: './server.js',
      livereload: true
    }
  }
}
