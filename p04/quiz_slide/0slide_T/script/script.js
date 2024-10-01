$(function () {
    setInterval(slide, 5000);
    function slide() {
        $("div#slideFrame").animate({
            "margin-left": "-1000px"
        },
            1000,
            function () {
                $("#slideFrame>a:first-child").insertAfter("#slideFrame>a:last-child");
                $("div#slideFrame").css("margin-left", "0px");
            });
    }

})