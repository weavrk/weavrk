// caret open
const openMenu = document.getElementById("carrot");
openMenu.addEventListener("click", showLinks);

function showLinks() {
  document.querySelector(".nav_links").classList.toggle("nav_links_show");

  if (document.getElementById("carrot").className == "caret_down")
    document.getElementById("carrot").className = "caret_up";
  else
    document.getElementById("carrot").className = "caret_down";
}




// show info

const elements = document.getElementsByClassName('show-info');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", showProject);
}

function showProject() {
  const info = document.getElementsByClassName('grid_overlay');
  for (let i = 0; i < info.length; i++) {
    // info[i].classList.add("toggleProjectInfo");
    info[i].style.transform = "translateY(0%)";
  }
}

// hide info

const elements2 = document.getElementsByClassName('hide-info');
for (let i = 0; i < elements2.length; i++) {
  elements2[i].addEventListener("click", function () { location.reload(); });
}


