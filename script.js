let text = "My Mom's recipes...";
// console.log(text.length);
let i = 0;
let speed = 150;

function type() {
  if (i < text.length) {
    document.querySelector("#heading").textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();
// gsap.from("h1", { x: -400, duration: 2, delay: 0.5, opacity: 0 });
// let text = "My Mom's recipes...";
// console.log(text.length);
// let ind = 0;
// let speed2 = 150;

// function type() {
//   if (ind < text.length) {
//     document.querySelector("#heading").textContent += text.charAt(i);
//     ind++;
//     setTimeout(type, speed2);
//   }
// }
// type();
// gsap.from("h1", { x: -400, duration: 2, delay: 0.5, opacity: 0 });
// 
gsap.from(".two", {
  y: -300,
  opacity: 0,
  delay: 4,
  duration: 3,
  ease: "bounce",
});
