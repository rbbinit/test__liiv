function breakfast_button_click() {
  var con = document.querySelector(".contents");
  var btn = document.querySelector("#breakfast_button");

  if (con.style.display == "none") {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }
}
