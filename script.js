const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var t1 = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start: "50% 50%",
    end: "250% 50%",
    scrub: true,
    // markers:true,
    pin:true,
}})

t1.to(".rotate-div",{
    rotation: -15,
    scale: 0.78,
},'a')

t1.to("#row-div-2",{
    marginTop: "-5%"
},'a')
t1.to("#row-div-3",{
    marginTop: "-2%"
},'a')
t1.to("#row-div-4",{
    marginTop: "5%"
},'a')
t1.to("#row-div-5",{
    marginTop: "-10%"
},'a')

t1.to(".overlay-div h1",{
    opacity: "1",
    delay: "0.2",
},'a')

t1.to(".overlay-div",{
    backgroundColor: "#0000008a",
},'a')

t1.to("#button",{
    opacity: "1",
    delay: "0.1",
},'a')






function displayText() {
    var duration = 5 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());







var duration = 5 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);


}

