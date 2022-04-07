function sayHello() {
  alert("Hello World!");
}

function addMessage() {
  var text = document.createElement("p");
  text.textContent = "You clicked the button!";
  document.body.appendChild(text);
}

function getInputText(){
    var input = document.getElementById("search-input");
    var text = document.createElement("p");
    text.textContent = input.value;
    document.body.appendChild(text);
}

function search(){
    var input = document.getElementById("search-input");
    window.location.href = "https://www.google.com/search?q=" + input.value;
}
