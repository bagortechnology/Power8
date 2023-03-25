let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if(textInput.value === ""){
    console.log("failure");
    
  } 
  else {
    console.log("success");
  }
}