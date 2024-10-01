$(function () {

    // $("button").click(function () {
    //     $("span").fadeToggle(3000);
    // })
    // $("button").click(function () {
    //     $("span").slideToggle(3000);
    // })
    // $("button").click(function () {
    //     $("span").toggle(3000);
    // })
    $("button").click(function () {
        $("span").animate(
            { "margin-left": "100px" },
            3000,
            function () {
                $("span").css({ "margin-top": "10px" });
            }
        );
        // 인수 => CSS, Duration, CallBack
        //              듀레이션  콜백
        //              적용시간  종료즉시 실행
    })
})