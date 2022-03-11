function changePaginationArrowButton() {

  const nameClassOutside = "insights-pagination__arrow--button";
  const nameClassInside = "insights-pagination-number";
  const allElementArrowButton = document.querySelectorAll(`.${nameClassOutside}`);
  allElementArrowButton.forEach( item1 => {
    item1.addEventListener("click", function(){
      const allNumberPagination = document.querySelectorAll(`.${nameClassInside}`);
      const element = [...allNumberPagination].find( item2 => {
        return [...item2.classList].find( item3 => {
          return item3 === `${nameClassInside}-active`;
        })
      })

      const side = item1.dataset.side;
      const numberPage = element.dataset.numberPagination;
      element.classList.remove(`${nameClassInside}-active`);

      if(side === 'left'){
        if(numberPage > 0 && numberPage < 3){
          allNumberPagination[+(numberPage)-1].classList.add(`${nameClassInside}-active`)
        } else {
          element.classList.add(`${nameClassInside}-active`);
        }
      } else {
        if(numberPage >= 0 && numberPage < 2){
          allNumberPagination[+(numberPage)+1].classList.add(`${nameClassInside}-active`)
        } else {
          element.classList.add(`${nameClassInside}-active`);
        }
      }
    })
  })

 
  // const allNumberPagination = document.querySelectorAll(`.${nameClass}`)
  // allNumberPagination.forEach( dataName => {
  //   dataName.addEventListener("click", function() {
  //     const element = [...allNumberPagination].find(item => {
  //       return [...item.classList].find(item2 => {
  //         return item2 === `${nameClass}-active`;
  //       })
  //     })

  //     element.classList.remove(`${nameClass}-active`)
  //     dataName.classList.add(`${nameClass}-active`);
  //   })
  // })
}

export default changePaginationArrowButton;
