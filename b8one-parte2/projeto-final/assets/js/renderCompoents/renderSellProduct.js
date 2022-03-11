import { formatPrice } from "../utils.js"; 

function renderSellProduct(data) {

  const insightsTableList = document.querySelector(".insights-table__list");
  data.forEach((element, index) => {

    const insightsTableItem = document.createElement("li");
    insightsTableItem.classList.add("insights-table__item", "insights-table__item-product");

    const productNameContainer = document.createElement("div");
    productNameContainer.classList.add("insights-table__product-name-container");

    const textNumber = document.createElement("span");
    textNumber.classList.add("insights-table__text-number", "off-responsity-mobile");
    textNumber.innerText = index + 1;

    const imageProduct = document.createElement("img");
    imageProduct.classList.add("insights-table__image");
    imageProduct.referrerPolicy = "no-referrer"
    imageProduct.src = element.image;

    const descriptionProduct = document.createElement("span");
    descriptionProduct.classList.add("insights-table__text", "initial-scale-table__description");
    descriptionProduct.innerText = element.name;

    productNameContainer.append(textNumber, imageProduct, descriptionProduct);

    const productInfo = document.createElement("div");
    productInfo.classList.add("insights-table__product-info-container");

    const textNumberMobile = document.createElement("span");
    textNumberMobile.classList.add("insights-table__text-number", "on-responsity-mobile");
    textNumberMobile.innerText = index + 1;

    const numberProduct = document.createElement("span");
    numberProduct.classList.add("insights-table__text", "insights-table__number");
    numberProduct.innerText = element.orderId;

    const department = document.createElement("span");
    department.classList.add("insights-table__text", "insights-table__departament", "off-responsity-mobile")
    department.innerText = element.department;

    const priceProduct = document.createElement("span");
    priceProduct.classList.add("insights-table__text", "insights-table__value");
    priceProduct.innerText = formatPrice(element.price);

    productInfo.append(textNumberMobile, numberProduct, department, priceProduct);
    insightsTableItem.append(productNameContainer, productInfo)

    insightsTableList.append(insightsTableItem)

  });

}

export default renderSellProduct;