GMaps.prototype.on=function(e,n){return GMaps.on(e,this,n)},GMaps.prototype.off=function(e){GMaps.off(e,this)},GMaps.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],GMaps.on=function(e,n,t){if(-1==GMaps.custom_events.indexOf(e))return n instanceof GMaps&&(n=n.map),google.maps.event.addListener(n,e,t);var s={handler:t,eventName:e};return n.registered_events[e]=n.registered_events[e]||[],n.registered_events[e].push(s),s},GMaps.off=function(e,n){-1==GMaps.custom_events.indexOf(e)?(n instanceof GMaps&&(n=n.map),google.maps.event.clearListeners(n,e)):n.registered_events[e]=[]},GMaps.fire=function(e,n,t){if(-1==GMaps.custom_events.indexOf(e))google.maps.event.trigger(n,e,Array.prototype.slice.apply(arguments).slice(2));else if(e in t.registered_events)for(var s=t.registered_events[e],o=0;o<s.length;o++)!function(e,n,t){s[o].handler.apply(n,[t])}(0,t,n)};