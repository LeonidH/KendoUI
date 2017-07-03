$("#draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    },
    dragstart: function (e) {
        e.currentTarget.hide();
    },
    dragend: function (e) {
        e.currentTarget.show();
    }
});
