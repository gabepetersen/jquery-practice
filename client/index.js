
function highlight(element) {
  if($(element)) {
    $(element).addClass('highlighted');
    setTimeout(function() {
      $(element).removeClass('highlighted');
    }, 2000);
  } else {
    alert("passed element is not valid");
  }
}

function readyJquery() {
  $("*").on("click", function(event) {
    $('.pageclick').text("Clicked at " + event.pageX + ", " + event.pageY + " pixels");
  })
}
function readyWindow() {
  // maybe do something here in the future
}
