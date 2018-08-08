describe("Drawing geometry overlays",function(){var e,t,o,l,n;beforeEach(function(){e=e||new GMaps({el:"#map-with-polygons",lat:-12.0433,lng:-77.0283,zoom:12})}),describe("A line",function(){beforeEach(function(){t=t||e.drawPolyline({path:[[-12.044,-77.0247],[-12.0544,-77.0302],[-12.0551,-77.0303],[-12.0759,-77.0276],[-12.0763,-77.0279],[-12.0768,-77.0289],[-12.0885,-77.0241],[-12.0908,-77.0227]],strokeColor:"#131540",strokeOpacity:.6,strokeWeight:6})}),it("should add the line to the polylines collection",function(){expect(e.polylines.length).toEqual(1),expect(e.polylines[0]).toEqual(t)}),it("should be added in the current map",function(){expect(t.getMap()).toEqual(e.map)}),it("should return the defined path",function(){var e=t.getPath().getAt(0);expect(parseFloat(e.lat().toFixed(4))).toEqual(-12.044),expect(parseFloat(e.lng().toFixed(4))).toEqual(-77.0247)})}),describe("A rectangle",function(){beforeEach(function(){o=o||e.drawRectangle({bounds:[[-12.0303,-77.0237],[-12.0348,-77.0115]],strokeColor:"#BBD8E9",strokeOpacity:1,strokeWeight:3,fillColor:"#BBD8E9",fillOpacity:.6})}),it("should add the rectangle to the polygons collection",function(){expect(e.polygons.length).toEqual(1),expect(e.polygons[0]).toEqual(o)}),it("should be added in the current map",function(){expect(o.getMap()).toEqual(e.map)}),it("should have the defined bounds",function(){var e=parseFloat(o.getBounds().getSouthWest().lat().toFixed(4)),t=parseFloat(o.getBounds().getSouthWest().lng().toFixed(4)),l=parseFloat(o.getBounds().getNorthEast().lat().toFixed(4)),n=parseFloat(o.getBounds().getNorthEast().lng().toFixed(4));expect(e).toEqual(-12.0303),expect(t).toEqual(-77.0237),expect(l).toEqual(-12.0348),expect(n).toEqual(-77.0115)})}),describe("A polygon",function(){beforeEach(function(){n=n||e.drawPolygon({paths:[[-12.0403,-77.0337],[-12.0402,-77.0399],[-12.05,-77.0244],[-12.0448,-77.0215]],strokeColor:"#25D359",strokeOpacity:1,strokeWeight:3,fillColor:"#25D359",fillOpacity:.6})}),it("should add the polygon to the polygons collection",function(){expect(e.polygons.length).toEqual(2),expect(e.polygons[1]).toEqual(n)}),it("should be added in the current map",function(){expect(n.getMap()).toEqual(e.map)}),it("should return the defined path",function(){var e=n.getPath().getAt(0);expect(parseFloat(e.lat().toFixed(4))).toEqual(-12.0403),expect(parseFloat(e.lng().toFixed(4))).toEqual(-77.0337)})}),describe("A circle",function(){beforeEach(function(){l=l||e.drawCircle({lat:-12.040504866577,lng:-77.02024422636042,radius:350,strokeColor:"#432070",strokeOpacity:1,strokeWeight:3,fillColor:"#432070",fillOpacity:.6})}),it("should add the circle to the polygons collection",function(){expect(e.polygons.length).toEqual(3),expect(e.polygons[2]).toEqual(l)}),it("should be added in the current map",function(){expect(l.getMap()).toEqual(e.map)}),it("should have the defined radius",function(){expect(l.getRadius()).toEqual(350)})})}),describe("Removing geometry overlays",function(){var e,t,o,l,n;beforeEach(function(){e=e||new GMaps({el:"#map-with-polygons",lat:-12.0433,lng:-77.0283,zoom:12})}),describe("A line",function(){beforeEach(function(){t=e.drawPolyline({path:[[-12.044,-77.0247],[-12.0544,-77.0302],[-12.0551,-77.0303],[-12.0759,-77.0276],[-12.0763,-77.0279],[-12.0768,-77.0289],[-12.0885,-77.0241],[-12.0908,-77.0227]],strokeColor:"#131540",strokeOpacity:.6,strokeWeight:6}),e.removePolyline(t)}),it("should remove the line from the polylines collection",function(){expect(e.polylines.length).toEqual(0),expect(t.getMap()).toBeNull()})}),describe("A rectangle",function(){beforeEach(function(){o=e.drawRectangle({bounds:[[-12.0303,-77.0237],[-12.0348,-77.0115]],strokeColor:"#BBD8E9",strokeOpacity:1,strokeWeight:3,fillColor:"#BBD8E9",fillOpacity:.6}),e.removePolygon(o)}),it("should remove the rectangle from the polygons collection",function(){expect(e.polygons.length).toEqual(0),expect(o.getMap()).toBeNull()})}),describe("A polygon",function(){beforeEach(function(){n=e.drawPolygon({paths:[[-12.0403,-77.0337],[-12.0402,-77.0399],[-12.05,-77.0244],[-12.0448,-77.0215]],strokeColor:"#25D359",strokeOpacity:1,strokeWeight:3,fillColor:"#25D359",fillOpacity:.6}),e.removePolygon(n)}),it("should remove the polygon from the polygons collection",function(){expect(e.polygons.length).toEqual(0),expect(n.getMap()).toBeNull()})}),describe("A circle",function(){beforeEach(function(){l=e.drawCircle({lat:-12.040504866577,lng:-77.02024422636042,radius:350,strokeColor:"#432070",strokeOpacity:1,strokeWeight:3,fillColor:"#432070",fillOpacity:.6}),e.removePolygon(l)}),it("should remove the circle from the polygons collection",function(){expect(e.polygons.length).toEqual(0),expect(l.getMap()).toBeNull()})})});