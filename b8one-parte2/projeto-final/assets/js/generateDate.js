function generateDate(amountData) {
  let arrayData = []
  for(let i=1; i < amountData; i++){
    const date = `${i}/03/2022`;
    arrayData.push(date)
  }

  return arrayData;
}

export default generateDate;