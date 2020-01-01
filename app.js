$(document).ready(function() {
    /* $("h1").html("Hello, World!");
    $("#first").css("background","lightgrey");
    $("p").css("margin","30px");
    $("#first p").css("color","darkblue");
    $("p:even").css("color","darkred");
    $("form input, textarea, select").css({"margin":"20px 3px 0 10px", "font-size":"18px"}) */
    
    
    
    $("form input[type='submit']").click(function(e){
      e.preventDefault();
      console.log("form submitted");
      let ship =$("input[name='ship']:checked").val();
      let item = $('#item').val().trim();
      let quantity = $('#quantity').val().trim();
      let email = $('#email').val().trim();
      let clean = checkInput(item, quantity,email);
        if(ship == 'on') {
          ship = 'Yes';
        } else {
          ship = 'No';
        }
      if (clean) {
        showResult(item, quantity, email, ship);
         $("form")[0].reset();
      }
      return false; // prevent default form action
    });
    
    $("form input").keypress(function(){
      console.log('in form');
      $('#result').html('');
      $('.thanks').css('visibility', 'hidden');
    })

    $("form input").focus(()=> {
        console.log('in focus');
        if($(':focus').hasClass("err")){
          $(':focus').removeClass("err");
          $(':focus').val('');
        }
    })
    /* $("#message").focus(function(){
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
    }) */
    
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

  function checkInput(item, quantity, email) {
    let clean = true;
    if(item==''){$('#item').addClass("err");$('#item').val('required field'); clean=false;}
    if(quantity==''){$('#quantity').addClass("err");$('#quantity').val('required field');clean=false;}
    else if(!checkIfNumber(quantity)){$('#quantity').addClass("err");$('#quantity').val('not a number');clean=false;}
    if(email==''){$('#email').addClass("err");$('#email').val('required field');clean=false;}
    else if(!checkEmail(email)){$('#email').addClass("err");$('#email').val('not a valid email');clean=false;}
    return clean;
  }
  
  function showResult(item, quantity, email, ship) {
    $('.thanks').css('visibility', 'visible');
    $('#result').html(      
      'Item Name: ' + item + '<br/>' +
      'Quantity: ' + quantity + '<br/>' +
      'Email: ' + email + '<br/>' +
      'Message: ' + $('#message').val().trim() + '<br/>' +
      'Color: ' + $("input[name='color']:checked").val() + '<br/>' +
      'Size: ' + $("#size").children("option:selected").val() + '<br/>' +
      'Free Shipping: ' + ship )
  }

  function checkIfNumber(str){
    return /^\+?(0|[1-9]\d*)$/.test(str);
  }

  function checkEmail(str){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str);
  }