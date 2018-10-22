 var map = new ol.Map({
   target: 'map',
   view: new ol.View({
     center: ol.proj.fromLonLat([117.2027, 39.1653]),
     zoom: 12,
     maxZoom:18,
     minZoom:4
   }),
   controls: ol.control.defaults().extend([
        new ol.control.ScaleLine({  }),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4),
            projection: 'EPSG:4326'
        }),
        new ol.control.ScaleLine({  }),
        new ol.control.ZoomSlider({
            maxResolution:1000,
            minResolution:1000
        })
  ]),
 });
var geoserver_layer4= new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:412'}
          }),
          opacity:1,
        });

map.addLayer(default_geo_layer2);
map.addLayer(default_geo_layer4);
map.addLayer(geoserver_layer4);
 var layer1 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:Test_1'}
          }),
          opacity:1,
        });
 var layer2 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:Test_2'}
          }),
          opacity:1,
        });
  var layer3 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:Test_3'}
          }),
          opacity:1,
        });
   var layer4 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:Test_4'}
          }),
          opacity:1,
        });
   var layer5 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:Test_5'}
          }),
          opacity:1,
        });
    var layer6 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:Test_6'}
          }),
          opacity:1,
        });
   var layer7 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:Test_7'}
          }),
          opacity:1,
        });
btn1_status=false;
btn2_status=false;
btn3_status=false;
btn4_status=false;
btn5_status=false;
btn6_status=false;
btn7_status=false;

$("#btn1").click(function(){
if(btn1_status){
btn1_status=false;

$("#area").text("");
map.removeLayer(layer1);
}else{
$("#area").text("123");

btn1_status=true;
map.addLayer(layer1);
}
})
$("#btn2").click(function(){
if(btn2_status){
btn2_status=false;
$("#area").text("");
map.removeLayer(layer2);
}else{
btn2_status=true;
$("#area").text("456");
map.addLayer(layer2);
}
})
$("#btn3").click(function(){
if(btn3_status){
$("#area").text("");
btn3_status=false;
map.removeLayer(layer3);
}else{
$("#area").text("159");
btn3_status=true;
map.addLayer(layer3);
}
})
$("#btn4").click(function(){
if(btn4_status){
$("#area").text("");
btn4_status=false;
map.removeLayer(layer4);
}else{
$("#area").text("475");
btn4_status=true;
map.addLayer(layer4);
}
})
$("#btn5").click(function(){
if(btn5_status){
$("#area").text("");
btn5_status=false;
map.removeLayer(layer5);
}else{
$("#area").text("364");
btn5_status=true;
map.addLayer(layer5);
}
})
$("#btn6").click(function(){
if(btn6_status){
$("#area").text("");
btn6_status=false;
map.removeLayer(layer6);
}else{
$("#area").text("745");
btn6_status=true;
map.addLayer(layer6);
}
})
$("#btn7").click(function(){
if(btn7_status){
$("#area").text("");
btn7_status=false;
map.removeLayer(layer7);
}else{
$("#area").text("746");
btn7_status=true;
map.addLayer(layer7);
}
})