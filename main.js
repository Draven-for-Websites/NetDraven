$(window).on("load", function () {
  $(".sign-in-input").hide();
});
$(document).ready(function () {
  $(".sign-in-click").click(function () {
    $(".pharagraph").toggle("slow");
    $("p").toggle("slow");
    $("footer").toggle("slow");
    $(".sign-in-input").toggle("slow");
  });
});

function go() {
  location.replace("sign-in.html");
}
function goback() {
  location.replace("index.html");
}
// ----------this is only for toggling between switching sign-in and going on and back between sign-in and home
