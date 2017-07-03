$("#container").kendoDraggable({
    ignore: "input",
    hint: function (element) {
        return element.clone();
    }
});
