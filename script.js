const pupils = document.querySelectorAll(".eye .pupil");
// Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 20 + "px";
    var y = (e.pageY - rect.top) / 20 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});

const mouth = document.querySelectorAll(".mouth .tongue");
// Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
window.addEventListener("mousemove", (e) => {
  mouth.forEach((tongue) => {
    // get x and y postion of cursor
    var rect = tongue.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 20 + "px";
    var y = (e.pageY - rect.top) / 20 + "px";
    tongue.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});