$(".icon").on("click", function (e) {
  $(".list").animate({width: 250}, 1000);
  $(".icon").animate({ marginLeft: 270 }, 1000);
});

$(".list i").on("click", function (e) {
  $(".list").animate({width: 0}, 1000);
  $(".icon").animate({ marginLeft: 20 }, 1000);
});

// Nice Scroll
$(".list a").on("click", function (e) {
  let secId = $(e.target).attr("href");
  let secOff = $(secId).offset().top;
  $("html").animate({ scrollTop: secOff }, 1500);
});

// Slider
$("#details .item h2").on("click", function (e) {
  $("#details .item-p").slideUp(1000);
  if ($(e.target).next().css("display") == "block") {
    $(e.target).next().slideUp(1000);
  } else {
    $(e.target).next().slideDown(1000);
  }
});

// Counter
// Event ==> 26/7 ==> 10,00,00
let currentDay = new Date().getDate();
let currentHoure = new Date().getHours();
let currentMinute = new Date().getMinutes();
let currentSecond = new Date().getSeconds();

let eventDay = 26 - currentDay;

let eventHoure = 10 - currentHoure;
if (eventHoure <= 0) {
  eventDay -= 1;
  eventHoure = 24 - currentHoure + 10;
}

let eventMinute = 0 - currentMinute;
if (eventMinute <= 0) {
  eventHoure -= 1;
  eventMinute = 60 - currentMinute;
}

let eventSecond = 0 - currentSecond;
if (eventSecond <= 0) {
  eventMinute -= 1;
  eventSecond = 60 - currentSecond;
}

const counter = setInterval(function () {
  eventSecond--;

  if (eventSecond < 0) {
    eventSecond = 59;
    eventMinute--;
  }
  if (eventMinute < 0) {
    eventMinute = 59;
    eventHoure--;
  }

  if (eventHoure < 0) {
    eventHoure = 23;
    eventDay--;
  }

  if (eventDay < 0) {
    eventDay = 0;
    eventHoure = 0;
    eventMinute = 0;
    eventSecond = 0;
    clearInterval(counter);
  }

  $("#duration .item-s h3").text(eventSecond + " s");
  $("#duration .item-m h3").text(eventMinute + " m");
  $("#duration .item-h h3").text(eventHoure + " h");
  $("#duration .item-d h3").text(eventDay + " D");
}, 1000);



// Text Area
$("textarea").on("input", function () {
  let maxlength = $("textarea").attr("maxlength");
  let val = document.querySelector("textarea").value;
  $("textarea")
    .parent()
    .next()
    .children()
    .text(maxlength - val.length);
});


// Arrow Top
$(".arrow-top").on("click", function() {
  $("body, html").animate({scrollTop: 0}, 1500)
})

$(window).on("scroll", function () {
  if ($(this).scrollTop() == 0) {
    $(".arrow-top").hide();
  } else {
    $(".arrow-top").show();
  }
});





// Loading
// $(function() {
//   $(".loader").slideUp(1000);
// })