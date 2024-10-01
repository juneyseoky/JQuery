$(function () {
    let txtAreaCnt;
    let txtArea = $("div#txtLength");
    // txtArea.html(`<span>${txtAreaVal} / 100자`);
    $("#txtVal").on("keyup keypress keydown", function () {
        txtAreaCnt = $("#txtVal").val().length;
        txtArea.children().text(`${txtAreaCnt} / 100자`);
        if (txtAreaCnt == 100) {
            alert("초과" + txtAreaCnt)
        }
    });
});