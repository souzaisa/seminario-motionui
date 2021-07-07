$(function () {
    var $yeti = $('#yeti');
    var $transitionList = $('#transitionList');
    var flag = false;
    var animating_html, animating_css;

    $('#transitioner').click(function () {
        MotionUI.animateIn($yeti, $transitionList.val());
    });

    $('#sobre-h2').click(function () {
        if (flag == true){
            MotionUI.animateOut('#sobre-div', 'fade-out');
            flag = false;
        }            
        else{
            MotionUI.animateIn('#sobre-div', 'slide-in-down');
            MotionUI.animateIn('#sobre-img', 'slide-in-left');
            flag = true;
        }        
    });

    $('#img_html').hover(function () {
        MotionUI.animateIn('#img_html', 'scale-in-down');
    });

    $('#img_css').hover(function () {   
        MotionUI.animateIn('#img_css', 'scale-in-down');
    });

    $('#img_js').hover(function () {
        MotionUI.animateIn('#img_js', 'spin-in');
    });

    $('#img_react').hover(function () {   
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