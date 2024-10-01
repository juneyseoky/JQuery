$(function () {

    $("#checkAll").click(function () {
        let checkAllInput = $("#checkAll").prop("checked");
        $("input.useLicense").prop("checked", checkAllInput);
    });

    $("input[type=checkbox].useLicense").click(function () {
        if ($("input[type = checkbox].useLicense:checked").length >= 3) {
            $("#checkAll").prop("checked", true);
        } else {
            $("#checkAll").prop("checked", false)
        }
    })
    $("button").click(function () {
        // let reqCnt = $(".chkReq").length;
        // let reqChkCnt = 0;

        // $(".chkReq").each(function () {
        //     if ($(this).prop("checkd")) reqChkCnt++;
        // })
        // alert(reqChkCnt);
        let reqChkCnt = $(".chkReq:checked").length;
        if (reqChkCnt >= 2) {
            location.href = "signUp.html";
        } else {
            alert("확인");
        }

    });
})
