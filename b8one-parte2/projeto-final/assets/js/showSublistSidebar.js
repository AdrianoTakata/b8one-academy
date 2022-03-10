function clickButton(dataName){

  const nameLabel = dataName.dataset.sideBarItem;
  const subList = document.querySelector(`.sidebar-menu__sublist--${nameLabel}`);
  const showIcon = document.querySelector(`.${nameLabel}__button-show`);
  const unShowIcon = document.querySelector(`.${nameLabel}__button-unshow`);
  const onOff = subList.classList.toggle("on-off");

  if (onOff){
    subList.style.display = "block";
    showIcon.style.display = "none";
    unShowIcon.style.display = "block";
  } else {
    subList.style.display = "none";
    showIcon.style.display = "block";
    unShowIcon.style.display = "none";
  }
}


function showList() {
  const allItemsSidebar = document.querySelectorAll(".sidebar-menu__button");
  allItemsSidebar.forEach( dataName => {
    dataName.addEventListener("click", () => clickButton(dataName))
  })
}

showList();

