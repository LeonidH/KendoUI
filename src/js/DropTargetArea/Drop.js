$(".draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    }
});

$("#area1,#area2").kendoDropTargetArea({
    filter: ".droptarget",
    drop: onDrop
});

function onDrop(e) {
    if (e.draggable.currentTarget[0] !== e.dropTarget[0]) {        
        $('#area2').append($('#area1>div:first-child'));
        $('#area1').append($('#area2>div:first-child'));
    }
}
