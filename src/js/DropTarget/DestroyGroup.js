$(".orange").kendoDraggable({
    group: "orangeGroup",
    hint: function (element) {
        return element.clone();
    }
});

$(".orangeArea").kendoDropTarget({
    group: "orangeGroup",
    drop: onDrop,
});

function onDrop(e) {
    e.draggable.destroy();
    e.draggable.element.remove();
}

//destroy components and detach events
kendo.ui.DropTarget.destroyGroup("orangeGroup");
