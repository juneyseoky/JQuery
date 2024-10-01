$(function () {
    function sildeShow() {
        $("#slideFrame").animate(
            {
                "margin-left": "-1000px"
            },
            6000,
            function () {
                $("a:nth-child(1)").insertAfter("a:nth-child(3)");
                $("#slideFrame").css("margin-left", "0")
            }
        );
    }
    setInterval(sildeShow, 3000);
})