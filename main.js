const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const listbutton = document.querySelector(".list-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  document.cookie = "name=ok;expires=Monday, 3-Sep-9999 99:99:99 EST";
});

setTimeout(() => {
  if (!document.cookie("cookieBannerDisplayed")) {
    cookieContainer.classList.active");
  }
}, 2000);

listbutton.addEventListener("click",() => {
  alert("cookies" + document.cookie)
});
