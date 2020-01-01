$(document).ready(function() {
    /* $("h1").html("Hello, World!");
    $("#first").css("background","lightgrey");
    $("p").css("margin","30px");
    $("#first p").css("color","darkblue");
    $("p:even").css("color","darkred");*/
    $("form input, textarea, select").css({"margin":"20px 3px 0 10px", "font-size":"18px"}) 
    
    
    
    $("form input[type='submit']").click(async function(){
      console.log("form submitted");
      let item = $('#item').val().trim();
      let quantity = $('#quantity').val().trim();
      let email = $('#email').val().trim();
      let clean = true;
      if(item==''){item='<span class="err">required field</span>'; problem=false;}
      if(quantity==''){quantity='<span class="err">required field</span>';problem=false;}
      if(email==''){email='<span class="err">required field</span>';problem=false;}
      let ship =$("input[name='ship']:checked").val();
        if(ship == 'on') {
          ship = 'Yes';
        } else {
          ship = 'No';
        }
      if (clean) {
        $('#result').html(      
          'Item Name: ' + item + '<br/>' +
          'Quantity: ' + quantity + '<br/>' +
          'Email: ' + email + '<br/>' +
          'Message: ' + $('#message').val().trim() + '<br/>' +
          'Color: ' + $("input[name='color']:checked").val() + '<br/>' +
          'Size: ' + $("#size").children("option:selected").val() + '<br/>' +
          'Free Shipping: ' + ship
        );
      }
      return false; // prevent default form action
    });
    
    $("form input").keypress(function(){
      console.log('in form');
      $('#result').html('');
    })

    $("#message").focus(function(){
      console.log('in textarea');
      $(this).text('');
    })

    $("#message").blur(function(){
      console.log('in textarea');
      let val =  $(this).text();
      console.log(val);
      if(val == ''){
        $(this).text('Message');
      }
    })
    
   /*  $("p").click(function(){
      console.log("p clicked")
      $(this).addClass('clicked');
      $(this).toggleClass('highlight');
    });
     */
    /* $('h3').hover( function(){
        $(this).css('color','purple');
      }, function() {
        $(this).css('color','black');
      } 
    );*/
    
  // end jQuery document.ready  
  });
  