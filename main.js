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
  account.signIn = signIn;
  return account;
}
// ----------------------------first creating an account----------------------------
var counter = 0;
var createAccount = function () {
  var username = $("#username").val();
  var firstName = $("#first_name").val();
  var lastName = $("#last_name").val();
  var email = $("#mail_adress").val();
  var password = $("#password").val();
  var age = $("#age").val();
  var id = counter++;
  if (!username || !firstName || !lastName || !password || !email || !age) {
    alert("Please enter correct information");
    return;
  }
  var createdAccount = {
    username,
    firstName,
    lastName,
    email,
    password,
    age,
    id,
  };
  console.log(createdAccount);
  var that = this;
  that.series.push(createdAccount);
  localStorage.setItem("createdAccount", JSON.stringify(that.series));
};
var signIn = function (email, password) {
  var array = JSON.parse(localStorage.getItem("createdAccount", people.series));
  for (var i = 0; i < array.length; i++) {
    if (email === array[i].email) {
      if (password === array[i].password) {
        console.log("success");
        return;
      } else {
        alert("wrong password");
        return;
      }
    }
  }
  alert("invalid email");
};

// ----------------for adding a new account its works and its storing in localStorage------------

var checkPassword = function (password) {
  return password.length >= 8;
};
var checkEmail = function (email) {
  return email.includes("@");
};

$("#submit-sign-in").click(function () {
  var email = $("#email-sign-in").val();
  var password = $("#password-sign-in").val();

  people.signIn(email, password);
});

$("#submit").click(function () {
  var password = $("#password").val();
  var email = $("#mail_adress").val();
  if (checkPassword(password) && checkEmail(email)) {
    people.createAccount();
    $("#username").val("");
    $("#first_name").val("");
    $("#last_name").val("");
    $("#mail_adress").val("");
    $("#password").val("");
    $("#age").val("");
  }
});
var people = makeSign();
