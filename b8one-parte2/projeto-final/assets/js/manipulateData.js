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

export default manipulateData;