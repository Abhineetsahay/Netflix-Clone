// in javascript it will manage the cross and plus sign in FAQ part 
let listli = document.getElementsByClassName("list-li");
let answers = null;
let plusIcons = document.querySelectorAll(".fa-plus");
let crossIcons = document.querySelectorAll(".fa-x");
// accesing all the items of list using for loop
for (const key of listli) {
  // in this code whenever the user clicks a faq part a cross sign comes up and whenever the user again click faq then the plus sign appears and the answers of that list(previously) will not be visible
  key.addEventListener("click", function () {
    let elem = key.nextElementSibling;
    let cross = key.querySelector(".fa-x");
    let plus = key.querySelector(".fa-plus");
    if (plus && plus.classList.contains("plus")) {
      plusIcons.forEach(icon => {
        if (icon !== plus) {
          icon.classList.remove("plus1");
        }
      });
      crossIcons.forEach(icon => {
        if (icon !== cross) {
          icon.classList.remove("plus2");
        }
      });
      plus.classList.toggle("plus1");
      cross.classList.toggle("plus2");
    }
    if (elem && elem.classList.contains("answers-pre")) {
      if (answers && answers !== elem) {
        answers.classList.remove("answers");
      }
      elem.classList.toggle("answers");
      answers = elem;
    }
  });
}
