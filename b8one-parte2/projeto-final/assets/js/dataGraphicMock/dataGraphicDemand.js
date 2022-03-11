import { generateDate, generateValue } from "../utilsDate.js";

function createDataMockDemand(amountNmber) {
  const dataMockDemand = [
    {
      name: "Total de Pedidos",
      date: generateDate(amountNmber),
      values: generateValue(amountNmber),
      color: 'rgba(66, 93, 199, 1)'
    }
  ]

  return dataMockDemand
}

export default createDataMockDemand;