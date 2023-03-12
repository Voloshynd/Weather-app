function displayLoader() {
  document.querySelector(".preloader").classList.add("display");
  setTimeout(() => {
    document.querySelector(".preloader").classList.remove("display");
  }, 1000);
}

export default displayLoader;
