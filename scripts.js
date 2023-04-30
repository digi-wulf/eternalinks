function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginRight = '250px';
}
function closeSideMenu() {
  document.getElementById('side-menu').style.width = '0px';
  document.getElementById('main').style.marginRight = '0px';
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-bar").style.top = "0";
    document.getElementById("nav-bar").style.opacity = "100";
    document.getElementById("nav-bar").style.transition = ".5s";
  } else {
    document.getElementById("nav-bar").style.top = "-80px";
    document.getElementById("nav-bar").style.opacity = "0";
  }
}

$(document).ready(function () {

  $(".text div").hide();
  $("span").hide();
  $("#dots1").show();
  $("#dots2").show();
  $("#dots3").show();

  $("#txtBtn1").click(function () {
    $("#displayTxt1").slideToggle();
    $("#dots1").toggle();
  });
  $("#txtBtn2").click(function () {
    $("#displayTxt2").slideToggle();
    $("#dots2").toggle();
  });
  $("#txtBtn3").click(function () {
    $("#displayTxt3").slideToggle();
    $("#dots3").toggle();
  });
});

function btnTxtChange1() {
  var x = document.getElementById("txtBtn1");
  if (x.innerHTML === "Show") {
    x.innerHTML = "Hide";
  } else {
    x.innerHTML = "Show";
  }
}
function btnTxtChange2() {
  var x = document.getElementById("txtBtn2");
  if (x.innerHTML === "Show") {
    x.innerHTML = "Hide";
  } else {
    x.innerHTML = "Show";
  }
}
function btnTxtChange3() {
  var x = document.getElementById("txtBtn3");
  if (x.innerHTML === "Show") {
    x.innerHTML = "Hide";
  } else {
    x.innerHTML = "Show";
  }
}
