function drawCanvas(){
    var canvasDimensions = 750
    $('.canvas').css('grid-template-columns', )
        for(var i = 0 ; i < canvasDimensions; i++){
        $('.canvas').append("<div class='cell'>");
    }
}
drawCanvas();
$(function(){
    var selectedColor = 'black'

    $(".color").each(function(index, element){
        var populateColor = $(element).attr('data-color')
        $(element).css('background-color', populateColor);
        
    });

    $('.color').on('click', function(){
        selectedColor = $(this).attr('data-color')
        $("#currentcolor").css('background-color',selectedColor);
    });



    $('.cell').mouseenter(function () {
        var currentColor = $(this).css('background-color');

        $(this).css('background-color', selectedColor);
        
        $('.cell').on('click', function () {
            $(this).css('background-color', selectedColor);
            $(this).css('border', 0);
            currentColor = selectedColor;
        });
        
        $('.cell').mouseleave(function () {
            $(this).css('background-color', currentColor);
        });
    });


});