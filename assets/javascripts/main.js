// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

/*
function main() {

(function () {
   'use strict';
    $(window).load(function() {
        var $container = $('#lightbox');
        
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');

            var types = ['.abstract', '.poster', '.presentation'];

            if (selector == '*') {
              for (var i = 0; i < types.length; i++) {
                $(types[i]).show("slow");
              }//for
            } else {
              for (var i = 0; i < types.length; i++) {
                if (types[i] == selector) {
                  $(types[i]).show("slow");
                } else {
                  $(types[i]).hide("slow");
                }//else
              }//for
            }//else

            
  
            return false;
        });

    }); //window load
}()); //function wrapper
}//main
main();

*/