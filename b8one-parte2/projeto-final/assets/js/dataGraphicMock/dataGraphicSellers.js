import { generateDate, generateValue } from "../utilsDate.js";

function createDataMockSellers(amountNmber) {
  const dataMockSellers = [
    {
      name: "Estornado",
      date: generateDate(amountNmber),
      values: generateValue(amountNmber),
      color: 'rgba(66, 93, 199, 1)'
    },
    {
      name: "Cancelado",
      date: generateDate(amountNmber),
      values: generateValue(amountNmber),
      color: "rgba(240, 52, 96, 1)"
    },
    {
      name: "Não Pago",
      date: generateDate(amountNmber),
      values: generateValue(amountNmber),
      color: "rgba(255, 190, 0, 1)"
    },
    {
      name: "Pago",
      date: generateDate(amountNmber),
      values: generateValue(amountNmber),
      color: "rgba(46, 176, 66, 1)"
    }
  ];

  return dataMockSellers
}

export default createDataMockSellers;