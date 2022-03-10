function generateValue(amountData) {
  let arrayValue = [];
  for(let i = 1; i < amountData ; i++){
    const valueRandom = Math.random(0,1) * 200;
    const value = Math.trunc(valueRandom);
    arrayValue.push(value)
  }

  return arrayValue
}

export default generateValue;