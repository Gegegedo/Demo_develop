
        var geoserver_layer = new ol.layer.Image({
              source: new ol.source.ImageWMS({
              url:'http://172.20.53.157:8080/geoserver/wms',
              projection:'EPSG:4326',
              params:{
                LAYERS: 'GF2:GF2_PMS1_E102.6_N24.4_20170119_L1A0002132394-MSS1_fusion',}
              }),
              opacity:0.5,
            });
        var geoserver_layer3 = new ol.layer.Image({
          source: new ol.source.ImageWMS({
          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'GF2:GF2_PMS1_E102.9_N24.6_20160809_L1A0001751597-MSS1_fusion',}
          }),
          opacity:0.6,
        });

        //172.20.53.157:8080/geoserver/wms

        var geoserver_layer2=new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url:'http://t3.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}'
                }),
                projection: "EPSG:4326",
                id:"影像",
                opacity:1,
            });