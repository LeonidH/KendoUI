$("#draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    },
    container: $("#container")
});
