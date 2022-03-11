function generateDate(amountData) {
  let arrayData = []
  for(let i=1; i < amountData; i++){
    const date = i < 10 ? `0${i}/11/2021` : `${i}/11/2021`;
    arrayData.push(date)
  }

  return arrayData;
}

function generateValue(amountData) {
  let arrayValue = [];
  for(let i = 1; i < amountData ; i++){
    const valueRandom = Math.random(0,1) * 200;
    const value = Math.trunc(valueRandom);
    arrayValue.push(value)
  }

  return arrayValue
}

function manipulateData(data, amountNumber) {

  const arrayData = data.reduce( (acc, element) => {
    const newDataSellers = {
      name: element.name,
      date: element.date.slice(30-amountNumber, 30),
      values: element.values.slice(30-amountNumber, 30),
      color: element.color
    }
    acc = [...acc, newDataSellers];
    return acc;
  }, [])

  return arrayData;

}

export { generateValue, generateDate, manipulateData };