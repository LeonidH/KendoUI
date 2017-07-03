$(".orange").kendoDraggable({
    group: "orangeGroup",
    hint: function (element) {
        return element.clone();
    }
});

$(".purple").kendoDraggable({
    group: "purpleGroup",
    hint: function (element) {
        return element.clone();
    }
});

$("#area").kendoDropTargetArea({
    group: "orangeGroup",
    filter: "#leftArea, #rightArea",
    drop: onDrop
});

function onDrop(e) {
    e.draggable.destroy();
    e.draggable.element.css("opacity", 0.3);
}
