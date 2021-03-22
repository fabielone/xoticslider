document.addEventListener('DOMContentLoaded', function () {
    var secondarySlider = new Splide('#secondary-slider', {
        fixedWidth: 100,
        height: 60,
        gap: 10,
        rewind: true,
        cover: true,
        isNavigation: false,
        pagination: false,
        focus: 'center',
        breakpoints: {
            '600': {
                fixedWidth: 66,
                height: 40,
            }
        }
    }).mount();
    var primarySlider = new Splide('#primary-slider', {
        type: 'fade',
        heightRatio: 0.40,
        pagination: false,
        arrows: false,
        cover: true,
    }); // do not call mount() here.

    primarySlider.sync(secondarySlider).mount();


});
