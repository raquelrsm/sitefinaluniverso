

jQuery(function($) {


    $(window).load( function() {

    
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 170,
            itemMargin: 10,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel",
            start: function() {

                $('.js-content').hide();
                
                $('#status').fadeOut(); 
                $('#preloader').delay(350).fadeOut('slow'); 

                var hash = window.location.hash.substring(1);
                
                if(hash == "") {
                    hash = "page-1";
                }

                var defaultImgSrc = $("img#" + hash + "-img").attr('src');
                $.backstretch(defaultImgSrc, {speed: 500});                            
                $(".js-nav-item[data-nav-item-id='" + hash + "']").addClass("active");  
                $(".js-content[data-page-id='" + hash + "']").show();    
                $(".js-footer").fadeIn();  
                
            }
        });       

    });
    
    $(document).ready(function(){


        $(".js-site-title").click(function(){
            $('.js-nav').fadeToggle();
            $('.js-content-wrapper').fadeToggle();
            history.pushState("", document.title, window.location.pathname);   
            $('.js-footer').toggleClass("sticky");
        });
        
      
        $(".js-nav-item").click(function(){

            // Change nav item active link

            $(".js-nav-item").removeClass("active");   
            $(this).addClass("active");

            
            // Change page background image

            var currentItemNo = $(this).attr('data-nav-item-id');
            var currentPage = $(this).children("a").attr('href');
            var currentImgSrc = $("img" + currentPage + "-img").attr('src');

            $.backstretch(currentImgSrc, {speed: 500});

            $('.js-content').hide();
            $('.js-footer').hide();
            
            $(".js-content[data-page-id='" + currentItemNo + "']").slideDown('slow', function(){
                $(".js-footer").fadeIn();
            });                      
            
        }); 

    });
    
});
