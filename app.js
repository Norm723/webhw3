$(document).ready(function() {
    $("h1").html("Hello, World!");
    $("#first").css("background","lightgrey");
    $("p").css("margin","30px");
    $("#first p").css("color","darkblue");
    $("p:even").css("color","darkred");
    $("form input, textarea, select").css({"margin":"20px 3px 0 10px", "font-size":"18px"})
    
    
    
    $("form input[type='submit']").click(function(){
      console.log("form submitted");
      let fname = $('#fname').val().trim();
      let lname = $('#lname').val().trim();
      if(fname==''){fname='<span class="err">-empty-</span>'}
      if(lname==''){lname='<span class="err">-empty-</span>'}
      $('#output').html(      
        'First name: ' + fname + '<br/>' +
        'Last name: ' + lname + '<br/>' +
        'Year: ' + $("input[name='year']:checked").val()
      );
      return false; // prevent default form action
    });
    
    $("form input").keypress(function(){
      $('#output').html('');
    })
    
    $("p").click(function(){
      console.log("p clicked")
      $(this).addClass('clicked');
      $(this).toggleClass('highlight');
    });
    
    $("#animate div").click(function(){
      $(this).animate({
        'top': Math.round(Math.random() * 100) + 'px',
        'left': Math.round(Math.random() * 70) + '%',
        'width': Math.round(Math.random() * 60 + 20) + '%',
        'height': Math.round(Math.random() * 100 + 60) + 'px'
      })
    });
    
    $('h3').hover( function(){
        $(this).css('color','purple');
      }, function() {
        $(this).css('color','black');
      }
    );
    
  // end jQuery document.ready  
  });
  