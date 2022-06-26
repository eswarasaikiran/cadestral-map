ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32644").setExtent([448799.796970, 1790537.519692, 450587.867701, 1791777.935252]);
var wms_layers = [];


        var lyr_googlemap_0 = new ol.layer.Tile({
            'title': 'google map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_APAQUAAquacultureCadastral_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://apsac.ap.gov.in/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "aquaculture:aquaculture_cadastral",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AP AQUA  - Aquaculture Cadastral",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_APAQUAAquacultureCadastral_1, 0]);
var lyr_APAQUAAquacultureDistrict_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://apsac.ap.gov.in/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "aquaculture:aquaculture_district",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AP AQUA  - Aquaculture District",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_APAQUAAquacultureDistrict_2, 0]);
var lyr_APAQUAAquacultureMandal_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://apsac.ap.gov.in/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "aquaculture:aquaculture_mandal",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AP AQUA  - Aquaculture Mandal",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_APAQUAAquacultureMandal_3, 0]);
var lyr_APAQUAAquacultureVillages_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://apsac.ap.gov.in/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "aquaculture:aquaculture_village",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AP AQUA  - Aquaculture Villages",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_APAQUAAquacultureVillages_4, 0]);

lyr_googlemap_0.setVisible(true);lyr_APAQUAAquacultureCadastral_1.setVisible(true);lyr_APAQUAAquacultureDistrict_2.setVisible(true);lyr_APAQUAAquacultureMandal_3.setVisible(true);lyr_APAQUAAquacultureVillages_4.setVisible(true);
var layersList = [lyr_googlemap_0,lyr_APAQUAAquacultureCadastral_1,lyr_APAQUAAquacultureDistrict_2,lyr_APAQUAAquacultureMandal_3,lyr_APAQUAAquacultureVillages_4];
