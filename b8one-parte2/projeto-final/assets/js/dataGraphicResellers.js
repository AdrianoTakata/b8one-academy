import generateDate from "./generateDate.js";
import generateValue from "./generateValue.js";

function createDataMockResellers(amountNmber) {
  const dataMockResellers = [
    {
      name: "Valor total de vendas",
      date: generateDate(amountNmber),
      values: generateValue(amountNmber),
      color: 'rgba(66, 93, 199, 1)'
    },
    {
      name: "Quantidade de pedidos",
      date: generateDate(amountNmber),
      values: generateValue(amountNmber),
      color: "rgba(240, 52, 96, 1)"
    },
    {
      name: "Comissão a pagar",
      date: generateDate(amountNmber),
      values: generateValue(amountNmber),
      color: "rgba(255, 190, 0, 1)"
    }
  ]
  

  return dataMockResellers
}

export default createDataMockResellers;