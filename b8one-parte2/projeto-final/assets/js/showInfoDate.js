import renderGraphic from './graphicChart.js';
import manipulateData from './manipulateData.js';

function renderDataReport(dataLabel1, dataLabel2, sellers, demand, resellers) {

  const numberDate = convertNumber(dataLabel2);
  console.log(numberDate)
  console.log(dataLabel1)

  const dataSellers = manipulateData(sellers, numberDate);
  const dataDemand = manipulateData(demand, numberDate);
  const dataResellers = manipulateData(resellers, numberDate);

  const generalReportContainer = document.querySelector(".general-report");
  const reportListDataMoney = document.querySelector(".general-report__list--data-money");
  const reportSelectContainer = document.querySelector(".general-report__select--resellers-container");
  const rightSide = document.querySelector(".general-report--right-side");
  const generalReportMenu = document.querySelector(".general-report__menu");
  const graphicContainer = document.querySelector(".general-report__graphic");

  const canvasContainer = document.querySelector(".general-report__graphic--image");
  switch (dataLabel1) {
    case 'sell':
      generalReportContainer.style.display = "block";
      reportListDataMoney.style.display = "flex";
      reportSelectContainer.style.display = "none";
      generalReportMenu.style.marginBottom = "48px";
      rightSide.style.display = "none";
      graphicContainer.style.height = "228px";
      graphicContainer.removeChild(canvasContainer);
      createdCanvas(dataSellers)
      break
    case 'demand':
      generalReportContainer.style.display = "block";
      reportListDataMoney.style.display = "none";
      reportSelectContainer.style.display = "none";
      generalReportMenu.style.marginBottom = "48px";
      rightSide.style.display = "none";
      graphicContainer.style.height = "322px";
      graphicContainer.removeChild(canvasContainer);
      createdCanvas(dataDemand)
      break
    case 'resellers':
      generalReportContainer.style.display = "flex";
      reportListDataMoney.style.display = "none";
      reportSelectContainer.style.display = "block";
      generalReportMenu.style.marginBottom = "24px";
      rightSide.style.display = "block";
      graphicContainer.style.height = "290px";
      graphicContainer.removeChild(canvasContainer);
      createdCanvas(dataResellers)
      break
  }

}

function createdCanvas(data) {

  const graphicContainer = document.querySelector(".general-report__graphic");
  const canvasContainer = document.createElement("canvas");
  canvasContainer.classList.add("general-report__graphic--image");
  canvasContainer.setAttribute("id", "myChart");
  graphicContainer.append(canvasContainer);
  renderGraphic(data);

}

function convertNumber(labelDate) {
  switch (labelDate) {
    case ("seven"):
      return 7;
    case ("fifteen"):
      return 15;
    case ("last-month"):
      return 30;
    case ("last-year"):
      return 360;
  }
}


function changeActiveButton(dateName, dateName2, dataSellers, dataDemand, dataResellers) {


  const allItemsList = document.querySelectorAll(`.${dateName}`);
  allItemsList.forEach(dataName => {
    dataName.addEventListener("click", function () {
      const element = [...allItemsList].find(item => {
        return [...item.classList].find(item2 => {
          return item2 === `${dateName}-active`;
        })
      })

      element.classList.remove(`${dateName}-active`)
      dataName.classList.add(`${dateName}-active`);

      const allItemsList2 = document.querySelectorAll(`.${dateName2}`);
      const elementAux = [...allItemsList2].find(item => {
        return [...item.classList].find(item2 => {
          return item2 === `${dateName2}-active`;
        })
      })

      switch (dateName) {
        case ("general-report__item--button"):
          renderDataReport(dataName.dataset.reportInfo, elementAux.dataset.dateInfo, dataSellers, dataDemand, dataResellers);
          break;
        case ("date__item--button"):
          renderDataReport(elementAux.dataset.reportInfo, dataName.dataset.dateInfo, dataSellers, dataDemand, dataResellers);
          break;
      }
    })
  })
}

export default changeActiveButton;
