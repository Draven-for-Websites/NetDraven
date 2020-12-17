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
function makeSign() {
  var account = {};
  account.series = [];
  account.createAccount = createAccount;
  //   account.signIn = signIn;
  return account;
}
var counter = 0;
var people = makeSign();
var createAccount = function () {
  var username = $("#username").val();
  var firstName = $("#first_name").val();
  var lastName = $("#last_name").val();
  var email = $("#mail_adress").val();
  var password = $("#password").val();
  var age = $("#age").val();
  var id = counter++;
  var createdAccount = {
    username,
    firstName,
    lastName,
    email,
    password,
    age,
    id,
  };
  var that = this;
  that.series.push(createdAccount);
  localStorage.setItem("createdAccount", JSON.stringify(that.series));
};

$(".Submit").on("click", function () {
  people.createAccount();
  $("#username").val("");
  $("#first_name").val("");
  $("#last_name").val("");
  $("#mail_adress").val("");
  $("#password").val("");
  $("#age").val("");
});
