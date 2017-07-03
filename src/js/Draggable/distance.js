$("#draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    },
    distance: 50
});
