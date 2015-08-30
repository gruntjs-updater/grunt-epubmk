/*
 * grunt-epubmk
 * https://github.com/antonioagrestini/epubmk
 *
 * Copyright (c) 2015 Antonio Agrestini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

      grunt.registerMultiTask('epubmk', 'The epub maker', function() {
      
      var Handlebars = require("handlebars"); 
      var path = require('path');

      var options = this.options({
        templates: {
          container: __dirname + path.sep + 'templates/container.xml',
          opf: __dirname + path.sep + 'templates/content.opf.hbs',
          toc: __dirname + path.sep + 'templates/toc.ncx.hbs',
          navpt : __dirname + path.sep + 'templates/toc.navpoint.hbs'
        } 
      });

      // META-INF
      var metafld = options.src + '/META-INF';
        grunt.file.mkdir(metafld);
      var contxml = grunt.file.read(options.templates.container);
        grunt.file.write(metafld + '/container.xml', contxml);

      // mimetype
      grunt.file.write(options.src + '/mimetype', 'application/epub+zip');

      var navpoint = Handlebars.compile(grunt.file.read(options.templates.navpt));

      var navpoints = '';
      var orderIndx = 2; // 1 is cover
      var manifItems = '';
      var spineItems = '';

      this.files.forEach(function (f) {
      
          f.src.forEach(function(filePath) {
            
            var content = grunt.file.read(filePath);
            var htmlTitle = content.match("<title>(.*?)</title>")[1];
   
            // navpoint items
            var fname = filePath.substring(filePath.lastIndexOf('/')+1);
            
            var npnt = navpoint({texttitle: htmlTitle,
                                 itemOrder: orderIndx,
                                 filename: fname});

                navpoints += npnt + '\n\n';


            // opf manifest items   
            var opfitem = '<item id="elmn' + orderIndx + '" href="' + fname + '" media-type="application/xhtml+xml"/>\n';
                manifItems += opfitem;

            // opf spine items   
            var opfspine = ' <itemref idref="elmn' + orderIndx + '" />\n';
                spineItems += opfspine;

            orderIndx ++;
 
            grunt.log.writeln('File  ' + filePath + ' > title: ' + htmlTitle + ' - OK.');

          });
      
      });

      
      var textfolder = options.textsrc;


      // Create content.opf
      Handlebars.registerPartial('manifestitems', manifItems);
      Handlebars.registerPartial('spineitems', spineItems);

      var opfcnt = Handlebars.compile(grunt.file.read(options.templates.opf));
      var opffile = opfcnt(options);  
          grunt.file.write(textfolder + '/content.opf', opffile);
      
      // Create toc.ncx
      Handlebars.registerPartial('navpoints', navpoints);

      var toccnt = Handlebars.compile(grunt.file.read(options.templates.toc));
      var tocfile = toccnt(options);  
          grunt.file.write(textfolder + '/toc.ncx', tocfile);    

    
  });

};