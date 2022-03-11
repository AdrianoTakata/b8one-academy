function renderItemMenu(data) {

  const arrayItem = document.querySelectorAll(".sidebar-menu__button");
  arrayItem.forEach((element, index) => {
    const spanContainer = document.createElement("span");
    spanContainer.classList.add("sidebar-menu__item--name");
    spanContainer.innerText = data[index].name;
    element.append(spanContainer);

    if (data[index].hasChildren) {
      const sidebarMenuItemIconContainer = sidebarMenuItemIcon(element.dataset.sideBarItem);
      element.insertAdjacentHTML("beforeend", sidebarMenuItemIconContainer);
    }

  })
}

function sidebarMenuItemIcon(label) {
  return `
    <div class="sidebar-menu__item--label">
      <svg class="${label}__button-show item__button-show" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7.50024 9.74963L12.0002 14.2496L16.5002 9.74963" stroke="#333333" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg class="${label}__button-unshow item__button-show" width="24" height="24" viewBox="0 0 24 24"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4998 14.2493L11.9998 9.74933L7.49976 14.2493" stroke="#333333" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  `;
}

export default renderItemMenu;