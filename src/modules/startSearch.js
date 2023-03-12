function navigation() {
  const addBtn = document.querySelector(".add-btn");
  const closeBtn = document.querySelector(".fa-circle-xmark");
  const searchModalWindow = document.querySelector(".find-conatiner");
  const input = document.querySelector(".input-search");

  addBtn.addEventListener("click", () => {
    searchModalWindow.classList.add("show");
    searchModalWindow.classList.remove("hide");
  });

  function closeModalWindow() {
    searchModalWindow.classList.add("hide");
    searchModalWindow.classList.remove("show");
    input.value = "";
    input.style = "none";
    document.querySelector(".text-error").textContent = "";
  }

  closeBtn.addEventListener("click", closeModalWindow);

  closeBtn.addEventListener("click", closeModalWindow);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && searchModalWindow.classList.contains("show")) {
      closeModalWindow();
    }
  });
}

export default navigation;
