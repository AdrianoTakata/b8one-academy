

function renderDataReport(dataLabel) {

  const generalReportContainer = document.querySelector(".general-report");
  const reportListDataMoney = document.querySelector(".general-report__list--data-money");
  const reportSelectContainer = document.querySelector(".general-report__select--resellers-container");
  const rightSide = document.querySelector(".general-report--right-side");
  const generalReportMenu = document.querySelector(".general-report__menu");

  // const generalReportGraphic = document.querySelector(".general-report__graphic");
  // const rightSide = document.querySelector(".general-report--right-side");
  // const leftSide = document.querySelector(".general-report--left-side");
  // const canvasContainer = document.querySelector(".general-report__graphic--image");

  console.log(reportListDataMoney)
  switch(dataLabel){
    case 'sell':
      generalReportContainer.style.display = "block";
      reportListDataMoney.style.display = "flex";
      reportSelectContainer.style.display = "none";
      generalReportMenu.style.marginBottom = "48px";
      rightSide.style.display = "none";
      break
    case 'demand':
      console.log(dataLabel);
      generalReportContainer.style.display = "block";
      reportListDataMoney.style.display = "none";
      reportSelectContainer.style.display = "none";
      generalReportMenu.style.marginBottom = "48px";
      rightSide.style.display = "none";
      break
    case 'resellers':
      console.log(dataLabel);
      generalReportContainer.style.display = "flex";
      reportListDataMoney.style.display = "none";
      reportSelectContainer.style.display = "block";
      generalReportMenu.style.marginBottom = "24px";
      rightSide.style.display = "block";
      break
    default:
      console.log("Atributo não encontrado");
  }

}


function changeActiveButton(dateName) {

  const allItemsSidebar = document.querySelectorAll(`.${dateName}`);
  allItemsSidebar.forEach( dataName => {
    dataName.addEventListener("click", function() {
      const element = [...allItemsSidebar].find( item => {
        return [...item.classList].find( item2 => {
          return item2 === `${dateName}-active`;
        })
      })
    
      element.classList.remove(`${dateName}-active`)
      dataName.classList.add(`${dateName}-active`);

      renderDataReport(dataName.dataset.reportInfo);

    })
  })
}

export default changeActiveButton;
