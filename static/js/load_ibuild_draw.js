$(document).ready(function(){
   ibuild_state=false;
   sibuild_state=false;

    $.get("/load_ibuild_draw/", function(ret){
        ibuild_draws=ret['ibuild_draws'];
        sibuild_draws=ret['sibuild_draws'];
        for(var i in ibuild_draws){
           var features=(new ol.format.GeoJSON()).readFeatures(ibuild_draws[i]);
            style=new ol.style.Style({
                stroke:new ol.style.Stroke({
                    color: '#319FD3',
                   width: 1,
                }),
                fill: new ol.style.Fill({ //矢量图层填充颜色，以及透明度
                    color: 'rgba(54, 21, 169, 0.2)'
                }),
            });
            features[0].setStyle(style);
            var vectorSource = new ol.source.Vector({
                features: features//(new ol.format.GeoJSON()).readFeatures(ibuild_draws[i])
              });

            var vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });

            ibuild_draws[i]=vectorLayer;
        }
        for(var i in sibuild_draws){
        var features=(new ol.format.GeoJSON()).readFeatures(sibuild_draws[i]);
            style=new ol.style.Style({
                stroke:new ol.style.Stroke({
                    color: '#319FD3',
                   width: 1,
                }),
                fill: new ol.style.Fill({ //矢量图层填充颜色，以及透明度
                    color: 'rgba(144, 121, 69, 0.2)'
                }),
            });
            features[0].setStyle(style);
            //alert(all_draws[i]);
            var vectorSource = new ol.source.Vector({
                features: features
              });
            var vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });

            sibuild_draws[i]=vectorLayer;
        }
    });
    $("#btn1").click(function(){
    if(ibuild_state){
    ibuild_state=false;
    for(var i in ibuild_draws){
    map.removeLayer(ibuild_draws[i]);
    }
    }else{
    ibuild_state=true;
    for(var i in ibuild_draws){
    map.addLayer(ibuild_draws[i]);
    }
    }
     var w1 = document.getElementsByClassName('w1')[0];
    var btn1=document.getElementById("btn1");
    btn1.style.background=ibuild_state?"#0090ff":"#f4f5f9";
    w1.style.color=ibuild_state? "white":"#717274";
    })
     $("#btn2").click(function(){
    if(sibuild_state){
    sibuild_state=false;
    for(var i in sibuild_draws){
    map.removeLayer(sibuild_draws[i]);
    }
    }else{
    sibuild_state=true;
    for(var i in sibuild_draws){
    map.addLayer(sibuild_draws[i]);
    }
    }
    var w2 = document.getElementsByClassName('w2')[0];
    var btn2=document.getElementById("btn2");
    btn2.style.background=sibuild_state?"#0090ff":"#f4f5f9";
    w2.style.color=sibuild_state? "white":"#717274";
    })
    
});