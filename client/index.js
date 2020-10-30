
function highlight(element) {
  $(element).addClass('highlighted');
  setTimeout(function() {
    $(element).removeClass('highlighted');
  }, 1000)
}