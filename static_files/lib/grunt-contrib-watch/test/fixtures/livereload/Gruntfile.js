module.exports=function(s){"use strict";var e=require("path");s.initConfig({watch:{options:{livereload:!0},basic:{files:["lib/*.js"],tasks:["before"]},customport:{files:["lib/*.js"],tasks:["before"],options:{livereload:{port:8675}}},multiplefiles:{files:["lib/*.js"],tasks:["before"],options:{livereload:{port:9876}}},nospawn:{files:["lib/*.js"],tasks:["before"],options:{spawn:!1,livereload:1337}},notasks:{files:["lib/*.js"]},triggerwrite:{files:["sass/*"],tasks:["writecss"],options:{livereload:!1}},triggerlr:{files:["css/*"]}}}),s.loadTasks("../../../tasks"),s.registerTask("before",function(){s.log.writeln("I ran before livereload.")}),s.registerTask("writecss",function(){s.file.write(e.join(__dirname,"css","one.css"),"#one {}")})};