function func1() {
    $('#img1').fadeToggle();
}

function func2() {
    $('.para').css('font-style', 'italic');
    $('#div1, #div2').css('background-color', 'red');
    $('#div3>ul>li').css('color', 'blue');
}


$('#btn3').click(() => {
    $('#img3').css('width', '100px');
});

$(document).ready(() => {
    $('#btn4').dblclick(() => {
        $('#img4').css('height', '100px');
    });

    $('#img5').mouseenter(() => {
        $('#img5').css('border', '2px solid red');
    });

    $('#img5').mouseleave(() => {
        $('#img5').css('border', 'none');
    });
});

$('#btn6').click(() => {
    $('#img6').hide(1000);
});

$('#btn7').click(() => {
    $('#img6').show(1000);
});

$('#btn8').click(() => {
    $('#img6').toggle(1000);
});