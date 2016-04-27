// Code 

// Code for "waypoints" to put the _sticky class on your nav and apply the CSS you define
function initWaypoints(){
  var mainNavigation = $(".js-MainNavigation");
  var waypoint = new Waypoint({
    element: mainNavigation,
    handler: function(direction) {
      if(direction == "down"){
        mainNavigation.addClass("_sticky");
      }else{
        mainNavigation.removeClass("_sticky");
      }
    }
  });
}

$(function() {
  initWaypoints();

  $(".carousel").each(function(){
      var currentIndex = 0,
          thisCarousel = $(this),
          theseItems = thisCarousel.children("li"),
          itemCount = theseItems.length,
          thisNav = thisCarousel.closest(".js-content-section").find(".carousel_Nav > a");

      console.log(thisNav);

      /* add the active class to the first item to hide all the others */
      // $('.carousel > li:eq(' + currentIndex + ')').addClass('active');

      theseItems.first().addClass("active");

      thisNav.on("click", function(e){
        e.preventDefault();

        var thisActiveItem = thisCarousel.find("li.active"),
            isNext = $(this).hasClass("next"),
            nextItem = thisActiveItem.next();
            // currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

        // console.log(thisActiveItem, isNext, currentIndex);

        // if (currentIndex === -1) {
        //   currentIndex = itemCount - 1;
        // }

        // var nextItem = theseItems.eq(currentIndex);


        thisActiveItem.addClass(isNext ? 'next-out' : 'prev-out');
        nextItem.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');

        thisActiveItem.removeClass('active next-out prev-out');
        nextItem.removeClass('next-in prev-in')

        // setTimeout(function() { 
        //   thisActiveItem.removeClass('active next-out prev-out');
        //   nextItem.removeClass('next-in prev-in')
        // }, 500);

        return false;
      });

      // $('.carousel-nav').on('click', function() {
      //   var $active  = $('.carousel > li.active'),
      //       isNext   = $(this).hasClass('next');
      //   currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

      //   /* go back to the last item if we hit -1 */
      //   if (currentIndex === -1) {
      //     currentIndex = itemCount - 1;
      //   }

      //   var $next = $('.carousel > li:eq(' + currentIndex + ')');
      //   $active.addClass(isNext ? 'next-out' : 'prev-out');
      //   $next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
      //   setTimeout(function() { 
      //     $active.removeClass('active next-out prev-out');
      //     $next.removeClass('next-in prev-in')
      //   }, 500);
      //   return false;
      // });
  });

  // var currentIndex = 0,
  //     itemCount    = $('.carousel > li').length;

  // /* add the active class to the first item to hide all the others */
  // $('.carousel > li:eq(' + currentIndex + ')').addClass('active');

  // $('.carousel-nav').on('click', function() {
  //   var $active  = $('.carousel > li.active'),
  //       isNext   = $(this).hasClass('next');
  //   currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

  //    go back to the last item if we hit -1 
  //   if (currentIndex === -1) {
  //     currentIndex = itemCount - 1;
  //   }

  //   var $next = $('.carousel > li:eq(' + currentIndex + ')');
  //   $active.addClass(isNext ? 'next-out' : 'prev-out');
  //   $next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
  //   setTimeout(function() { 
  //     $active.removeClass('active next-out prev-out');
  //     $next.removeClass('next-in prev-in')
  //   }, 500);
  //   return false;
  // });
});