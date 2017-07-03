$("#draggable").kendoDraggable({ 
    hint: function(element) { return element.clone(); 
    }, 
    autoScroll: true 
});
