"use strict";module.exports=function(e){var r=require("grunt-lib-contrib").init(e),i=require("./lib/uglify").init(e);e.registerMultiTask("uglify","Minify files with UglifyJS.",function(){var n,o,a,t=this.options({banner:"",footer:"",compress:{warnings:!1},mangle:{},beautify:!1,report:!1}),s=(e.template.process(t.banner),e.template.process(t.footer));this.files.forEach(function(c){var l=c.src.filter(function(r){return!!e.file.exists(r)||(e.log.warn('Source file "'+r+'" not found.'),!1)});if(0!==l.length){if("function"==typeof t.sourceMap&&(n=t.sourceMap),"function"==typeof t.sourceMapIn&&(1!==l.length&&e.fail.warn("Cannot generate `sourceMapIn` for multiple source files."),o=t.sourceMapIn),"function"==typeof t.sourceMappingURL&&(a=t.sourceMappingURL),n)try{t.sourceMap=n(c.dest)}catch(r){(u=new Error("SourceMapName failed.")).origError=r,e.fail.warn(u)}if(o)try{t.sourceMapIn=o(l[0])}catch(r){(u=new Error("SourceMapInName failed.")).origError=r,e.fail.warn(u)}if(a)try{t.sourceMappingURL=a(c.dest)}catch(r){(u=new Error("SourceMappingURL failed.")).origError=r,e.fail.warn(u)}var f;try{f=i.minify(l,c.dest,t)}catch(r){console.log(r);var u=new Error("Uglification failed.");r.message&&(u.message+="\n"+r.message+". \n",r.line&&(u.message+="Line "+r.line+" in "+l+"\n")),u.origError=r,e.log.warn('Uglifying source "'+l+'" failed.'),e.fail.warn(u)}var p=f.min+s;e.file.write(c.dest,p),t.sourceMap&&(e.file.write(t.sourceMap,f.sourceMap),e.log.writeln('Source Map "'+t.sourceMap+'" created.')),e.log.writeln('File "'+c.dest+'" created.'),t.report&&r.minMaxInfo(p,f.max,t.report)}else e.log.warn("Destination ("+c.dest+") not written because src files were empty.")})})};