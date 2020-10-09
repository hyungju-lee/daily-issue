var showPopAlert = function(layerId) {
    var $layer = $(layerId);
    if (layerId === layerObj[5]) {
        $layer.css('display', 'block');
        $layer.find('.common-layer__inner').css('transform', 'translate3d(100%, 0, 0)');
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                $layer.find('.common-layer__inner').css('transform', 'translate3d(0, 0, 0)');
                $layer.find('.common-layer__inner').css('transition', 'transform 0.5s');
            })
        })
        return
    }

    $('.common-layer').hide();
    $layer.show();
};