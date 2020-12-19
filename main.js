$(window).on("load", function () {
  $(".sign-in-input").hide();
  $("#loging").hide();
  $(".favorite-movies").hide();
});

$(document).ready(function () {
  $(".sign-in-click").click(function () {
    $(".pharagraph").toggle("slow");
    $("p").toggle("slow");
    $("footer").toggle("slow");
    $(".sign-in-input").toggle("slow");
    $("#sign-in-signup").toggle();
    $("#loging").toggle();
  });
});

function go() {
  location.replace("sign-in.html");
}
function goToMovie() {
  location.replace("movies.html");
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
  // if ($("#username").val("")) {
  //   alert("username is missing");
  //   return;
  // }
  // if ($("#first_name").val("")) {
  //   alert("first name is missing");
  //   return;
  // }
  // if ($("#last_name").val("")) {
  //   alert("last name is missing");
  //   return;
  // }
  // if ($("#mail_adress").val("")) {
  //   alert("email is missing");
  //   return;
  // }
  // if ($("#password").val("")) {
  //   alert("password is missing");
  //   return;
  // }
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
  $(".submit").click(function () {
    $(".pharagraph").toggle("slow");
    $("p").toggle("slow");
    $("footer").toggle("slow");
    $(".sign-in-input").toggle("slow");
    $(".sign-in-click").hide();
    $("#loging").toggle();
  });
};
//-------------------------------------- these functions below are made for sign-in and log out ------------------------------
var signIn = function (email, password) {
  var array = JSON.parse(localStorage.getItem("createdAccount", people.series));
  for (var i = 0; i < array.length; i++) {
    if (email === array[i].email) {
      if (password === array[i].password) {
        console.log("success");
        $("#submit").click(goToMovie());
        setInterval(function () {
          alert("Welcome in NetDraven");
        });
        return;
      } else {
        alert("wrong password");
        return;
      }
    }
  }
  alert("invalid email");
};

var signOut = function () {
  setInterval(function () {
    alert("log out is done ");
  }, 5000);
  // localStorage.removeItem("createdAccount");
  go();
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
  if (checkPassword(password) && checkEmail(email) === false) {
    return;
  }

  people.createAccount();
  $("#username").val("");
  $("#first_name").val("");
  $("#last_name").val("");
  $("#mail_adress").val("");
  $("#password").val("");
  $("#age").val("");
});
var people = makeSign();
function makevideos() {
  var objects = {};
  objects.createBox = createBox;
  return objects;
}

var createBox = function (title, category, video, image) {
  return {
    title: title,
    category: category,
    video: video,
    image: image,
  };
};
var library = makevideos();
library.createBox(
  "THE SWORDSMAN Official Trailer",
  "Action",
  "someone",
  "someone"
);

// --------------------------------------------------------
var getSelected = function () {
  var n = $("input:checked").val();
  console.log(n);
};
function checkINOut() {
  if ($("#checkbox1").checked === true) {
    uncheck();
  } else check();
  $(".empty").append(
    `<div class="box">${arrayOfmovies[i].video} '\n'<h5>  ${arrayOfmovies[i].title}  </h5> '\n'  ${arrayOfmovies[i].input}  </div>`
  );
}
function check() {
  $("#checkbox1").checked = true;
  console.log(document.getElementById("checkbox1").checked);
}
function uncheck() {
  document.getElementById("checkbox1").checked = false;
  console.log($("#checkbox1"));
}

// ---------------------------------------------------------------------------------------
// $(".showFavorite").on("click", function () {
//   var favorite = $(".play-list").val();
//   if (favorite) {
//     $(".portfolio").toggle("slow");
//     $(".favorite-movies").show();
//   }
//   $(".favorite-movies").hide();
// });

// ------------------------------------fake data --------------------------------------------
var arrayOfmovies = [
  {
    title: "THE SWORDSMAN",
    input: `<input type="checkbox" class="play-list"></input>`,
    video: ` <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zLSXfcs3nFQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          id="movie1"
        ></iframe>`,
  },
  {
    title: "PALMER",
    input: `<input type="checkbox" class="play-list"></input>`,
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/OABSI3eYOk0" frameborder="0" allow="accelerometer;loop autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen checked="checked"></iframe>`,
  },
  {
    title: "Wengie's Best DIY Life ",
    input: `<input type="checkbox" class="play-list"></input>`,
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/UgOHVomvjcI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "The MINIATURIST",
    input: `<input type="checkbox" class="play-list"></input>`,
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Qjirz044BTU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen checked="checked"></iframe>`,
  },
  {
    title: "WRONG TURN",
    input: `<input type="checkbox" class="play-list"></input>`,
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ccaNMcPqpQ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen checked="checked"></iframe> `,
  },
  {
    title: "GODMOTHERED",
    input: `<input type="checkbox" class="play-list"></input>`,
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/KYWzEqX-J-4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen checked="checked"></iframe>`,
  },
];

for (var i = 0; i < arrayOfmovies.length; i++) {
  $(".portfolio").append(
    `<div id="${i}" class="box">${arrayOfmovies[i].video} '\n'<h5>  ${arrayOfmovies[i].title}  </h5> '\n'  ${arrayOfmovies[i].input}  </div>`
  );
  console.log(
    "the arrays that has been done appending =>",
    arrayOfmovies[i].title
  );
}

// $(".emty").append(
//   `<div class="box">${arrayOfmovies[i].video} '\n'<h5>  ${arrayOfmovies[i].title}  </h5> '\n'  ${arrayOfmovies[i].input}  </div>`
// );
var getSelected = function () {
  var n = $("input:checked").val();
  console.log(n);
};

var array = [];

function checkINOut() {
  var playList = $(".play-list");
  var array = $(".play-list");
  for (var i = 0; i < playList.length; i++) {
    // correct it later
    // if (array[i] === playList[i].checked) {
    //   $(".empty").empty(
    //     `<div id="${i}" class="box">${arrayOfmovies[i].video} '\n'<h5>  ${arrayOfmovies[i].title}  </h5> '\n'  ${arrayOfmovies[i].input}  </div>`
    //   );
    // }
    console.log(playList[i].checked);

    if (playList[i].checked) {
      $(".empty").append(
        `<div id="${i}" class="box">${arrayOfmovies[i].video} '\n'<h5>  ${arrayOfmovies[i].title}  </h5> '\n'  ${arrayOfmovies[i].input}  </div>`,
        $(".portfolio").toggle()
      );
    }
  }
  // for (var i = 0; i <)
  // if ($("#checkbox1").checked === true) {
  //   uncheck();
  // } else {
  //   check();
  //   $(".empty").append(
  //     `<div class="box">${arrayOfmovies[i].video} '\n'<h5>  ${arrayOfmovies[i].title}  </h5> '\n'  ${arrayOfmovies[i].input}  </div>`
  //   );
  // }
}
function check() {
  $("#checkbox1").checked = true;
  console.log(document.getElementById("checkbox1").checked);
}
function uncheck() {
  document.getElementById("checkbox1").checked = false;
  console.log($("#checkbox1"));
}
