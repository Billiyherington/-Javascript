const inputTextElement = document.querySelector("#disabledTextInput")
const select = document.querySelector("#select")
const button = document.querySelector("#form-btn-js")
const busketElement = document.querySelector("#buy-js")
const signoutElement = document.querySelector("#sign-out-js")
let auth = {
    login: "",
    category: "",

}
button.addEventListener("click", (e)=>{
    e.preventDefault()
    
    auth.login = inputTextElement.value
    auth.category = select.value
    console.log(auth);
    localStorage.setItem("author", JSON.stringify(auth))
    CheckAuthorFunc()
})


const CheckAuthorFunc = ()=>{
    const data = JSON.parse(localStorage.getItem("author"))  
    if(data){
        // console.log("вы авторизованы");
        busketElement.classList.remove("d-none")
        signoutElement.classList.remove("d-none")
    
        signoutElement.addEventListener("click", ()=>{
            localStorage.removeItem("author")
            busketElement.classList.add("d-none")
            signoutElement.classList.add("d-none")
        })
    }  
}
CheckAuthorFunc()