$("#cancel").click(function () {    
    $("#draggable").data("kendoDraggable").cancelHold();
    $("#draggable").removeClass("active-draggable");
});

$("#draggable").kendoDraggable({
    holdToDrag: false,
    hold: function (e) {
        $("#draggable").addClass("active-draggable");
    },

    cancelHold: function (e) {
        $("#draggable").holdToDrag = false;
    },
    hint: function (element) {
        var hintElement = $("<div id='hint'></div>");
        hintElement.css({
            background: "#f00",
            width: 200,
            height: 200
        });
        return hintElement;
    }
});

/*console.log($("#draggable").data("kendoDraggable"));*/
