const secretCode = "cool";
let inputSequence = [];

document.addEventListener("keydown", function (event) {
  inputSequence.push(event.key);
  console.log(event.key);

  if (inputSequence.join("").includes(secretCode)) {
    document.getElementById("message").style.display = "block";
  }
});