$(document).ready(function () {
  $(".scroll").click(function (e) {
    e.preventDefault(),
      $("body,html").animate({ scrollTop: $(this.hash).offset().top }, 1e3);
  });
}),
  window.addEventListener("scroll", function () {
    let e = window.pageYOffset,
      t = document.getElementById("top").getBoundingClientRect().height,
      n =
        document.getElementById("features").getBoundingClientRect().height + t,
      i = document.getElementById("about").getBoundingClientRect().height + n,
      s = document.getElementById("pricing").getBoundingClientRect().height + i;
    e >= 0 && e < t - 25
      ? (document.getElementById("homeLink").classList.add("active"),
        document.getElementById("featuresLink").classList.remove("active"),
        document.getElementById("pricingLink").classList.remove("active"),
        document.getElementById("aboutLink").classList.remove("active"))
      : e >= t - 25 && e < n - 25
      ? (document.getElementById("featuresLink").classList.add("active"),
        document.getElementById("homeLink").classList.remove("active"),
        document.getElementById("pricingLink").classList.remove("active"),
        document.getElementById("aboutLink").classList.remove("active"))
      : e >= n - 25 && e < i - 25
      ? (document.getElementById("aboutLink").classList.add("active"),
        document.getElementById("homeLink").classList.remove("active"),
        document.getElementById("featuresLink").classList.remove("active"),
        document.getElementById("pricingLink").classList.remove("active"))
      : e >= i - 25 &&
        e < s - 25 &&
        (document.getElementById("pricingLink").classList.add("active"),
        document.getElementById("homeLink").classList.remove("active"),
        document.getElementById("featuresLink").classList.remove("active"),
        document.getElementById("aboutLink").classList.remove("active")),
      document.getElementById("footer").getBoundingClientRect().top <=
      window.innerHeight
        ? (document.getElementById("whatsApp").style.display = "none")
        : (document.getElementById("whatsApp").style.display = "flex");
  }),
  window.addEventListener("scroll", function () {
    let e = document.getElementById("navigation-panel");
    window.pageYOffset > 10
      ? (e.classList.add("cus-nav"), (e.style = "top: 0"))
      : (e.classList.remove("cus-nav"), (e.style = "top: 4rem"));
  });
const navSlide = () => {
  const e = document.querySelector(".burger"),
    t = document.querySelector(".nav-list"),
    n = document.querySelector(".mainContainer");
  e.addEventListener("click", () => {
    t.classList.toggle("nav-active"),
      document.addEventListener("click", (t) => {
        "slideBar" !== t.target.id &&
          (document.querySelector(".nav-list").classList.remove("nav-active"),
          n.classList.remove("blur"),
          e.classList.remove("toggleCross"),
          window.pageYOffset < 10 &&
            document
              .getElementById("navigation-panel")
              .classList.remove("cus-nav"));
      }),
      window.pageYOffset < 10 &&
        document.getElementById("navigation-panel").classList.toggle("cus-nav"),
      n.classList.toggle("blur"),
      e.classList.toggle("toggleCross");
  });
};
navSlide(),
  document.querySelector(".nav-list").addEventListener("click", () => {
    window.innerWidth < 801 &&
      (document.querySelector(".nav-list").classList.toggle("nav-active"),
      document.querySelector(".mainContainer").classList.toggle("blur"),
      document.querySelector(".burger").classList.toggle("toggleCross"),
      window.pageYOffset < 10 &&
        document
          .getElementById("navigation-panel")
          .classList.toggle("cus-nav"));
  }),
  console.log(
    "%cThis website is designed,developed and deployed by\n \t\t\t\t\t\t\t\tTANAY PATEL",
    "color:#ff8b07;font-size:25px;font-family:sans-serif"
  ),
  console.log(
    "%c https://www.linkedin.com/in/tanaydpatel",
    "color:red;font-size:18px;"
  );
