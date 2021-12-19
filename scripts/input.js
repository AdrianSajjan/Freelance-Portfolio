const inputs = document.getElementsByClassName("input");

Array.from(inputs).map((input) => {
  input.addEventListener("focus", () => {
    if (!input.parentElement.classList.contains("active")) {
      input.parentElement.classList.add("active");
    }
  });
  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.parentElement.classList.remove("active");
    }
  });
});
