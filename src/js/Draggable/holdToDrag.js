$("#draggable").kendoDraggable({
    holdToDrag: true,
    hold: function (e) {
        $("#draggable").css("background", "#f00");
        $("#alert").show();
    },
    hint: function (element) {
        var hintElement = $("<div id='hint'></div>");
        hintElement.css({
            background: "#3c0",
            width: 200,
            height: 200
        });
        return hintElement;
    }
});
