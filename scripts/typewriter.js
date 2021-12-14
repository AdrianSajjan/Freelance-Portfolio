const typewriter = document.getElementById("typewriter");

const strings = ["Adrian Sajjan", "Web Developer", "App Developer", "Freelancer"];

let back = false;
let charIndex = 0;
const speed = 120;
let stringIndex = 0;

function type() {
  if (!back) {
    if (charIndex < strings[stringIndex].length) {
      typewriter.innerHTML += strings[stringIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else if (charIndex === strings[stringIndex].length) {
      if (typewriter.innerHTML.length > 0) {
        back = true;
        setTimeout(type, 2000);
      } else {
        if (stringIndex === strings.length - 1) {
          stringIndex = 0;
          charIndex = 0;
          setTimeout(type, speed);
        } else {
          stringIndex++;
          charIndex = 0;
          setTimeout(type, speed);
        }
      }
    }
  } else {
    if (typewriter.innerHTML.length === 0) {
      back = false;
      setTimeout(type, speed);
    } else {
      typewriter.innerHTML = typewriter.innerHTML.substr(0, typewriter.innerHTML.length - 1);
      setTimeout(type, speed);
    }
  }
}

type();
