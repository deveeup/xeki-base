"use strict";function cleanUp(){helper.cleanUp(["events/node_modules","events/lib/added.js"])}function writeAll(e){grunt.file.write(path.join(e,"lib","added.js"),"var one = true;"),setTimeout(function(){grunt.file.write(path.join(e,"lib","one.js"),"var one = true;")},300),setTimeout(function(){grunt.file.delete(path.join(e,"lib","added.js"))},300)}var grunt=require("grunt"),path=require("path"),fs=require("fs"),helper=require("./helper"),fixtures=helper.fixtures;exports.events={setUp:function(e){cleanUp(),fs.symlinkSync(path.join(__dirname,"../../node_modules"),path.join(fixtures,"events","node_modules")),e()},tearDown:function(e){cleanUp(),e()},events:function(e){e.expect(3);var d=path.resolve(fixtures,"events");helper.assertTask("watch:all",{cwd:d})([function(){writeAll(d)}],function(d){d=helper.unixify(d),helper.verboseLog(d),e.ok(-1!==d.indexOf("lib/added.js was indeed added"),"event not emitted when file added"),e.ok(-1!==d.indexOf("lib/one.js was indeed changed"),"event not emitted when file changed"),e.ok(-1!==d.indexOf("lib/added.js was indeed deleted"),"event not emitted when file deleted"),e.done()})},onlyAdded:function(e){e.expect(3);var d=path.resolve(fixtures,"events");helper.assertTask("watch:onlyAdded",{cwd:d})([function(){writeAll(d)}],function(d){d=helper.unixify(d),helper.verboseLog(d),e.ok(-1!==d.indexOf("lib/added.js was indeed added"),"event not emitted when file added"),e.ok(-1===d.indexOf("lib/one.js was indeed changed"),"event should NOT have emitted when file changed"),e.ok(-1===d.indexOf("lib/added.js was indeed deleted"),"event should NOT have emitted when file deleted"),e.done()})},onlyChanged:function(e){e.expect(3);var d=path.resolve(fixtures,"events");helper.assertTask("watch:onlyChanged",{cwd:d})([function(){writeAll(d)}],function(d){d=helper.unixify(d),helper.verboseLog(d),e.ok(-1===d.indexOf("lib/added.js was indeed added"),"event should NOT have emitted when file added"),e.ok(-1!==d.indexOf("lib/one.js was indeed changed"),"event should have emitted when file changed"),e.ok(-1===d.indexOf("lib/added.js was indeed deleted"),"event should NOT have emitted when file deleted"),e.done()})},onlyDeleted:function(e){e.expect(3);var d=path.resolve(fixtures,"events");helper.assertTask("watch:onlyDeleted",{cwd:d})([function(){writeAll(d)}],function(d){d=helper.unixify(d),helper.verboseLog(d),e.ok(-1===d.indexOf("lib/added.js was indeed added"),"event should NOT have emitted when file added"),e.ok(-1===d.indexOf("lib/one.js was indeed changed"),"event should NOT have emitted when file changed"),e.ok(-1!==d.indexOf("lib/added.js was indeed deleted"),"event should have emitted when file deleted"),e.done()})},onlyAddedAndDeleted:function(e){e.expect(3);var d=path.resolve(fixtures,"events");helper.assertTask("watch:onlyAddedAndDeleted",{cwd:d})([function(){writeAll(d)}],function(d){d=helper.unixify(d),helper.verboseLog(d),e.ok(-1!==d.indexOf("lib/added.js was indeed added"),"event should have emitted when file added"),e.ok(-1===d.indexOf("lib/one.js was indeed changed"),"event should NOT have emitted when file changed"),e.ok(-1!==d.indexOf("lib/added.js was indeed deleted"),"event should have emitted when file deleted"),e.done()})},targetSpecific:function(e){e.expect(2);var d=path.resolve(fixtures,"events");helper.assertTask("watch",{cwd:d})([function(){var e="var test = false;";setTimeout(function(){grunt.file.write(path.join(d,"lib/one","test.js"),e)},300),setTimeout(function(){grunt.file.write(path.join(d,"lib/two","test.js"),e)},300)}],function(d){d=helper.unixify(d),helper.verboseLog(d),e.ok(-1!==d.indexOf("lib/one/test.js was indeed changed\ntargetOne specifc event was fired"),"event should have been emitted with targetOne specified"),e.ok(-1!==d.indexOf("lib/two/test.js was indeed changed\ntargetTwo specifc event was fired"),"event should have been emitted with targetTwo specified"),e.done()})}};