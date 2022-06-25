// The countdown date
var countDownDate = new Date("Oct 23, 2021 23:59:59").getTime();

// Refreshing the counter
var x = setInterval(function() {

  // Current date and time
  var now = new Date().getTime();

  // Difference count
  var distance = countDownDate - now;

  // Calculation of time
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If countdown over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Sorry. You're late, try filling the application offline.";
  }
}, 1000);