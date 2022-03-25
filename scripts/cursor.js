const cursor = document.getElementById("cursor");
const point = document.getElementById("point");

const links = [...document.querySelectorAll("a"), ...document.querySelectorAll("button"), ...document.querySelectorAll('[role="button"]')];

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    point.classList.add("hover");
  });
  link.addEventListener("mouseleave", () => {
    point.classList.remove("hover");
    cursor.classList.remove("hover");
  });
});

document.addEventListener("mousemove", (event) => {
  cursor.setAttribute("style", `top: ${Math.abs(window.scrollY - event.pageY) - 12}px; left: ${event.pageX - 12}px;`);
  point.setAttribute("style", `top: ${Math.abs(window.scrollY - event.pageY) - 2}px; left: ${event.pageX - 2}px;`);
});

// const carousels = Array.from(document.getElementsByClassName("carousel-track"));
//
// carousels.forEach((element) => {
//   element.addEventListener("mouseenter", () => {
//     cursor.classList.add("hover");
//     point.classList.add("arrow");
//   });
//   element.addEventListener("mouseleave", () => {
//     point.classList.remove("arrow");
//     cursor.classList.remove("hover");
//   });
// });
