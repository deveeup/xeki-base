define(["../core"],function(n){return n.access=function(c,l,e,i,r,t,o){var u=0,f=c.length,a=null==e;if("object"===n.type(e)){r=!0;for(u in e)n.access(c,l,u,e[u],!0,t,o)}else if(void 0!==i&&(r=!0,n.isFunction(i)||(o=!0),a&&(o?(l.call(c,i),l=null):(a=l,l=function(c,l,e){return a.call(n(c),e)})),l))for(;f>u;u++)l(c[u],e,o?i:i.call(c[u],u,l(c[u],e)));return r?c:a?l.call(c):f?l(c[0],e):t}});