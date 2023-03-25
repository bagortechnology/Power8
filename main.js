let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if(textInput.value === ""){
    console.log("failure");
    msg.innerHTML = "Don't leave the task blank.";
  } 
  else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
}

let data = {};

let acceptData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textarea.value;
  console.log(data);
};