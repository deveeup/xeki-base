define(function(){return function(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}});