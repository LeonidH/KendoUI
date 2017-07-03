$(".draggable").kendoDraggable({
    hint: function (element) {
        return element.clone();
    }
});

$(".target").kendoDropTarget({
    drop: function (e) {
        console.log(e);
        e.draggable.destroy(); //detach events
        e.draggable.element.css("opacity", 0.3); //change opacity
        console.log(e);
    }
});
