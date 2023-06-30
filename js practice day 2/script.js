let a = document.getElementById("farm");

function abc() {
  a.style.transform = "scale(1)";
}

let cl = document.getElementById("close");

cl.addEventListener("click", function xyz() {
  a.style.transform = "scale(0)";
});
