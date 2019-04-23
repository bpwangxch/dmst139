function PoiTool(map) {
    if (!map) {
        return;
    }

    //在Overlay的element中如果使用$("#popup")会出错
    var element = document.getElementById('popup');
    var tooltips = [];
    var popup = new ol.Overlay({
        element: element,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        },
        positioning: 'bottom-center'
    });

    map.addOverlay(popup);

    function createStyle(src, img) {
        return new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [0.5, 0.5],
                src: src,
                img: img,
                imgSize: img ? [img.width, img.height] : undefined
            }))
        });

    }

    this.addPoi = function (data) {
        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point([data.longitude, data.latitude])
        });
        var rasterLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [iconFeature]
            }),
            style: createStyle(data.poiicons, undefined)
        });
        map.addLayer(rasterLayer);
        tooltips.push(rasterLayer);
        var popPosition = [data.longitude, data.latitude];
        popuplayers(popPosition);
    };

    var popuplayers = function (popPosition) {
        $("#popup").css({
            "width": "195px",
            "display": "block",
            "background-color": "white",
            "padding": "10px",
            "text-align": "center",
            "box-shadow": "6px 6px 1px #888888",
            "position": "relative",
            "bottom": "22px"
        });
        $("#popup-title").css("display", "block");
        $("#popup-img").attr("src", "images/DeliciousFood.jpg");
        $("#popup-content").css({
            "max-height": $(window).height() - 250 + "px",
            "overflow-x": "hidden"
        });

        var baseinformation = $(
            '<table>' +
            '<tr>' +
            '<td>大美西后加村欢迎你</td>' +
            '</tr>' +
            '</table>'
        );
        $("#content-text").empty();
        $("#content-text").append(baseinformation);

        popup.setPosition(popPosition);
        map.updateSize();
    };
}

