function showList() {
  const dateName = "sidebar-menu__button"
  const allItemsSidebar = document.querySelectorAll(`.${dateName}`);
  allItemsSidebar.forEach(dataName => {
    dataName.addEventListener("click", function () {
      const element = [...allItemsSidebar].find(item => {
        return [...item.classList].find(item2 => {
          return item2 === `${dateName}-active`;
        })
      })

      element.classList.remove(`${dateName}-active`)
      dataName.classList.add(`${dateName}-active`);

      const nameDataSet = dataName.dataset.sideBarItem
      if (nameDataSet === "to-sell" || 
          nameDataSet === "finance" || 
          nameDataSet === "setting" || 
          nameDataSet === "tools"){
            showSubList(dataName)
      }
    })
  })
}

function showSubList(data) {
  const nameLabel = data.dataset.sideBarItem;
  const subList = document.querySelector(`.sidebar-menu__sublist--${nameLabel}`);
  const showIcon = document.querySelector(`.${nameLabel}__button-show`);
  const unShowIcon = document.querySelector(`.${nameLabel}__button-unshow`);
  const onOff = subList.classList.toggle("on-off");

  if (onOff) {
    subList.style.display = "block";
    showIcon.style.display = "none";
    unShowIcon.style.display = "block";
  } else {
    subList.style.display = "none";
    showIcon.style.display = "block";
    unShowIcon.style.display = "none";
  }
}

export default showList;

