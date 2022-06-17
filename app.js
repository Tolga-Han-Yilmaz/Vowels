const input = document.querySelector("input");
const button = document.querySelector(".btn");
const result = document.querySelector("p");

button.addEventListener("click", () => {
  let counter = 0;
  let listVowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
  let inputValue = input.value.toLowerCase();
  for (let i = 0; i < inputValue.length; i++) {
    if (listVowels.includes(inputValue[i])) {
      counter++;
    }
  }
  result.innerHTML = `There are ${counter} vowels in <span class="text-danger">${input.value}</span>`;
  input.value = "";
});
