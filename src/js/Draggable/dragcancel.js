$("#draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    },
    dragcancel: function (e) {
        console.log("'Esc' key pressed! Dragging is cancelled.");
    }
});
