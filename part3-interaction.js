function sayHello (){
    let helloElement = document.getElementById("message");
    let helloTextContent = helloElement.innerHTML;
    helloElement.innerHTML = "Hello "
}

function clearHello (){
    let helloElement = document.getElementById("message");
    helloElement.innerHTML = "Click the button to change this text.";
}

function showName (){
    let nameElement = document.getElementById("nameInput");
    let nameTextContent = document.getElementById("output");
    nameTextContent.innerHTML = nameElement.value
}

