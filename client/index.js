
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
  bindEvents();
  
}
function bindEvents() {
  // .on events
  $('*').on('click', function(event) {
    $('#pageclick').text(event.pageX + ", " + event.pageY + " pixels");
  });
  $('#hoversection').on('mouseenter', function() {
    $('#mousehoverlisten').text("Mouse Entered");
  });
  $('#hoversection').on('mouseleave', function() {
    $('#mousehoverlisten').text("Mouse Left");
  });
  $(window).on('resize', function() {
    $('#resizelisten').text('Window size: ' + window.innerWidth + ", " + window.innerHeight);
  });
  $(window).on('scroll', function() {
    $('#scrolllisten').text('Scroll Position: ' + window.pageYOffset)
  });
  $('#keyinput').on('keypress', function(event) {
    $('#keypresslisten').text('Keypress: ' + event.originalEvent.key);
  });
  $('#clicksection').on('mousedown', function() {
    $('#mousepresslisten').text('Mouse Pressed Down');
  });
  $('#clicksection').on('mouseup', function() {
    $('#mousepresslisten').text('Mouse Released');
  })
  
  
}
function readyWindow(windowRef) {
  // .resize event
}
