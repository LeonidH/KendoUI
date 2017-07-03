$(".purple").kendoDraggable({
    hint: function (element) {
        return element.clone();
    }
});

$("#area").kendoDropTargetArea({
    filter: "#leftArea, #rightArea",
    dragenter: function (e) {
        e.draggable.hint.css("opacity", 0.3);
    },
    dragleave: function (e) {
        e.draggable.hint.css("opacity", 1);
    }
});
