define(["../core","./var/rsingleTag","../traversing/findFilter"],function(t,e){var n,i=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,r=t.fn.init=function(r,s){var o,c;if(!r)return this;if("string"==typeof r){if(!(o="<"===r[0]&&">"===r[r.length-1]&&r.length>=3?[null,r,null]:i.exec(r))||!o[1]&&s)return!s||s.jquery?(s||n).find(r):this.constructor(s).find(r);if(o[1]){if(s=s instanceof t?s[0]:s,t.merge(this,t.parseHTML(o[1],s&&s.nodeType?s.ownerDocument||s:document,!0)),e.test(o[1])&&t.isPlainObject(s))for(o in s)t.isFunction(this[o])?this[o](s[o]):this.attr(o,s[o]);return this}return(c=document.getElementById(o[2]))&&c.parentNode&&(this.length=1,this[0]=c),this.context=document,this.selector=r,this}return r.nodeType?(this.context=this[0]=r,this.length=1,this):t.isFunction(r)?void 0!==n.ready?n.ready(r):r(t):(void 0!==r.selector&&(this.selector=r.selector,this.context=r.context),t.makeArray(r,this))};return r.prototype=t.fn,n=t(document),r});