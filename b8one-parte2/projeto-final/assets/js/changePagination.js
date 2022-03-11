function changePagination() {
  const nameClass = "insights-pagination-number";
  const allNumberPagination = document.querySelectorAll(`.${nameClass}`)
  allNumberPagination.forEach( dataName => {
    dataName.addEventListener("click", function() {
      const element = [...allNumberPagination].find(item => {
        return [...item.classList].find(item2 => {
          return item2 === `${nameClass}-active`;
        })
      })

      element.classList.remove(`${nameClass}-active`)
      dataName.classList.add(`${nameClass}-active`);
    })
  })
}

export default changePagination;