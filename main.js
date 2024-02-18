let bPrice = document.querySelector(".bPrice");
let pPrice = document.querySelector(".pPrice");
let mPrice = document.querySelector(".mPrice");
let allSpans = document.querySelectorAll(".card span");

let checkbox = document.querySelector("#checkbox");

let Annually = document.querySelector(".ann");
let Monthly = document.querySelector(".mon");

let allBtn = document.querySelectorAll(".card button");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    bPrice.innerHTML = "&dollar;199.99";
    pPrice.innerHTML = "&dollar;249.99";
    mPrice.innerHTML = "&dollar;399.99";
    allSpans.forEach(
      (span) => (span.style.animation = "scale .9s forwards ease-out")
    );
    Monthly.style.color = "#1d1d95c1";
    Annually.style.color = "#58588dc1";
  } else {
    bPrice.innerHTML = "&dollar;19.99";
    pPrice.innerHTML = "&dollar;24.99";
    mPrice.innerHTML = "&dollar;39.99";
    allSpans.forEach(
      (span) => (span.style.animation = "scale2 .9s forwards ease-out")
    );
    Monthly.style.color = "#58588dc1";
    Annually.style.color = "#1d1d95c1";
  }
});

allBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    location.reload();
  })
);
