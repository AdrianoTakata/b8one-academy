import fetchJson from "./fetchJson.js"
import changeActiveButton from "./showInfoDate.js";
import renderGraphic from "./graphicChart.js";
import createDataMockSellers from "./dataGraphicSellers.js";
import createDataMockDemand from "./dataGraphicDemand.js";
import createDataMockResellers from "./dataGraphicResellers.js";
import manipulateData from "./manipulateData.js";
import loginOut from "./loginOut.js";

async function main() {

  const dataHeader = await fetchJson("https://test-final.b8one.academy/user");
  renderHeaderInfo(dataHeader);

  const dataMenu = await fetchJson("https://test-final.b8one.academy/menu");
  renderItemMenu(dataMenu.menuTree);

  const dataProduct = await fetchJson("https://test-final.b8one.academy/products/more-sold");
  renderSellProduct(dataProduct.products)

  const dataResellersRanking = await fetchJson("https://test-final.b8one.academy/resellers/ranking");
  renderResellerRanking(dataResellersRanking.resellers);

  const dataSales = await fetchJson("https://test-final.b8one.academy/sales");
  showValuesSales(dataSales);

  const dataSellers = createDataMockSellers(31);
  const dataDemand = createDataMockDemand(31);
  const dataResellers = createDataMockResellers(31);

  const newDataSellers = manipulateData(dataSellers, 7);
  
  const dateName = "date__item--button";
  const generalReport = "general-report__item--button";

  changeActiveButton(dateName, generalReport, dataSellers, dataDemand, dataResellers);
  changeActiveButton(generalReport, dateName, dataSellers, dataDemand, dataResellers);

  renderGraphic(newDataSellers);

  loginOut();

}



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

function showValuesSales(data) {

  const arrayMoneyReport = document.querySelectorAll(".general-report__item-data-money-container");
  arrayMoneyReport.forEach(element => {
    const label = element.dataset.moneyInfo;
    const spanContainer = document.createElement("span");
    spanContainer.classList.add("general-report__item--data-money-money");
    switch (label) {
      case ("totalSales"):
        spanContainer.textContent = data[label];
        break
      default:
        spanContainer.textContent = formatPrice(data[label]);
    }
    element.append(spanContainer);
  })

}

function renderResellerRanking(data) {
  const rankingList = document.querySelector(".general-report__ranking--list");
  data.forEach((element, index) => {
    const rankingItem = document.createElement("li");
    rankingItem.classList.add("general-report__ranking--item");

    const rankingItemContainer = document.createElement("div");
    rankingItemContainer.classList.add("general-report__ranking--item-container");

    const rankingNumber = document.createElement("span");
    rankingNumber.classList.add("general-report__ranking--number");
    rankingNumber.textContent = `${index + 1}°`;

    const divPerfilIcon = document.createElement("div");
    divPerfilIcon.classList.add("general-report__ranking--perfil");
    divPerfilIcon.textContent = formatPerfilIcon(element.name);

    const rankingInfo = document.createElement("div");
    rankingInfo.classList.add("general-report__ranking--info");

    const rankingName = document.createElement("p");
    rankingName.classList.add("general-report__ranking--name");
    rankingName.textContent = element.name;

    const rankingDemand = document.createElement("p");
    rankingDemand.classList.add("general-report__ranking--demand");


    const rankingNumberDemand = document.createElement("span");
    rankingNumberDemand.classList.add("ranking--number-demand");
    rankingNumberDemand.textContent = element.orderCount + " pedidos";

    const rankingPercentage = document.createElement("span");
    rankingPercentage.classList.add("ranking--percentage");
    rankingPercentage.textContent = formatPercentege(element.percentage);
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

function formatPerfilIcon(nameFull) {
  const nameSplit = nameFull.split(' ');
  return nameSplit[0][0] + nameSplit[1][0];
}

function formatPercentege(data) {
  return data.slice(1, data.length);
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

function renderHeaderInfo(data) {

  const headerInfoBusiness = document.querySelector(".header__info-business");

  const headerLink = document.createElement("a");
  headerLink.classList.add("header__link")
  headerLink.href = "#";
  headerLink.innerText = formatPerfilIcon(data.organization);

  const spanNameBusiness = document.createElement("span");
  spanNameBusiness.classList.add("header__name--business");
  spanNameBusiness.textContent = data.organization;
  headerInfoBusiness.append(headerLink, spanNameBusiness)

  const headerNavPerfil = document.querySelector(".header-nav__perfil");

  const imagePerfil = document.createElement("img");
  imagePerfil.classList.add("header-nav__perfil-image");
  imagePerfil.referrerPolicy = "no-referrer";
  imagePerfil.src = data.photo;

  const namePerfil = document.createElement("span");
  namePerfil.classList.add("header-nav__perfil-name");
  namePerfil.textContent = data.username;

  headerNavPerfil.append(imagePerfil, namePerfil);

}

function renderSellProduct(data) {

  const insightsTableList = document.querySelector(".insights-table__list");
  data.forEach((element, index) => {

    const insightsTableItem = document.createElement("li");
    insightsTableItem.classList.add("insights-table__item", "insights-table__item-product");

    const productNameContainer = document.createElement("div");
    productNameContainer.classList.add("insights-table__product-name-container");

    const textNumber = document.createElement("span");
    textNumber.classList.add("insights-table__text-number", "off-responsity-mobile");
    textNumber.textContent = index + 1;

    const imageProduct = document.createElement("img");
    imageProduct.classList.add("insights-table__image");
    imageProduct.referrerPolicy = "no-referrer"
    imageProduct.src = element.image;

    const descriptionProduct = document.createElement("span");
    descriptionProduct.classList.add("insights-table__text", "initial-scale-table__description");
    descriptionProduct.textContent = element.name;

    productNameContainer.append(textNumber, imageProduct, descriptionProduct);

    const productInfo = document.createElement("div");
    productInfo.classList.add("insights-table__product-info-container");

    const textNumberMobile = document.createElement("span");
    textNumberMobile.classList.add("insights-table__text-number", "on-responsity-mobile");
    textNumberMobile.textContent = index + 1;

    const numberProduct = document.createElement("span");
    numberProduct.classList.add("insights-table__text", "insights-table__number");
    numberProduct.textContent = element.orderId;

    const department = document.createElement("span");
    department.classList.add("insights-table__text", "insights-table__departament", "off-responsity-mobile")
    department.textContent = element.department;

    const priceProduct = document.createElement("span");
    priceProduct.classList.add("insights-table__text", "insights-table__value");
    priceProduct.textContent = formatPrice(element.price);

    formatPrice(element.price)

    productInfo.append(textNumberMobile, numberProduct, department, priceProduct);
    insightsTableItem.append(productNameContainer, productInfo)

    insightsTableList.append(insightsTableItem)

  });

}

function formatPrice(price) {

  let priceString = price.toString();
  const n = priceString.length;
  const priceReal = priceString.slice(0, n - 2)
  const pricecents = priceString.slice(n - 2, n);
  const priceCorrent = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(priceReal) + "," + pricecents;

  return priceCorrent;
}


main();