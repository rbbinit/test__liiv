function dinner_button_click() {
  var con = document.querySelector(".dinner__contents");

  if (con.style.display == "none") {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }
}
