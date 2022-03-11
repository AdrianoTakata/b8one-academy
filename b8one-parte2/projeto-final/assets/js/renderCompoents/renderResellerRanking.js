import { formatPerfilIcon, formatPercentege, } from "../utils.js";

function renderResellerRanking(data) {

  const rankingList = document.querySelector(".general-report__ranking--list");
  data.forEach((element, index) => {
    const rankingItem = document.createElement("li");
    rankingItem.classList.add("general-report__ranking--item");

    const rankingItemContainer = document.createElement("div");
    rankingItemContainer.classList.add("general-report__ranking--item-container");

    const rankingNumber = document.createElement("span");
    rankingNumber.classList.add("general-report__ranking--number");
    rankingNumber.innerText = `${index + 1}°`;

    const divPerfilIcon = document.createElement("div");
    divPerfilIcon.classList.add("general-report__ranking--perfil");
    divPerfilIcon.innerText = formatPerfilIcon(element.name);

    const rankingInfo = document.createElement("div");
    rankingInfo.classList.add("general-report__ranking--info");

    const rankingName = document.createElement("p");
    rankingName.classList.add("general-report__ranking--name");
    rankingName.innerText = element.name;

    const rankingDemand = document.createElement("p");
    rankingDemand.classList.add("general-report__ranking--demand");


    const rankingNumberDemand = document.createElement("span");
    rankingNumberDemand.classList.add("ranking--number-demand");
    rankingNumberDemand.innerText = element.ordersCount + " pedidos";

    const rankingPercentage = document.createElement("span");
    rankingPercentage.classList.add("ranking--percentage");
    rankingPercentage.innerText = formatPercentege(element.percentage);
    const signal = element.percentage[0];

    if (signal === "+") {
      rankingPercentage.classList.add("ranking--percentage--green");
      const svgIcon = createdSvgIcon("M10.9998 9.5L7.99976 6.5L4.99976 9.5", "#158F2E");
      rankingPercentage.insertAdjacentHTML("beforeend", svgIcon)
    } else {
      rankingPercentage.classList.add("ranking--percentage--red");
      const svgIcon = createdSvgIcon("M5.00024 6.5L8.00024 9.5L11.0002 6.5", "#EB0045");
      rankingPercentage.insertAdjacentHTML("beforeend", svgIcon)
    }

    rankingDemand.append(rankingNumberDemand, rankingPercentage);
    rankingInfo.append(rankingName, rankingDemand);
    rankingItemContainer.append(rankingNumber, divPerfilIcon, rankingInfo);
    rankingItem.append(rankingItemContainer);
    rankingList.append(rankingItem);

  })
}

function createdSvgIcon(typeIcon, colorIcon) {
  return `
  <svg class="ranking--percentage-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
  xmlns="http://www.w3.org/2000/svg">
    <path d="${typeIcon}" stroke=${colorIcon} stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round" />
  </svg>
    `
}

export default renderResellerRanking;