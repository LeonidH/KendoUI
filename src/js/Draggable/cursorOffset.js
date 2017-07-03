$("#draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    },
    cursorOffset: { top: 30, left: 100 }
});
