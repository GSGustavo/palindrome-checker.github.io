function cleanInputString(str) {
    const regex = /[\p{P}\p{S}\s]/gu;
    return str.replace(regex, '');
  }
  
  const textInput = document.getElementById("text-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const result = document.getElementById("result");
  
  const check = (text) => {
  
    const auxArr = [];
  
    const cleanText = cleanInputString(text).toLowerCase().split("");
    
    cleanText.map((i) => {
      auxArr.unshift(i);
    });
  
    const newText = auxArr.join("").toLowerCase();
  
    if (cleanText.join("") === newText) {
      return "is a palindrome"
    }
  
    return "is not a palindrome";
    
  };
  
  const clear = () => {
      result.classList.add("hidden");
      result.innerText = "";
      textInput.value = "";
  };
  
  checkBtn.addEventListener("click", () => {
    const text = textInput.value;
  
    if (text === "") {
      alert("Please input a value");
      return;
    }
  
    result.innerText = `${text} ${check(text)}`;
    result.classList.remove("hidden");
  });
  
  clearBtn.addEventListener("click", clear);