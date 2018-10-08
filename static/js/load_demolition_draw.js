$(document).ready(function(){
   demolition_state=false;
   sdemolition_state=false;

    $.get("/load_demolition_draw/", function(ret){
        demolition_draws=ret['demolition_draws'];
        sdemolition_draws=ret['sdemolition_draws'];
        for(var i in demolition_draws){
            //alert(all_draws[i]);
            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(demolition_draws[i])
              });

            var vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });

            demolition_draws[i]=vectorLayer;
        }
        for(var i in sdemolition_draws){
            //alert(all_draws[i]);
            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(sdemolition_draws[i])
              });

            var vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });

            sdemolition_draws[i]=vectorLayer;
        }
    });
    $("#btn1").click(function(){

    if(demolition_state){
    demolition_state=false;
    for(var i in demolition_draws){
    map.removeLayer(demolition_draws[i]);

    }
    }else{
    demolition_state=true;
    for(var i in demolition_draws){
    map.addLayer(demolition_draws[i]);
    }
    }
    var w1 = document.getElementsByClassName('w1')[0];
    var btn1=document.getElementById("btn1");
    btn1.style.background=demolition_state?"#0090ff":"#f4f5f9";
    w1.style.color=demolition_state? "white":"#717274";
    })
     $("#btn2").click(function(){
    if(sdemolition_state){
    sdemolition_state=false;
    for(var i in sdemolition_draws){
    map.removeLayer(sdemolition_draws[i]);

    }
    }else{
    sdemolition_state=true;
    for(var i in sdemolition_draws){
    map.addLayer(sdemolition_draws[i]);
    }
    }
    var w2 = document.getElementsByClassName('w2')[0];
    var btn2=document.getElementById("btn2");
    btn2.style.background=sdemolition_state?"#0090ff":"#f4f5f9";
    w2.style.color=sdemolition_state? "white":"#717274";
    })

});