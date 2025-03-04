let navi = document.querySelectorAll("nav a");
let hamburger = document.querySelector(".hamburger");
let icon = document.getElementById("icon");

function scroll() {
   navi.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
         e.preventDefault();
         const targetId = this.getAttribute("href").substring(1);
         document.getElementById(targetId).scrollIntoView({
            behavior: "smooth",
         });
      });
   });
}

function dropDown() {
   hamburger.addEventListener("click", function () {
      document.querySelector("nav").classList.toggle("active");
   });
}

function changeTheme() {
   icon.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
         icon.src = "images/dark theme icon/sun.png";
      } else {
         icon.src = "images/dark theme icon/moon.png";
      }
   });
}

scroll();
