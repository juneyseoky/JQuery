$(() => {
  // const bntNames = ["fade", "slide", "toggle", "animate"];
  $("button").click(function () {
    let bntId = $(this).attr("id");
    if (bntId == "fade") {
      $("span#fade").text("Fade").fadeToggle(3000);
    } else if (bntId == "slide") {
      $("span").text("Slide").slideToggle(3000);
    } else if (bntId == "toggle") {
      $("span").text("Toggle").toggle(3000);
    } else if (bntId == "animate") {
      $("span").text("Animate").animate(
        { "margin-left": "100px" },
        3000,
        function () {
          $("span").animate(
            { "margin-left": "0px" },
            3000);
        }
      );
    }
  });
});