import fetchJson from "./fetchJson.js"
import changeActiveButton from "./showInfoDate.js";
import renderGraphic from "./graphicChart.js";
import createDataMockSellers from "./dataGraphicSellers.js";
import createDataMockDemand from "./dataGraphicDemand.js";
import createDataMockResellers from "./dataGraphicResellers.js";
import manipulateData from "./manipulateData.js";
import loginOut from "./loginOut.js";
import showList from "./showSublistSidebar.js";

import renderHeaderInfo from "./renderCompoents/renderHeaderInfo.js";
import renderItemMenu from "./renderCompoents/renderItemMenu.js";
import renderSellProduct from "./renderCompoents/renderSellProduct.js";
import renderResellerRanking from "./renderCompoents/renderResellerRanking.js";
import renderValuesSales from "./renderCompoents/renderValuesSales.js";

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
  renderValuesSales(dataSales);

  showList();

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

  hamburgerButton();

}

function hamburgerButton() {
  const hamburger = document.querySelector(".button__mobile");

  hamburger.addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("sidebar--active");
  })
}

main();