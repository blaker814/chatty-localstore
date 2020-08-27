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
        }
})

document
    .querySelector("#clearAll")
    .addEventListener("click", () => {
        const space = document.querySelector("#message-area")
        space.innerHTML = "";
    })