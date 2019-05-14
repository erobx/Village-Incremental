function toggle() {
  var x = document.getElementById("toggle");
  if (x.innerHTML === "Unactive") {
    x.innerHTML = "Active";
  } else {
    x.innerHTML = "Unactive"
  }
  return x;
}
