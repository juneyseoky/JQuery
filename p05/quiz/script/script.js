$(function () {
    $("h2").css({
        "color": "#08f",
        "border": "3px solid #08f"
    }).siblings().css({
        "color": "#f00",
        "border": "3px solid #f00"
    }).add("span").css("display", "block").parent().css({
        "width": "640px",
        "padding": "20px",
        "border": "2px solid #08f",
        "border-radius": "8px",
        "color": "#08f",
        "margin": "20px auto"
    }).prepend("div")
});