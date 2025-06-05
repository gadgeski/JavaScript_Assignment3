const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const displayArea = document.getElementById("displayArea");

submitButton.addEventListener("click", () => {
  const enteredName = nameInput.value; // 入力された値を取得
  if (enteredName) {
    // 入力がある場合のみ表示
    displayArea.textContent = `こんにちは、${enteredName}さん！`;
  } else {
    displayArea.textContent = "何か入力してください。";
  }
});
