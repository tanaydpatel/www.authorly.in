let url = window.location.href,
  planChoice = url.split("?");
function check(e) {
  if (e.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    var t = e.value.split("@");
    (t = t[t.length - 1]),
      (document.getElementById("warnEmailID").style.display =
        "gmail.com" == t ||
        "yahoo.com" == t ||
        "outlook.com" == t ||
        "hotmail.com" == t ||
        "yandex.com" == t ||
        "zoho.com" == t
          ? "none"
          : "block");
  } else
    alert(
      "Entered mail ID does not comply with standard mailID format.\n\nIf you have any issues drop a mail at contact@author-ly.com"
    );
}
function checkMobile(e) {
  let t = e.value.toString();
  t.length > 10 &&
    (alert(
      "You have entered more than 10 digits.\nPlease confirm mobile number before proceeding.\n\nIf you have any issues drop a mail at contact@author-ly.com"
    ),
    (t = t.substring(0, 10)),
    (document.getElementById("customerMobile").value = t));
}
"basic" == (url = planChoice[1])
  ? (document.getElementById("basic").checked = !0)
  : "elite" == url
  ? (document.getElementById("elite").checked = !0)
  : (document.getElementById("premium").checked = !0),
  window.addEventListener("scroll", function () {
    let e = document.getElementById("navigation-panel");
    window.pageYOffset > 10
      ? (e.classList.add("cus-nav"), (e.style = "top: 0"))
      : (e.classList.remove("cus-nav"), (e.style = "top: 4rem"));
  });
const navSlide = () => {
  const e = document.querySelector(".burger"),
    t = document.querySelector(".nav-list"),
    o = document.querySelector(".mainContainer");
  e.addEventListener("click", () => {
    t.classList.toggle("nav-active"),
      document.addEventListener("click", (t) => {
        "slideBar" !== t.target.id &&
          (document.querySelector(".nav-list").classList.remove("nav-active"),
          o.classList.remove("blur"),
          e.classList.remove("toggleCross"),
          window.pageYOffset < 10 &&
            document
              .getElementById("navigation-panel")
              .classList.remove("cus-nav"));
      }),
      window.pageYOffset < 10 &&
        document.getElementById("navigation-panel").classList.toggle("cus-nav"),
      o.classList.toggle("blur"),
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
