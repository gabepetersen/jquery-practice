
/**
 * Function to highlight a jquery selection
 * @param element - a string referencing element/s on the page
 */
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

/**
 * This gets called when document is ready
 */
function readyJquery() {
  // bind all the events we need for example
  bindEvents();
  // bind all effects we need for example
  bindEffects();
  bindCSS();
  bindHTML();
}

/**
 * bind events like page click, resize, mousedown, scroll,  and keypress
 */
function bindEvents() {
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
  });
}
/**
 * This is the stuff demonstrating the jquery animations
 */
function bindEffects() {
  $('#showbutton').on('click', function() {
    $('#displayeffectdiv').show('slow', function() {
      console.log("div shown");
    });
  });
  $('#hidebutton').on('click', function() {
    $('#displayeffectdiv').hide(2000, function() {
      console.log("div hide");
    })
  });
  $('#fadeinbutton').on('click', function() {
    $('#fadeeffectdiv').fadeIn(1500);
  })
  $('#fadeoutbutton').on('click', function() {
    $('#fadeeffectdiv').fadeOut('slow')
  })
  // animate the box
  $('#animatebutton').on('click', function() {
    $('#animateeffectdiv').text("changing height...");
    $('#animateeffectdiv')
      .animate({ height: '100px' }, 2000, function() {
        // 'this' refers to the original caller object, which is <div id='animateeffectdiv'>...</div>
        $(this).text("changing width...");
      })
      .animate({ width: '150px' }, 2000, function() {
        $(this).text("delaying 2 seconds and then move left...");
      })
      .delay(2000)
      .animate({ left: '+=200' }, 2000, function() {
        $(this).text('fading out...');
      })
      .animate({ opacity: 0 }, 2000)
      .animate({ left: '-=200', width: '300px', height: '150px' }, 500, function() {
        $(this).text('I\'m Back!');
      })
      .animate({ opacity: 1 }, 2000);
  });
  $('#slidebutton').on('click', function() {
    $('#slideeffectdiv').slideToggle(1000);
  })
}

/**
 * gets css data stuff from html elements
 */
function bindCSS() {
  $('#csstextexample').on('mousedown mousemove', function() {
    $('#csswidth').text( `${$(this).width()}, ${$(this).height()}`);
    $('#cssinnerwidth').text( `${$(this).innerWidth()}, ${$(this).innerHeight()}`);
    $('#cssouterwidth').text( `${$(this).outerWidth()}, ${$(this).outerHeight()}`);
    $('#cssoffset').text( `left: ${$(this).offset().left}, top: ${$(this).offset().top}`);
    $('#csshasclass').text( `${$(this).hasClass('cooltextbox')}` );
    $('#cssaddclass').on('click', function() {
      $('#csstextexample').addClass('bluebackground');
      $('#csscss').text(`${$('#csstextexample').css('background-color')}`);
    });
    $('#cssremoveclass').on('click', function() {
      $('#csstextexample').removeClass('bluebackground');
      $('#csscss').text(`${$('#csstextexample').css('background-color')}`);
    });
    $('#csscss').text(`${$(this).css('background-color')}`);
  })  
}

function bindHTML() {
  // this will only work for the original box, bc this code is only ran ONCE
  // in order for it to work on all .clonediv's - you would have to assign
  // new events listeners for each new .clonediv
  $('.clonediv').on('click', function() {
    $(this).clone().insertAfter(this);
  });
  var toggleElement;
  $('#htmldetach').on('click', function() {
    if(toggleElement) {
      toggleElement.appendTo('.htmlexamples');
      toggleElement = null;
    } else {
      toggleElement = $('#appenddiv').detach();
    }
  });
  $('#htmlreplace').on('click', function() {
    $('#replacep').replaceWith('<div>This is a Div!</div>')
  });
  $('#htmlappend').on('click', function() {
    $('#appendlist').append('<li>New List Item</li>')
  });
  $('#htmltext').on('click', function() {
    $('#angrydiv').text('I like turtles');
  });
  var paragraph = $('#wrappedp');
  $('#htmlwrap').on('click', function() {
    if(paragraph.parent().is('em')) {
      paragraph.unwrap();
      paragraph.text('you can wrap me again if you want')
    } else {
      paragraph.wrap('<em></em>');
      paragraph.text('you can unwrap me now')
    }
  });
}

function readyWindow(windowRef) {
  // maybe do something
}
