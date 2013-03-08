$(function() {

    function getWindowHeight() {
        return Math.ceil(Math.max($(window).height(), 650));
    }

    function setBlobHeights() {
        var height = getWindowHeight();
        var box, padding;
        $('div.blob').each(function() {
            box = $(this).find('.box');
            padding = (height - box.height())/2;
            if (padding > 20) {
                $(this).attr('style', 'padding: ' + padding + 'px 0; height: ' + height + 'px;');
            } else {
                $(this).attr('style', 'padding: 20px 0; height: ' + (box.height() + 40) + 'px;');
            }
        });
    }

    setBlobHeights();
    $(window).on('resize', setBlobHeights);

    $('a[data-scroll]').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('data-scroll') || $(this).href();
        $.scrollTo(target, 1000);
    });
});