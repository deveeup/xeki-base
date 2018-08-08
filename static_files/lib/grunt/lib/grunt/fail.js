"use strict";function writeln(r,t){grunt.log.muted=!1;var n=String(r.message||r);grunt.option("no-color")||(n+=""),"warn"===t?(n="Warning: "+n+" ",n=(n+=grunt.option("force")?"Used --force, continuing.".underline:"Use --force to continue.").yellow):n=("Fatal error: "+n).red,grunt.log.writeln(n)}function dumpStack(r){grunt.option("stack")&&(r.origError&&r.origError.stack?console.log(r.origError.stack):r.stack&&console.log(r.stack))}var grunt=require("../grunt"),fail=module.exports={};fail.code={FATAL_ERROR:1,MISSING_GRUNTFILE:2,TASK_FAILURE:3,TEMPLATE_ERROR:4,INVALID_AUTOCOMPLETE:5,WARNING:6},fail.fatal=function(r,t){writeln(r,"fatal"),dumpStack(r),grunt.util.exit("number"==typeof t?t:fail.code.FATAL_ERROR)},fail.errorcount=0,fail.warncount=0,fail.warn=function(r,t){var n="string"==typeof r?r:r.message;fail.warncount++,writeln(n,"warn"),grunt.option("force")||(dumpStack(r),grunt.log.writeln().fail("Aborted due to warnings."),grunt.util.exit("number"==typeof t?t:fail.code.WARNING))},fail.report=function(){fail.warncount>0?grunt.log.writeln().fail("Done, but with warnings."):grunt.log.writeln().success("Done, without errors.")};