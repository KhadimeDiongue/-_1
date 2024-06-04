document.addEventListener("DOMContentLoaded", () => {
  const $ = (element) => document.querySelector(element);

  //calculator operation functions (add, divide etc..)
  const Add = (num1, num2) => {
    return num1 + num2;
  };

  const Minus = (num1, num2) => {
    return num1 - num2;
  };

  const Multiply = (num1, num2) => {
    return num1 * num2;
  };

  const Divide = (num1, num2) => {
    return num1 / num2;
  };

  function ProcessEquation(equation) {
    let number1 = "";
    let number2 = "";
    let operation = null; // + - / *
    let total = null;

    //loop through equation, separating numbers from the operations
    for (let i = 0; i < equation.length; i++) {
      let char = equation[i];

      if (operation == null)
        if (/^\d$/.test(char)) number1 += char;
        else operation = char;
      else number2 += char;

      
    }

    //convert numbers to integers -> preparing them for calculation
    number1 = parseInt(number1);
    number2 = parseInt(number2);

    //check operation to perform
    switch (operation) {
      case "+":
        total = Add(number1, number2);
        break;
      case "-":
        total = Minus(number1, number2);
        break;
      case "*":
        total = Multiply(number1, number2);
        break;
      case "/":
        total = Divide(number1, number2);
        break;
      default:
        window.alert("Invalid operation");
        break;
    }

    return total;
  }

  //trigger calculation when equal sign is clicked
  $("#equal").addEventListener("click", () => {
    const answerScreenElement = $("#ans");
    const equationScreenElement = $("#equation");

    let answer = ProcessEquation(equationScreenElement.value);

    if (answer != null && answer != NaN) {
      //show answer
      answerScreenElement.value = answer;
      answerScreenElement.hidden = false;

      equationScreenElement.hidden = true;
    }
  });

  //reset all input screens when clear button is clicked
  $("#btnClear").addEventListener("click", () => {
    const answerScreenElement = $("#ans");
    const equationScreenElement = $("#equation");

    equationScreenElement.value = "";
    equationScreenElement.setAttribute(
      "placeholder",
      equationScreenElement.getAttribute("placeholder")
    );
    answerScreenElement.value = "";

    answerScreenElement.hidden = true; //hide ans screen
    equationScreenElement.hidden = false; //show equation screen
  });

  //function to allow on screen number funcitonality
  const EquationTxt = (character) => {
    $("#equation").value += character;
  };

  const btns = document.querySelectorAll('input[type="button"]');

  
  btns.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value != "Clear" && button.value != "=")
        EquationTxt(button.value);
    });
  });
});
