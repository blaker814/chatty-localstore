import { createMessage } from "./messages/Message.js"
// localStorage.setItem('name','Chris');
// localStorage.removeItem('name');
// let myName = localStorage.getItem('name');
// console.log(myName)

document
    .querySelector("#message")
    .addEventListener("keypress", event => {
        if (event.charCode === 13) {
            const newMessage = createMessage(event.target.value)
            const HTMLsite = document.querySelector("#message-area")
            localStorage.setItem('message', event.target.value)
            HTMLsite.innerHTML += newMessage
            document.querySelector("#message").value = ""
            document.querySelector("#clearAll").disabled = false;
        }
})

document
    .querySelector("#clearAll")
    .addEventListener("click", () => {
        const space = document.querySelector("#message-area")
        space.innerHTML = "";
        document.querySelector("#clearAll").disabled = true;
    })

console.log(localStorage)

document.getElementById("darkTheme").addEventListener("change", event => {
    if (event.target.checked === true) {
      document.getElementsByTagName("body")[0].setAttribute("class", "checked");
      document.getElementsByTagName("header")[0].setAttribute("class", "checked");
    } else {
      document.getElementsByTagName("body")[0].setAttribute("class", "unchecked");
      document.getElementsByTagName("header")[0].setAttribute("class", "unchecked");
    }
  });