$(function () {
    $("button#notice").css({
        "background-color": "#fff"
    });
    $("button").click(function () {
        if (this.id == "gallery") {
            $(this).css({
                "background-color": "#fff",
                "border-bottom": "1px solid #fff"
            });
            $("div#main").css("display", "none");
            $("div#imgBox").css("display", "flex");
            $("button#notice").css({
                "border-bottom": "1px solid #000",
                "background-color": "#eee"
            });
        } else if (this.id == "notice") {
            $(this).css({
                "background-color": "#fff",
                "border-bottom": "1px solid #fff"
            });
            $("div#main").css("display", "block");
            $("div#imgBox").css("display", "none");
            $("button#gallery").css({
                "border-bottom": "1px solid #000",
                "background-color": "#eee"
            });
        }
    });
});