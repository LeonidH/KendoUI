$(".draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    }
});

$(".target").kendoDropTarget({
    dragenter: function (e) {
        e.draggable.hint.css("opacity", 0.5); //modify the draggable hint
        e.dropTarget.removeClass("orange").addClass("purple"); //modify dropTarget element
    },
    dragleave: function (e) {
        e.draggable.hint.css("opacity", 1); //modify the draggable hint
        e.dropTarget.removeClass("purple").addClass("orange"); //modify dropTarget element

    }
});
