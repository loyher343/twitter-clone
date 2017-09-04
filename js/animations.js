$(document).ready(function(){
    
$('#tweet-controls').css('display','none');

$('.tweet-compose').on('click',function(){
    $('.tweet-compose').css('height', '5em')
     $('#tweet-controls').show()

    
})

// $('.stats').hide();
// $('tweet').on('hover'function(){
//     $('.stats').mouseenter()

// },
// function(){

// })



$('.tweet-compose').on('keyup',function(){
    //console.log('key pressed')
    var tLength = $('.tweet-compose').val().length;
   // console.log(tLength)
    var count = 140 - tLength;
    console.log(count)
    if(count > 0){
        $('#tweet-submit').prop('disabled',false)
    }
    if(count<0){
        console.log('yay')
        $('#tweet-submit').prop('disabled',true)
        }
   if(count <= 10 && count >=0){
    $('#char-count').text(count)
    $('#char-count').css('color','red')
    
   }else if (count >10){
    $('#char-count').text(count)
    $('#char-count').css('color','#999')
    
   }

   
})
})


$('#tweet-submit').on('click',function(){
    //console.log($('.tweet-compose').val())
   // $('.tweet-compose').val()
   var newtwit = $('.tweet').first().clone()
   newtwit.find('.avatar').attr('src', 'img/alagoon.jpg');
   newtwit.find('.fullname').text('That one guy');
   newtwit.find('.username').text('@thisGuy');
   newtwit.find('.tweet-text').text($('.tweet-compose').val());

     $('#stream').prepend(newtwit)





});

