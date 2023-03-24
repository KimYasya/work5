"use strict";

// маркер выбранного пункта меню
let actived = document.querySelector(".active");

if (actived) {
  let activedMarker = document.createElement("div");
  activedMarker.innerHTML = `<img src="./img/Прямоугольник.png" alt="marker">`;
  activedMarker.classList.add("activedMarker");
  actived.append(activedMarker);
}

// скрываем меню, если маленький экран и изменяем ширину main
let parent = document.getElementById("header");
let menuList = document.getElementById("menu");
let mainContainer = document.getElementById("main");
let editBtn = document.getElementById("edit");
let stopEditBtn = document.getElementById("stop-edit");
let editBtnS = document.getElementById("edit-s");
let stopEditBtnS = document.getElementById("stop-edit-s");

window.addEventListener("resize", move);

function move() {
  const viewport_width = document.documentElement.clientWidth;
  if (viewport_width <= 992) {
    if (!menuList.classList.contains("disabled")) {
      menuList.classList.add("disabled");
      mainContainer.classList.remove("w-75", "ms-4", "p-4", "pt-4");
      mainContainer.classList.add("mt-2");
      editBtn.classList.remove("ps-5", "pe-3", "p-2");
      stopEditBtn.classList.remove("ps-5", "pe-3", "p-2");
      editBtnS.classList.remove("ps-5", "pe-3", "p-2");
      stopEditBtnS.classList.remove("ps-5", "pe-3", "p-2");
      editBtn.innerHTML = "";
      stopEditBtn.innerHTML = "";
      editBtnS.innerHTML = "";
      stopEditBtnS.innerHTML = "";

      parent.insertAdjacentHTML("beforebegin", `<img src="./img/Logo Work5.png" alt="logo" class="logo" id="logo">`);
      parent.insertAdjacentHTML(
        "afterbegin",
        `<div class="dropdown" id="menuSmall">
      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="./img/fi-rr-menu-burger.png" alt="menu" height="30">
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Главная</a></li>
        <li><a class="dropdown-item" href="#">Мои магазины</a></li>
        <li><a class="dropdown-item" href="#">Промоматериалы</a></li>
        <li><a class="dropdown-item" href="#">Статистика</a></li>
        <li><a class="dropdown-item" href="#">Баланс</a></li>
        <li><a class="dropdown-item" href="#">Персональные данные</a></li>
        <li><a class="dropdown-item" href="#">FAQ</a></li>
        <li><a class="dropdown-item" href="#">Техподдержка</a></li>
        <li><a class="dropdown-item" href="#">Выход</a></li>
      </ul>
    </div>`
      );
    }
  } else {
    if (menuList.classList.contains("disabled")) {
      let menu = document.getElementById("menuSmall");
      let logo = document.getElementById("logo");
      menu.remove();
      logo.remove();
      mainContainer.classList.add("w-75", "ms-4", "p-4", "pt-4");
      mainContainer.classList.remove("mt-2");
      menuList.classList.remove("disabled");
      editBtn.classList.add("ps-5", "pe-3", "p-2");
      stopEditBtn.classList.add("ps-5", "pe-3", "p-2");
      editBtnS.classList.add("ps-5", "pe-3", "p-2");
      stopEditBtnS.classList.add("ps-5", "pe-3", "p-2");
      editBtn.innerHTML = "Редактировать";
      stopEditBtn.innerHTML = "Редактировать";
      editBtnS.innerHTML = "Редактировать";
      stopEditBtnS.innerHTML = "Редактировать";
    }
  }
}

