const portfolio = document.getElementById("portfolio-track");
const portfolioItems = document.getElementsByClassName("portfolio__carousel-item");
const portfolioLeftArrow = document.getElementById("portfolio-carousel-left-control");
const portfolioRightArrow = document.getElementById("portfolio-carousel-right-control");

const PORTFOLIO_WIDTH = 370;
const PORTFOLIO_SPACING = 30;
const PORTFOLIO_MAX_WIDTH = (portfolioItems.length - 1) * PORTFOLIO_WIDTH + PORTFOLIO_SPACING * (portfolioItems.length - 1);

let portfolioTranslateX = 0;
let portfolioLastMouseX = 0;
let portfolioMouseDown = false;

function handleLeftClick() {
  if (!(portfolioTranslateX <= 0)) {
    portfolioTranslateX -= PORTFOLIO_SPACING + PORTFOLIO_WIDTH;
  } else {
    portfolioTranslateX = PORTFOLIO_MAX_WIDTH;
  }
  portfolio.setAttribute("style", `transform: translateX(-${portfolioTranslateX}px)`);
}

function handleRightClick() {
  if (!(portfolioTranslateX >= PORTFOLIO_MAX_WIDTH)) {
    portfolioTranslateX += PORTFOLIO_SPACING + PORTFOLIO_WIDTH;
  } else {
    portfolioTranslateX = 0;
  }
  portfolio.setAttribute("style", `transform: translateX(-${portfolioTranslateX}px)`);
}

portfolioLeftArrow.addEventListener("click", handleLeftClick);

portfolioRightArrow.addEventListener("click", handleRightClick);

portfolio.addEventListener("mousedown", (event) => {
  portfolioMouseDown = true;
  portfolioLastMouseX = event.pageX;
});

portfolio.addEventListener("mouseup", () => {
  portfolioMouseDown = false;
  portfolioLastMouseX = 0;
});

portfolio.addEventListener("mouseleave", () => {
  portfolioMouseDown = false;
  portfolioLastMouseX = 0;
});

// portfolio.addEventListener("mousemove", (event) => {
//   if (portfolioMouseDown) {
//     const translate = event.pageX - portfolioLastMouseX;
//     portfolioTranslateX = -translate;
//     portfolio.setAttribute("style", `transform: translateX(-${portfolioTranslateX}px)`);
//   }
// });

Array.from(portfolioItems).forEach((item, index) => {
  item.setAttribute("style", `left: ${PORTFOLIO_WIDTH * index + PORTFOLIO_SPACING * index}px`);
});
