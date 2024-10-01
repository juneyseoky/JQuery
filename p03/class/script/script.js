$(function () {
    $("button").click(function () {
        $("h1, h2, p").toggleClass("blue");
        // $("h1, h2, p").attr("class", "blue");
        // $("h1, h2, p").removeAttr("class");
    });
});