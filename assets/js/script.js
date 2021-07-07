$(function () {
    var $yeti = $('#yeti');
    var $transitionList = $('#transitionList');
    var flag = false;

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
});