!function(){function a(){function a(a,b){var c=SyntaxHighlighter.Match,d=a[0],e=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(d),f=[];if(null!=a.attributes)for(var g,h=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");null!=(g=h.exec(d));)f.push(new c(g.name,a.index+g.index,"color1")),f.push(new c(g.value,a.index+g.index+g[0].indexOf(g.value),"string"));return null!=e&&f.push(new c(e.name,a.index+e[0].indexOf(e.name),"keyword")),f}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:a}]}"undefined"!=typeof require?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null,a.prototype=new SyntaxHighlighter.Highlighter,a.aliases=["xml","xhtml","xslt","html"],SyntaxHighlighter.brushes.Xml=a,"undefined"!=typeof exports?exports.Brush=a:null}();