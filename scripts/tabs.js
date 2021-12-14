const tabs = document.getElementsByClassName("about__tab");
const tabColumns = document.getElementsByClassName("about__tab-column");

Array.from(tabs).forEach((tab) => {
  if (tab.classList.contains("active")) {
    Array.from(tabColumns).forEach((col) => {
      if (col.dataset.tab === tab.id) {
        col.setAttribute("style", "display: block;");
      }
    });
  }
});

Array.from(tabs).forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!tab.classList.contains("active")) {
      Array.from(tabs).forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      Array.from(tabColumns).forEach((col) => {
        if (col.dataset.tab === tab.id) {
          col.setAttribute("style", "display: block;");
        } else {
          col.setAttribute("style", "display: none;");
        }
      });
    }
  });
});
