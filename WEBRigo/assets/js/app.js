$(function() {
    var Header = $("#header"),
    IntroH = $("#intro").innerHeight(),
    scrollOffSet = $(window).scrollTop();
    // Header fixed
    CheckScroll(scrollOffSet);

    $(window).on("scroll", function() {
        scrollOffSet = $(this).scrollTop();
        CheckScroll(scrollOffSet);
    }); 
 
        function CheckScroll(scrollOffSet) {
            console.log(scrollOffSet);
            if (scrollOffSet >= IntroH) {
                Header.addClass("fixed");
            }
            else {
                Header.removeClass("fixed");
            }
        }

        // Smooth scroll
        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();
            var BlockId = $(this).data('scroll'),
            BlockOffSet = $(BlockId).offset().top;
            console.log(BlockOffSet);
            $("html, body").animate({
                scrollTop: BlockOffSet
        }, 700);
        });

        // Menu nav toggle
        $("#nav__toggle").on("click", function(event) {
            event.preventDefault();
            $(this).toggleClass("active");
            $("#nav").toggleClass("active");
        });

        // Collapse
        $("[data-collapse]").on("click", function(event){
            event.preventDefault();
            var $this = $(this);
            $this.toggleClass("active");
            var BlockId = $(this).data('collapse');
        });
});

