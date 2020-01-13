

var image_tracker = 1;

function change() {
  var image = document.getElementById('circle');
  if (image_tracker == 1) {
    image.src = 'imgs/imgch3.jpeg';
    image_tracker = 2;
  } else if (image_tracker == 2) {
    image.src = 'imgs/f2.jpg';
    image_tracker = 3;
  } else if (image_tracker == 3) {
    image.src = 'imgs/f4.jpg';
    image_tracker = 1;
  }
}

// Either the setTimeout() method or the setInterval() method can be used.
// With the setTimeout() method, it takes two parameters.
// The first parameter is the code to run, the second parameter is time in milliseconds. 1 sec = 1000 ms.
// the setTimeout() method only runs once. To repeat, we use the setInterval() method instead.
// It also uses two parameters, the code to run (or function to use), and the timer interval.

var timer = setInterval('change();', 3000);
// this function is called when the onclick event runs. It stops the timer running.
function stop() {
  clearInterval(timer); //the clearInterval method stops the timer from running
}
