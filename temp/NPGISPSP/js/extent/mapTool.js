/**
 * Created by wangxch on 5/25/2017.
 */
function zoomIn(){
    var currentLevel = map.getView().getZoom();
    map.getView().setZoom(currentLevel+2);
}
function zoomOut(){
    var currentLevel = map.getView().getZoom();
    map.getView().setZoom(currentLevel-2);
}