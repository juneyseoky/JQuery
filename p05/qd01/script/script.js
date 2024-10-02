$(function () {
    $("div.mainMenu").mouseenter(function () {
        let sub = $(this).children("div");
        sub.children("div.subMenu").css("display", "block");
        $(this).children("div").stop().slideDown(600);
    })
    $("div.mainMenu").mouseleave(function () {
        $(this).children("div").stop().slideUp(200);
    })
    $(".subMenu").mouseenter(function () {
        $(this).css({
            "background": " rgb(0, 136, 255)",
        });
    })
    $(".subMenu").mouseleave(function () {
        $(this).css("background-color", "#eee");
    })

    function sildeShow() {
        $("#slideImgs").animate(
            {
                "margin-left": "-1200px"
            },
            6000,
            function () {
                $("a:nth-child(1)").insertAfter("a:nth-child(3)");
                $("#slideImgs").css("margin-left", "0")
            }
        );
    }
    setInterval(sildeShow, 3000);
    $(".nTxt:eq(0)").click(function () {
        $("#modal").css("display", "block");

    })
    $("button").click(function () {
        $("#modal").css("display", "none")

    })

})