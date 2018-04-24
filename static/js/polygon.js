$(function(){
    draw_btn_flag=true;
    draw_vector_layer=new ol.source.Vector();

    var draw = new ol.interaction.Draw({
        source: draw_vector_layer,
        type: 'Polygon',
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffcc33',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#ffcc33'
                })
            })
        }),
    });
    draw.on('drawend', function(e) {
        var geojson_c = new ol.format.GeoJSON();
        var current_feature=e.feature;
        var geo = current_feature.getGeometry();
        var coordinates=geo.getCoordinates();
        var geostr = coordinates[0].join(";");
        //alert(geostr);


        var container = document.getElementById('popup');
        container.style.display="block"

        var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
            element: container,
            autoPan: true,
            autoPanAnimation: {
                duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
            }
        }));
        var coordinate = coordinates[0][0];
        overlay.setPosition(coordinate);
        map.addOverlay(overlay);

        var submit = document.getElementById("save_submit");
        var cancel = document.getElementById("save_cancel");

        submit.onclick=function(){
            var name = document.getElementById("name").value;
            var grahpictype = document.getElementById("grahpictype").value;
            var grahpiclabel = document.getElementById("grahpiclabel").value;
            var discrib = document.getElementById("discrib").value;
            var square = document.getElementById("square").value;
            var coordinate = document.getElementById("coordinate").value;
            $.ajax({
                type:'post',
                url:'/save_draw/',
                data: {
                    'coordi':geostr,
                    'name':name,
                    'grahpictype':grahpictype,
                    'grahpiclabel':grahpiclabel,
                    'discrib':discrib,
                    'square':square,
                    'coordinate':coordinate,
                },
                success:function(){
                    alert('success')},
                error:function(){
                    alert('error')}
             });
        }
        cancel.onclick=function(){
            container.style.display="none";
        }

    });

    draw_btn=document.getElementById("draw_button_div");
    draw_btn.onclick=function(){
        if(draw_btn_flag){
        $("#distance_button_div").hide();
        $("#area_button_div").hide();
        map.addInteraction(draw);
        draw_btn_flag=false;
        draw_btn.innerHTML="取消标绘";
        }
        else{
        $("#distance_button_div").show();
        $("#area_button_div").show();
        map.removeInteraction(draw);
        draw_btn_flag=true
        draw_btn.innerHTML="标绘";
        }
    }
});

function save_data(geotype,geodata,name,type,time){

}