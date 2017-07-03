import '../../img/like.png';

$("#draggable").kendoDraggable({
    hint: function (element) {
        var hintElement = $("<div id='hint'></div>");
        hintElement.css({
            "background-image": "url('/img/like.png')",
            "width": "230px",
            "height": "80px"
        });
        return hintElement;
    }
});
