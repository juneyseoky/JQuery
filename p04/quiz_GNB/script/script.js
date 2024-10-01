$(function () {
    $("li.mainLi").mouseenter(function () {
        $(this).children("ul").stop().slideDown(600)
    })
    $("li.mainLi").mouseleave(function () {
        $(this).children("ul").stop().slideUp(200);
    })
    $(".subLi").mouseenter(function () {
        $(this).css({
            "background-color": " rgba(0, 136, 255, 0.4)",
        });
    })
    $(".subLi").mouseleave(function () {
        $(this).css("background-color", "rgba(189, 189, 189, 0.7)");
    })
})