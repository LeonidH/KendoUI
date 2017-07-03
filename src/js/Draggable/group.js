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

$("#orangeArea").kendoDropTarget({ group: "orangeGroup", drop: onDrop });
$("#purpleArea").kendoDropTarget({ group: "purpleGroup", drop: onDrop });

function onDrop(e) {
    e.draggable.destroy();
    e.draggable.element.remove();
}
