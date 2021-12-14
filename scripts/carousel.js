const portfolio = document.getElementById("portfolio-track");
const portfolioItems = document.getElementsByClassName("portfolio__carousel-item");
const portfolioLeftArrow = document.getElementById("portfolio-carousel-left-control");
const portfolioRightArrow = document.getElementById("portfolio-carousel-right-control");

const PORTFOLIO_WIDTH = 370;
const PORTFOLIO_SPACING = 30;
const PORTFOLIO_MAX_WIDTH =
  (portfolioItems.length - 1) * PORTFOLIO_WIDTH + PORTFOLIO_SPACING * (portfolioItems.length - 1);

let portfolioTranslateX = 0;

portfolioLeftArrow.addEventListener("click", () => {
  if (!(portfolioTranslateX <= 0)) {
    portfolioTranslateX -= PORTFOLIO_SPACING + PORTFOLIO_WIDTH;
    portfolio.setAttribute("style", `transform: translateX(-${portfolioTranslateX}px)`);
  }
});

portfolioRightArrow.addEventListener("click", () => {
  if (!(portfolioTranslateX >= PORTFOLIO_MAX_WIDTH)) {
    console.log(portfolioTranslateX, PORTFOLIO_MAX_WIDTH);
    portfolioTranslateX += PORTFOLIO_SPACING + PORTFOLIO_WIDTH;
    portfolio.setAttribute("style", `transform: translateX(-${portfolioTranslateX}px)`);
  }
});

function init() {
  Array.from(portfolioItems).forEach((item, index) => {
    item.setAttribute("style", `left: ${PORTFOLIO_WIDTH * index + PORTFOLIO_SPACING * index}px`);
  });
}

init();
