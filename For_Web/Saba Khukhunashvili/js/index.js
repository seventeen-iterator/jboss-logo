
var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 900,
  delay: function(el, i) { console.log("hi"); return i * 250 },
  direction: 'alternate',
  loop: false
});

lineDrawing.complete = () => {
  $("path").css({
    stroke: "black",
    fill: "black"
  })
  $(".red").css({
    stroke: "#CC0001",
    fill: "#CC0001"
  });
}
