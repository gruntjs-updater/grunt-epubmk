/*
 * grunt-epubmk
 * https://github.com/antonioagrestini/epubmk
 *
 * Copyright (c) 2015 Antonio Agrestini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    handlebars: {
        "templates/templates.js": ["templates/*.hbs"]
    },

    shell: {
        multiple: {
            command: [
                'cd epubsrc',
                'zip -0 myebook.epub mimetype',
                'zip -9 -r myebook.epub META-INF OEBPS'
            ].join('&&')
        }
    },

    // Configuration to be run (and then tested).
    epubmk: {
      default: {
        options: {            
          src: 'epubsrc',
          textsrc: 'epubsrc/OEBPS',
          author: 'Ugo Foscolo',
          title: 'Le ultime lettere di Jacopo Ortis',
          identifier: 'isbn:8606086060000',
          language: 'it-IT'
        },
        files: [
            {
              src: [
                'epubsrc/OEBPS/chapter001.html',
                'epubsrc/OEBPS/chapter002.html',
                'epubsrc/OEBPS/chapter003.html'
              ]
            }
          ]
        } 
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-shell');
   
  grunt.registerTask('default', ['handlebars', 'epubmk', 'shell']);



};
