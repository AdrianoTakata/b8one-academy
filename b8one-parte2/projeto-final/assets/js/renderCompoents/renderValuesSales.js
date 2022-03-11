import { formatPrice } from "../utils.js";

function renderValuesSales(data) {

  const arrayMoneyReport = document.querySelectorAll(".general-report__item-data-money-container");
  arrayMoneyReport.forEach(element => {
    const label = element.dataset.moneyInfo;
    const spanContainer = document.createElement("span");
    spanContainer.classList.add("general-report__item--data-money-money");
    switch (label) {
      case ("totalSales"):
        spanContainer.innerHTML = data[label];
        break
      default:
        spanContainer.innerHTML = formatPrice(data[label]);
    }
    element.append(spanContainer);
  })

}

export default renderValuesSales;