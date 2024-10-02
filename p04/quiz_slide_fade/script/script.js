$(function () {
    // function sildeShow() {
    //     $("#slideFrame").animate(
    //         {
    //             "margin-left": "-1000px"
    //         },
    //         6000,
    //         function () {
    //             $("a:nth-child(1)").insertAfter("a:nth-child(3)");
    //             $("#slideFrame").css("margin-left", "0")
    //         }
    //     );
    // }
    function slideFade() {
        $("a:first-child").fadeOut(500, function () {
            $("a:first-child").insertAfter("a:last-child");
        })
        $("a:nth-child(2)").fadeIn(2000);
    }
    setInterval(slideFade, 2100);
})