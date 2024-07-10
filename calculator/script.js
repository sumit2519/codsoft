let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

let evaluated = false;

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (evaluated && !isNaN(parseInt(e.target.innerHTML))) {
      string = input.value;
      evaluated = false;
    }
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        input.value = string;
        evaluated = false;
      } catch (error) {
        input.value = "Error";
        string = "";
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
