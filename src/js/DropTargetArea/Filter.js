  $("#draggable").kendoDraggable({
    hint: function(element) {
      return element.clone();
    }
  });

  $("#area").kendoDropTargetArea({ 
      filter: "#droptarget",
      drop: onDrop
  });

  function onDrop(e) {
    e.dropTarget.toggleClass("orange").toggleClass("purple");
    e.draggable.element.toggleClass("orange").toggleClass("purple");
  }
