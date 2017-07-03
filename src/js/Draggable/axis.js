$("#draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    },
    axis: "x"
});
