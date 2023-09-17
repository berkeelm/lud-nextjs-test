/*============================================*/
//
//         01 -- Header  
//         02 -- mCustomScrollbar  
//         03 -- Smooth scroll js
//         04 -- back to top
//         05 -- Clipboar Active
//         06 -- Preloader 
//         07 -- AOS
//           
/*===========================================*/


(function ($) {
    "use strict";

    /*===========================================

                    01 -- Header

    =============================================*/



    function navbarFixed() {
        // debugger;
        // if ($(".header_area").length) {


        $(window).scroll(function () {
            var nav_offset_top = $("header").height() + 50;
            var scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $(".header_area").addClass("navbar_fixed");
            } else {
                $(".header_area").removeClass("navbar_fixed");
            }
        });
        // }
    }
    navbarFixed();



    $(document).ready(function () {
        $(".pagepiling .section").each(function (e) {
            if (e != 0) $(this).hide();
        });

        $(".moveDown").on("click", function () {
            if ($(".pagepiling .section:visible").next().length != 0)
                $(".pagepiling .section:visible")
                    .next()
                    .show()
                    .addClass("active")
                    .prev()
                    .hide()
                    .removeClass("active");
            return false;
        });
    });
    /*===========================================

                02 --  mCustomScrollbar

    =============================================*/

    $(window).on("load", function () {
        if ($(".scroll_body").length) {
            $(".scroll_body").mCustomScrollbar({
                theme: "dark-3",
                setHeight: true,
            });
        }
    });

    $(".menu_btn").on("click", function () {
        $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
    });
    $(".close_btn, .body_capture").on("click", function () {
        $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
    });

    function wd_scroll() {
        if ($(".wd_scroll").length) {
            $(window).on("load", function () {
                $(".wd_scroll").mCustomScrollbar({
                    theme: "dark",
                });
            });
        }
    }
    wd_scroll();

    $(".menu_list li a").each(function () {
        var $this = $(this);
        $this.on("click", function (e) {
            var has = $this.hasClass("open");
            $(".menu_list li a").removeClass("open");
            if (has) {
                $this.removeClass("open");
            } else {
                $this.addClass("open");
            }
        });
    });

    var dropToggle = $(".menu_list > li").has("ul").children("a");
    dropToggle.on("click", function () {
        dropToggle.not(this).closest("li").find("ul").slideUp(300);
        $(this).closest("li").children("ul").slideToggle(300);
        return false;
    });

    /*===========================================

                03 -- Wow Animation 

    =============================================*/


    function wowAnimation() {
        new WOW({
            offset: 100,
            animateClass: "animated",
            mobile: true,
        }).init();
    }
    wowAnimation();

    /*===========================================

                04 --  back to top - start

    =============================================*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#backtotop:hidden').stop(true, true).fadeIn();
        } else {
            $('#backtotop').stop(true, true).fadeOut();
        }
    });
    $(function () {
        $("#scroll").on('click', function () {
            $("html,body").animate({
                scrollTop: $("#thetop").offset().top
            }, "slow");
            return false
        })
    });
    /*===========================================

                05 --  Clipboar Active

    =============================================*/

    $('.cbtn').on('click', function () {
        var $this = $(this);
        var clipboard = new ClipboardJS('.cbtn');

        clipboard.on('success', function (e) {
            $this.text('Copied!');

            setTimeout(function () {
                $this.text('Copy');
            }, 2000);
        });
    });
    /*===========================================

                    06 -- Preloader

    =============================================*/

    $(window).on("load", function () {
        $("#status").fadeOut();
        $("#preloader").delay(550).fadeOut("slow");
        $("body").delay(550).css({
            overflow: "visible",
        });
    });

})(jQuery);

