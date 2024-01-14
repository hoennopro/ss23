const number = Math.floor(Math.random() * 10) + 1;
  let userInput = Number(prompt("Nhập vào một số từ 1 đến 10: "));

    while (userInput != number) {
  
    if (userInput > number) {
      alert("Lớn hơn");
    } else {
  
      alert("Nhỏ hơn");
    }

      userInput = Number(prompt("Nhập lại: "));
  }

  
  alert("Đúng");