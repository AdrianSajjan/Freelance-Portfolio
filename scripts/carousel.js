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

function handleNextSlide() {
  if (!(portfolioTranslateX <= 0)) {
    portfolioTranslateX -= PORTFOLIO_SPACING + PORTFOLIO_WIDTH;
  } else {
    portfolioTranslateX = PORTFOLIO_MAX_WIDTH;
  }
  portfolio.setAttribute("style", `transform: translateX(-${portfolioTranslateX}px)`);
}

function handlePrevSlide() {
  if (!(portfolioTranslateX >= PORTFOLIO_MAX_WIDTH)) {
    portfolioTranslateX += PORTFOLIO_SPACING + PORTFOLIO_WIDTH;
  } else {
    portfolioTranslateX = 0;
  }
  portfolio.setAttribute("style", `transform: translateX(-${portfolioTranslateX}px)`);
}

function handleDragStart(event) {
  event.preventDefault();
  portfolioMouseDown = true;
  portfolioLastMouseX = event.pageX;
}

function handleDragEnd(event) {
  event.preventDefault();
  portfolioMouseDown = false;
  portfolioLastMouseX = 0;
}

function handleDrag(event) {
  if (!portfolioMouseDown) return;
  const translate = portfolioLastMouseX - event.pageX;

  if (translate < 0) portfolioTranslateX += 50;
  else portfolioTranslateX -= 50;
  portfolioTranslateX = Math.min(Math.max(portfolioTranslateX, 0), -PORTFOLIO_MAX_WIDTH);
  portfolio.setAttribute("style", `transform: translateX(${portfolioTranslateX}px)`);
}

portfolioLeftArrow.addEventListener("click", handleNextSlide);
portfolioRightArrow.addEventListener("click", handlePrevSlide);

// portfolio.addEventListener("mousedown", handleDragStart);
// portfolio.addEventListener("mouseup", handleDragEnd);
// portfolio.addEventListener("mouseleave", handleDragEnd);
// portfolio.addEventListener("mousemove", handleDrag);

Array.from(portfolioItems).forEach((item, index) => {
  item.setAttribute("style", `left: ${PORTFOLIO_WIDTH * index + PORTFOLIO_SPACING * index}px`);
});
