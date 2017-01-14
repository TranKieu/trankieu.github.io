/***
 **  Author: Viet Dung Tran (tranvd2010@gmail.com)	
 **
 ******
 ** 
 **  Dependencies: 
 **                 + Font Awesome
 **                 + JQuery
 **
 ******
 **
 **  Aufrufen $("body").totop( );
 **
 **/

;
(function ($) {

    $.fn.totop = function (options) { // Plugin registieren mit $.fn
        //Vorgabewerten
        var top = $.extend({ //überschreiben mit $.extend
            right: "10px",
            bottom: "50px",
            background: "black",
            color: "white",
            "text-align": "center",
            width: "3rem",
            height: "3rem",
            "border-radius": "7px",
            show: 15,
            knote: '<i id="hax-scrolltop" class="fa fa-arrow-up"></i>'
        }, options);


        //nur erste Element wird diese Knote hinzufügen
        //  $(this[0]).append('<div id="hax-scrolltop">Back to Top</div>');
        $(this[0]).append(top.knote);

        /**
         * "border-radius" nếu ko cần cho nó = 0
         * background: có thể thay bằng Img
         * Nếu có Img thì cho "text-align" : "-9999px"
         */
        var toTop = $("#hax-scrolltop");
        toTop.css({
            "font-size": "1rem",
            "line-height": "3rem",
            cursor: "pointer",
            display: "none",
            position: "fixed",
            bottom: top.bottom,
            right: top.right,
            "z-index": 2010,

            width: top.width,
            height: top.height,
            color: top.color,
            "text-align": (top["text-align"]),
            background: top.background,
            "border-radius": (top["border-radius"])

        });

        $(window).scroll(function () { //Nhan Event scroll

            if ($(window).scrollTop() > top.show) {
                toTop.fadeIn(); // = disblay: none;
            } else {
                toTop.fadeOut(); //Show = display: block;
            }
        });

        toTop.on("click", function () {

            if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                window.scrollTo(0);
            } else {
                $("html").animate({
                    scrollTop: 0
                }, 700);
            }


        });


        return this;
    }
})(jQuery); //Immediate Funktion um Konflik mit $ vermeiden
