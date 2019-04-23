var map, projection, view, vectorBaseLayers, imageBaseLayers;
function initMap() {
    projection = new ol.proj.Projection({
        code: 'EPSG:4490',
        extent: [-180, -90, 180, 90],
        units: ol.proj.METERS_PER_UNIT.degrees
    });

    view = new ol.View({
        center: [100.1634, 36.90758],
        projection: projection,
        minZoom: 1,
        maxZoom: 18,
        zoom: 10
    });

    var controls = ol.control.defaults({
        attribution: false,
        rotate: false,
        zoom: false
    });


    vectorBaseLayers = initVectorBaseLayers(projection, false);
    imageBaseLayers = initImgtorBaseLayers(projection, true);

    map = new ol.Map({
        target: "mapView",
        logo: false,
        controls: controls,
        layers: new Array().concat(vectorBaseLayers,imageBaseLayers),
        view: view
    });

    function initVectorBaseLayers(projection, visible) {
        var vectorBaseLayers = [
            new ol.layer.Tile({
                id: "vec_c",
                source: new ol.source.XYZ({
                    url: 'http://t{0-7}.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}',
                    projection: projection
                }),
                visible: visible
            }),
            new ol.layer.Tile({
                id: "cva_c",
                source: new ol.source.XYZ({
                    url: 'http://t{0-7}.tianditu.com/DataServer?T=cva_c&x={x}&y={y}&l={z}',
                    projection: projection
                }),
                visible: visible
            })
        ];
        return vectorBaseLayers;
    }
    function initImgtorBaseLayers(projection, visible) {
        var vectorBaseLayers = [
            new ol.layer.Tile({
                id: "img_c",
                source: new ol.source.XYZ({
                    url: 'http://t{0-7}.tianditu.com/DataServer?T=img_c&x={x}&y={y}&l={z}',
                    projection: projection
                }),
                visible: visible
            }),
            new ol.layer.Tile({
                id: "cia_c",
                source: new ol.source.XYZ({
                    url: 'http://t{0-7}.tianditu.com/DataServer?T=cia_c&x={x}&y={y}&l={z}',
                    projection: projection
                }),
                visible: visible
            })
        ];
        return vectorBaseLayers;
    }
}




