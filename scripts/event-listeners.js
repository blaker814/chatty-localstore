document.querySelector("body").addEventListener("click", function(event) {
    console.log(event);
  
    // Handle the click event on any li
    if (event.target.tagName.toLowerCase() === "li") {
      console.log("You clicked on an <li> element");
    }
  
    // Handle the click event on any DOM element with a certain class
    if (event.target.className === "article-section") {
      console.log("You clicked on an `article-section` element");
    }
  
    // Inspect the `id` property of the event target
    if (event.target.id === "message") {
      console.log("You clicked on the message element");
    }
  });