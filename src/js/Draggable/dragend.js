$("#draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    },
    dragstart: function (e) {
        console.log('Start');
        e.currentTarget.hide();
    },
    dragend: function (e) {
        console.log('End');
        e.currentTarget.show();
    }
});
