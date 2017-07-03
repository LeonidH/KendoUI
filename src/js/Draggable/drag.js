$("#draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    },
    drag: function (e) {
        console.log("x: ", e.screenX, "y: ", e.screenY);
    }
});
