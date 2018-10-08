$(function(){
var ibuild_state=false;
var sibuild_state=false;
var demolition_state=false;
var sdemolition_state=false;
var all_draws;

    $.get("/seperate_load_draw/", function(ret){


        ibuild_draws=ret['ibuild'];
        sibuild_draws=ret['sibuild'];
        demolition_draws=ret['demolition'];
        sdemolition_draws=ret['sdemolition'];
        ibuild_draws=JSON.parse(ibuild_draws);
        sibuild_draws=JSON.parse(sibuild_draws);
        demolition_draws=JSON.parse(demolition_draws);
        sdemolition_draws=JSON.parse(sdemolition_draws);



        for(var i in ibuild_draws){

             ibuild_draws[i]["context"]=JSON.parse(ibuild_draws[i]["context"]);
            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(ibuild_draws[i]["context"])
              });

            var ibuild_vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });
         ibuild_draws[i]["layer"]=ibuild_vectorLayer
         //
         //var htmltext="<div id='wholebox"+ibuild_draws[i]["id"]+"' onclick='control_ibox(\" "+ibuild_draws[i]["id"]+" \")'>"
         var htmltext="<div id='wholebox"+ibuild_draws[i]["id"]+"'>"
              +"<img class='giftu' src='/static/img/weizhi-zi.gif' alt='' >"
              +"<div   id='ibox"+ibuild_draws[i]["id"]+"'>"
              +" <p class='xinxishang'><b >"+ibuild_draws[i]["name"] +"</b>"
              +"<img class='cha' src='/static/img/duoxuan/cha1.png' alt=''></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>类型:</b><b>"+ibuild_draws[i]["graphiclabel"]+"</b></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>面积:</b><b>"+ibuild_draws[i]["square"]+"</b><b>平方米</b></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>时间:<b><b>"+ibuild_draws[i]["foundtime"]+"</b></p>"
              +"<br>"
              +"<br>"
              +"</div>"
              +"</div>";

         $("#information_box").append(htmltext);
         $("#ibox"+ibuild_draws[i]["id"]).css({"display":"none","font-size":".15rem","background":"white","width":"2rem","position":"relative","z-index":"100"});
         $("#wholebox"+ibuild_draws[i]["id"]).on("click",ibuild_draws[i]["id"],function(data){
              if($("#ibox"+data.data).css("display")=="none"){

              $("#ibox"+data.data).css("display","block");
              }else{
              $("#ibox"+data.data).css("display","none");
              }


         })

            var popup_info = document.getElementById('wholebox'+ibuild_draws[i]["id"]);
            var popup = new ol.Overlay({
              element:popup_info,
              autoPan: true,
              autoPanAnimation: {
                duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
              }
            });
            sumlon=0;
            sumlan=0;
            coords=ibuild_draws[i]["context"]["geometry"]["coordinates"][0];

            for(j in coords){
            sumlon+=coords[j][0];
            sumlan+=coords[j][1];
            }
            popup.setPosition([sumlon/coords.length,sumlan/coords.length]);
            ibuild_draws[i]["overlay"]=popup;


        }
        for(var i in sibuild_draws){
                   sibuild_draws[i]["context"]=JSON.parse(sibuild_draws[i]["context"]);
            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(sibuild_draws[i]["context"])
              });

            var sibuild_vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });
         sibuild_draws[i]["layer"]=sibuild_vectorLayer
         //
         //var htmltext="<div id='wholebox"+ibuild_draws[i]["id"]+"' onclick='control_ibox(\" "+ibuild_draws[i]["id"]+" \")'>"
         var htmltext="<div id='wholebox"+sibuild_draws[i]["id"]+"'>"
              +"<img class='giftu' src='/static/img/weizhi-cheng.gif' alt='' >"
              +"<div   id='ibox"+sibuild_draws[i]["id"]+"'>"
              +" <p class='xinxishang'><b >"+sibuild_draws[i]["name"] +"</b>"
              +"<img class='cha' src='/static/img/duoxuan/cha1.png' alt=''></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>类型:</b><b>"+sibuild_draws[i]["graphiclabel"]+"</b></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>面积:</b><b>"+sibuild_draws[i]["square"]+"</b><b>平方米</b></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>时间:<b><b>"+sibuild_draws[i]["foundtime"]+"</b></p>"
              +"<br>"
              +"<br>"
              +"</div>"
              +"</div>";

         $("#information_box").append(htmltext);
         $("#ibox"+sibuild_draws[i]["id"]).css({"display":"none","font-size":".15rem","background":"white","width":"2rem","position":"relative","z-index":"100"});
         $("#wholebox"+sibuild_draws[i]["id"]).on("click",sibuild_draws[i]["id"],function(data){
              if($("#ibox"+data.data).css("display")=="none"){

              $("#ibox"+data.data).css("display","block");
              }else{
              $("#ibox"+data.data).css("display","none");
              }


         })

            var popup_info = document.getElementById('wholebox'+sibuild_draws[i]["id"]);
            var popup = new ol.Overlay({
              element:popup_info,
              autoPan: true,
              autoPanAnimation: {
                duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
              }
            });
            sumlon=0;
            sumlan=0;
            coords=sibuild_draws[i]["context"]["geometry"]["coordinates"][0];

            for(j in coords){
            sumlon+=coords[j][0];
            sumlan+=coords[j][1];
            }
            popup.setPosition([sumlon/coords.length,sumlan/coords.length]);
            sibuild_draws[i]["overlay"]=popup;


        }

        for(var i in demolition_draws){
           demolition_draws[i]["context"]=JSON.parse(demolition_draws[i]["context"]);
            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(demolition_draws[i]["context"])
              });

            var demolition_vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });
         demolition_draws[i]["layer"]=demolition_vectorLayer
         //
         //var htmltext="<div id='wholebox"+demolition_draws[i]["id"]+"' onclick='control_ibox(\" "+demolition_draws[i]["id"]+" \")'>"
         var htmltext="<div id='wholebox"+demolition_draws[i]["id"]+"'>"
              +"<img class='giftu' src='/static/img/weizhi-hong.gif' alt='' >"
              +"<div   id='ibox"+demolition_draws[i]["id"]+"'>"
              +" <p class='xinxishang'><b >"+demolition_draws[i]["name"] +"</b>"
              +"<img class='cha' src='/static/img/duoxuan/cha1.png' alt=''></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>类型:</b><b>"+demolition_draws[i]["graphiclabel"]+"</b></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>面积:</b><b>"+demolition_draws[i]["square"]+"</b><b>平方米</b></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>时间:<b><b>"+demolition_draws[i]["foundtime"]+"</b></p>"
              +"<br>"
              +"<br>"
              +"</div>"
              +"</div>";

         $("#information_box").append(htmltext);
         $("#ibox"+demolition_draws[i]["id"]).css({"display":"none","font-size":".15rem","background":"white","width":"2rem","position":"relative","z-index":"100"});
         $("#wholebox"+demolition_draws[i]["id"]).on("click",demolition_draws[i]["id"],function(data){
              if($("#ibox"+data.data).css("display")=="none"){

              $("#ibox"+data.data).css("display","block");
              }else{
              $("#ibox"+data.data).css("display","none");
              }


         })

            var popup_info = document.getElementById('wholebox'+demolition_draws[i]["id"]);
            var popup = new ol.Overlay({
              element:popup_info,
              autoPan: true,
              autoPanAnimation: {
                duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
              }
            });
            sumlon=0;
            sumlan=0;
            coords=demolition_draws[i]["context"]["geometry"]["coordinates"][0];

            for(j in coords){
            sumlon+=coords[j][0];
            sumlan+=coords[j][1];
            }
            popup.setPosition([sumlon/coords.length,sumlan/coords.length]);
            demolition_draws[i]["overlay"]=popup;


        }

        for(var i in sdemolition_draws){
             sdemolition_draws[i]["context"]=JSON.parse(sdemolition_draws[i]["context"]);
            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(sdemolition_draws[i]["context"])
              });

            var sdemolition_vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });
         sdemolition_draws[i]["layer"]=sdemolition_vectorLayer
         //
         //var htmltext="<div id='wholebox"+sdemolition_draws[i]["id"]+"' onclick='control_ibox(\" "+sdemolition_draws[i]["id"]+" \")'>"
         var htmltext="<div id='wholebox"+sdemolition_draws[i]["id"]+"'>"
              +"<img class='giftu' src='/static/img/weizhi-qing.gif' alt='' >"
              +"<div   id='ibox"+sdemolition_draws[i]["id"]+"'>"
              +" <p class='xinxishang'><b >"+sdemolition_draws[i]["name"] +"</b>"
              +"<img class='cha' src='/static/img/duoxuan/cha1.png' alt=''></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>类型:</b><b>"+sdemolition_draws[i]["graphiclabel"]+"</b></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>面积:</b><b>"+sdemolition_draws[i]["square"]+"</b><b>平方米</b></p>"
              +"<br>"
              +"<br>"
              +"<p style='float:left;text-align:center;margin-left:15px;color:#666'><b>时间:<b><b>"+sdemolition_draws[i]["foundtime"]+"</b></p>"
              +"<br>"
              +"<br>"
              +"</div>"
              +"</div>";

         $("#information_box").append(htmltext);
         $("#ibox"+sdemolition_draws[i]["id"]).css({"display":"none","font-size":".15rem","background":"white","width":"2rem","position":"relative","z-index":"100"});
         $("#wholebox"+sdemolition_draws[i]["id"]).on("click",sdemolition_draws[i]["id"],function(data){
              if($("#ibox"+data.data).css("display")=="none"){

              $("#ibox"+data.data).css("display","block");
              }else{
              $("#ibox"+data.data).css("display","none");
              }


         })

            var popup_info = document.getElementById('wholebox'+sdemolition_draws[i]["id"]);
            var popup = new ol.Overlay({
              element:popup_info,
              autoPan: true,
              autoPanAnimation: {
                duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
              }
            });
            sumlon=0;
            sumlan=0;
            coords=sdemolition_draws[i]["context"]["geometry"]["coordinates"][0];

            for(j in coords){
            sumlon+=coords[j][0];
            sumlan+=coords[j][1];
            }
            popup.setPosition([sumlon/coords.length,sumlan/coords.length]);
            sdemolition_draws[i]["overlay"]=popup;


        }
    });






$("#btn1").click(function(){

if(ibuild_state){
ibuild_state=false;
for(var i in ibuild_draws){
map.removeLayer(ibuild_draws[i]["layer"]);
map.removeOverlay(ibuild_draws[i]["overlay"]);
}
}else{
ibuild_state=true;
for(var i in ibuild_draws){
map.addLayer(ibuild_draws[i]["layer"]);
map.addOverlay(ibuild_draws[i]["overlay"]);
}
}
})

$("#btn2").click(function(){

if(sibuild_state){
sibuild_state=false;
for(var i in sibuild_draws){
map.removeLayer(sibuild_draws[i]["layer"]);
map.removeOverlay(sibuild_draws[i]["overlay"]);
}
}else{
sibuild_state=true;
for(var i in sibuild_draws){

map.addLayer(sibuild_draws[i]["layer"]);
map.addOverlay(sibuild_draws[i]["overlay"]);
}
}
})

$("#btn3").click(function(){
if(demolition_state){
demolition_state=false;
for(var i in demolition_draws){
map.removeLayer(demolition_draws[i]["layer"]);
map.removeOverlay(demolition_draws[i]["overlay"]);
}
}else{

demolition_state=true;
for(var i in demolition_draws){
map.addLayer(demolition_draws[i]["layer"]);
map.addOverlay(demolition_draws[i]["overlay"]);
}
}
})

$("#btn4").click(function(){
if(sdemolition_state){
sdemolition_state=false;
for(var i in sdemolition_draws){
map.removeLayer(sdemolition_draws[i]["layer"]);
map.removeOverlay(sdemolition_draws[i]["overlay"]);
}
}else{
sdemolition_state=true;
for(var i in sdemolition_draws){
map.addLayer(sdemolition_draws[i]["layer"]);
map.addOverlay(sdemolition_draws[i]["overlay"]);
}
}
})


//

//         var ibox=$("#ibox"+data);
//         alert(ibox.css('font-size'));
//         if(ibox.css("display")=="none"){
//            ibox.css("display","block");
//            alert("aaa");
//           }else{
//           alert("bbb");
//            ibox.css("display","none");
//           }



//}
//
//   var changeStyle = function(feature){
//        var ftype=feature.get("featuretype");
//        return new ol.style.Style({
//                stroke:new ol.style.Stroke({
//                    color: '#319FD3',
//                    width: 1,
//                }),
//                fill: new ol.style.Fill({ //矢量图层填充颜色，以及透明度
//                    color: 'rgba(255, 0, 0, 0.2)'
//                }),
//        });
//    };
//var close= document.getElementById("close_login").onclick;
//    var selectClick = new ol.interaction.Select({
//        condition: ol.events.condition.singleClick,
//        style:changeStyle,
//        //removeCondition: close
//    });
//    map.addInteraction(selectClick);
//    selectClick.on("select",singleClickEvent);
//    function singleClickEvent(e){
//        var coords=e.selected[0].getGeometry().getCoordinates();
//        var id=e.selected[0].getProperties().id;
//
//        //alert(e.selected[0].getProperties().id)
//        $.get("/query_draw/",{'id':id}, function(ret){
//            drawinfo=ret['drawinfo'];
//            //alert(drawinfo.name)
//            var name=$("#name");
//            var square = $("#area");
//            var type = $("#type");
//            //var address = $("#adress");
//            var time = $("#date");
//            name.text(drawinfo.name);
//            square.text(drawinfo.square);
//            type.text(drawinfo.graphiclabel);
//            //address.text(drawinfo.address);
//            time.text(drawinfo.foundtime);
//
//            var popup_info = document.getElementById("imagePath1");
//            popup_info.style.display="block";
//            var popup = new ol.Overlay({
//              element:popup_info,
//              autoPan: true,
//              autoPanAnimation: {
//                duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
//              }
//            });
//            popup.setPosition(coords[0][0]);
//            //popup_info.innerHTML=drawinfo.name
//
//            map.addOverlay(popup);
//        });
//        var bol22 = false;
//        var imagePath1=document.getElementById("imagePath1");
//        var xinxikuang1=document.getElementsByClassName('xinxikuang1')[0];
//        imagePath1.onclick=function(){
//        bol22=!bol22;
//        xinxikuang1.style.display=bol22?"block":"none";
//    }
//    }
});