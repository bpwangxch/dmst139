$(function () {
    $(window).load(function () {
        initMap();
    });

    $(window).resize(function () {
        map.updateSize();
    });

    $("#layer-control img").click(function(){
        if($(this).hasClass("vec")){
            toggleBaseMap(vectorBaseLayers,false);
            toggleBaseMap(imageBaseLayers,true);
            $(this).removeClass("vec");
            $(this).addClass("img");
            $(this).attr('src',"../images/mapControlvec.png");
            $("#layer-name").html("影像");
        }else{
            toggleBaseMap(vectorBaseLayers,true);
            toggleBaseMap(imageBaseLayers,false);
            $(this).removeClass("img");
            $(this).addClass("vec");
            $(this).attr('src',"../images/mapControlimg.png");
            $("#layer-name").html("矢量");
        }
    });


    /**
     * 图层切换
     * @param layers
     * @param visible
     */

    function toggleBaseMap(layers, visible){
        $.each(layers, function(index, layer){
            layer.setVisible(visible);
        });
    }

    var zoomControlBtn = $("#zoom-control").children("div");
    $(zoomControlBtn.get(0)).click(function () {
        zoomIn();
    });
    $(zoomControlBtn.get(1)).click(function () {
        zoomOut();
    });

});

