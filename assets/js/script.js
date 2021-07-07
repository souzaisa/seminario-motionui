$(function() {
    var $yeti = $('#yeti');
    var $transitionList = $('#transitionList');
    var flag = false;
    var animating_html, animating_css;

    MotionUI.animateIn('.info', 'slide-in-left slow');

    $('.seta-animada').hover(function() {
        MotionUI.animateIn('.seta-animada', 'wiggle slow');
    });

    $('#sobre-h2').click(function() {
        if (flag == true) {
            MotionUI.animateOut('#sobre-div', 'fade-out');
            flag = false;
        } else {
            MotionUI.animateIn('#sobre-div', 'hinge-in-from-top');
            MotionUI.animateIn('#sobre-img', 'hinge-in-from-right');
            flag = true;
        }
    });

    $('#img_html').hover(function () {
        MotionUI.animateIn('#img_html', 'scale-in-up');
    });

    $('#img_css').hover(function() {
        MotionUI.animateIn('#img_css', 'scale-in-down');
    });

    $('#img_js').hover(function () {
        MotionUI.animateIn('#img_js', 'spin-in-ccw');
    });

    $('#img_react').hover(function() {
        MotionUI.animateIn('#img_react', 'spin-in');
    });

    $('#hobbie1').hover(function() {
        MotionUI.animateIn('#hobbie1', 'hinge-in-from-middle-y');
    });

    $('#hobbie2').hover(function() {
        MotionUI.animateIn('#hobbie2', 'hinge-in-from-top');
    });

    $('#hobbie3').hover(function() {
        MotionUI.animateIn('#hobbie3', 'hinge-in-from-bottom');
    });
});