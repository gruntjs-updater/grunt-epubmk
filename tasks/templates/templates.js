this["JST"] = this["JST"] || {};

this["JST"]["templates/content.opf.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<package xmlns=\"http://www.idpf.org/2007/opf\"\n         xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n         unique-identifier=\"bookid\" version=\"2.0\">\n  <metadata>\n    <dc:title>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</dc:title>\n    <dc:creator>"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</dc:creator>\n    <dc:identifier id=\"bookid\">"
    + alias3(((helper = (helper = helpers.identifier || (depth0 != null ? depth0.identifier : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"identifier","hash":{},"data":data}) : helper)))
    + "</dc:identifier>\n    <dc:language>"
    + alias3(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"language","hash":{},"data":data}) : helper)))
    + "</dc:language>\n  </metadata>\n  <manifest>\n    <item id=\"ncx\" href=\"toc.ncx\" media-type=\"application/x-dtbncx+xml\"/>\n    <item id=\"cover-image\" href=\"images/cover.jpg\" media-type=\"image/jpeg\"/>\n  	<item id=\"coverpage\" href=\"cover.html\" media-type=\"application/xhtml+xml\"/>\n    <item id=\"css\" href=\"css/default.css\" media-type=\"text/css\"/>\n"
    + ((stack1 = this.invokePartial(partials.manifestitems,depth0,{"name":"manifestitems","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </manifest>\n  <spine toc=\"ncx\">\n	   <itemref idref=\"coverpage\" linear=\"no\" />\n"
    + ((stack1 = this.invokePartial(partials.spineitems,depth0,{"name":"spineitems","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </spine>\n  <guide>\n    <reference href=\"cover.html\" type=\"cover\" title=\"cover\" />\n  </guide>\n</package>";
},"usePartial":true,"useData":true});

this["JST"]["templates/cover.html.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n<title>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n<style type=\"text/css\">\n	\n	body {\n		margin: 0px;\n		padding: 0px;\n		}\n	\n  	img { \n		max-width: 100%;\n		height: 100%; \n	}\n	\n</style>\n</head>\n<body>\n<div>\n	<img src=\"images/cover.jpg\"  />\n</div>\n</body>\n</html>";
},"useData":true});

this["JST"]["templates/toc.navpoint.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<navPoint id=\"navpoint-"
    + alias3(((helper = (helper = helpers.itemOrder || (depth0 != null ? depth0.itemOrder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"itemOrder","hash":{},"data":data}) : helper)))
    + "\" playOrder=\""
    + alias3(((helper = (helper = helpers.itemOrder || (depth0 != null ? depth0.itemOrder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"itemOrder","hash":{},"data":data}) : helper)))
    + "\">\n  <navLabel>\n    <text>"
    + alias3(((helper = (helper = helpers.texttitle || (depth0 != null ? depth0.texttitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"texttitle","hash":{},"data":data}) : helper)))
    + "</text>\n  </navLabel>\n  <content src=\""
    + alias3(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"filename","hash":{},"data":data}) : helper)))
    + "\"/>\n</navPoint>";
},"useData":true});

this["JST"]["templates/toc.ncx.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!DOCTYPE ncx PUBLIC \"-//NISO//DTD ncx 2005-1//EN\" \n          \"http://www.daisy.org/z3986/2005/ncx-2005-1.dtd\">\n<ncx xmlns=\"http://www.daisy.org/z3986/2005/ncx/\" version=\"2005-1\">\n  \n  <head>\n    <meta name=\"dtb:uid\" content=\""
    + alias3(((helper = (helper = helpers.identifier || (depth0 != null ? depth0.identifier : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"identifier","hash":{},"data":data}) : helper)))
    + "\"/>\n    <meta name=\"dtb:depth\" content=\"1\"/>\n    <meta name=\"dtb:totalPageCount\" content=\"0\"/>\n    <meta name=\"dtb:maxPageNumber\" content=\"0\"/>\n  </head>\n  \n  <docTitle>\n    <text>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</text>\n  </docTitle>\n  \n  <navMap>\n    \n    <navPoint id=\"navpoint-1\" playOrder=\"1\">\n      <navLabel>\n        <text>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</text>\n      </navLabel>\n      <content src=\"cover.html\"/>\n    </navPoint> \n\n"
    + ((stack1 = this.invokePartial(partials.navpoints,depth0,{"name":"navpoints","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  </navMap>\n</ncx>";
},"usePartial":true,"useData":true});