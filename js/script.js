$(document).ready(function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // http://getbootstrap.com/javascript/#carousel
  $('#myCarousel').carousel({ interval: 5000 });
    
  $('.multi-item-carousel .item').each(function(){
    var itemToClone = $(this);
      
    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });

    //change page when scrolling, to be investigated
    var position = $('#scrollbar').scrollTop();
    
    $('#scrollbar').scroll(function(){
        var scroll = $('#scrollbar').scrollTop();
        //find which view is current
        var viewId = $('.collapse .nav li.active').children(['0']).attr('href');
        if(scroll > position){
            //down
            console.info("down");               
            var nextId = $('.collapse .nav li.active').next().children(['0']).attr('href');
        } else {
            //up              
            var nextId = $('.collapse .nav li.active').prev().children(['0']).attr('href');
        }    
        //$('#scrollbar').stop(true, false).animate({scrollTop: $(nextId).position().top}, 1000);    
        //document.getElementById(nexId).scrollIntoView();
        //$('#scrollbar').stop(true, false).scrollTo(nextId, 800);
    });
    
    //preview google maps with my location
    function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 54.884247, lng: 23.948075},
          zoom: 8
        });
    }
    
});
