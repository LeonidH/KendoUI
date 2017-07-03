/* Event fired on the drag target */
document.ondragstart = function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element.";
};

/* Events fired on the drop target */
document.ondragover = function(event) {
    console.log(event);
    event.preventDefault();
    console.log(event);
};

document.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
};
