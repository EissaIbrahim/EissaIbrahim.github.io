var card = $('.main');
var p = $('.description');

var oldText = 'If you are a gamer,then this event is for you.'

var newText = '10 mega Giveaways'

card.on('mouseenter', function() {
  
  TweenMax.to(p, 1, {
    text: newText
  });
  
});

card.on('mouseleave', function() {
  
  TweenMax.to(p, 1, {
    text: oldText
  });
  
});