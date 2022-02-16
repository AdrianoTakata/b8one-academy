(() => {
  const minusButton = document.querySelector(".minus-button");
  const counter = document.querySelector(".counter-value");
  const plusButton = document.querySelector(".plus-button");

  // function minusButtonHandler(){
  //   let counterValue = Number(counter.textContent);
  //   if (counterValue >0 )
  //     counter.textContent = counterValue - 1;
  // }

  // function plusButtonHandler(){
  //   let counterValue = Number(counter.textContent);
  //   counter.textContent = counterValue + 1;
  // }

  function counterButtonHandler(operation) {
    let counterValue = Number(counter.textContent);
    console.log("uehy")
    switch (operation){
      case "-":
        if (counterValue > 0 )
          counter.textContent = counterValue - 1;
        break;
      case "+":
        counter.textContent = counterValue + 1;
        break;
    } 

  }

  minusButton.addEventListener("click", () => counterButtonHandler("-"));
  plusButton.addEventListener("click", () => counterButtonHandler("+"));
  console.log("Teste")
})()

