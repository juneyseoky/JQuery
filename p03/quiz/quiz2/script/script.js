$(function () {
  $("ul#mainMenu li.mainLi").click(function () {
    $("ul#mainMenu li.mainLi>a").css({ "font-weight": "normal" });
    $(this).children("a").css({ "font-weight": "bold" });
    $("ul#mainMenu li.mainLi").removeClass("selected");
    $(this).addClass("selected");
  });
  $("ul#mainMenu li.mainLi")
    .mouseover(function () {
      $(this).children("a").css({ "font-weight": "bold" });
    })
    .mouseout(function () {
      $(this).children("a").css({ "font-weight": "normal" });
      $("ul#mainMenu li.selected>a").css({ "font-weight": "bold" });
    });
});
