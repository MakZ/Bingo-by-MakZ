    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
      for (var i = 0, numbers = []; i < 25; i++) {
        numbers[i] = i;
        numbers.sort(function () {
          return Math.random() - 0.5;
          Console.log(numbers);
        });
      }

      for (var i = 0; i < 25; i++) {
        secondDiv = document.createElement("div");
        selectDivContainer = document.querySelectorAll(".cell");
        selectDivContainer[i].style.background = "#1b1b1b";
        selectDivContainer[i].innerText = numbers[i];
        for (let i = 0; i < 5; i++) {
          selectDivContainer[numbers[i]].style.background = "green";
        }
      }
    });
