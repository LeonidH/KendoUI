$("#container").kendoDraggable({
    filter: ".draggable",
    hint: function (element) {
        return element.clone();
    }
});
