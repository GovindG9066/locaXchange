const contaner=document.querySelector(".contaner");
const Registerbtn=document.querySelector(".Register_btn");
const Loginbtn=document.querySelector(".Login_btn");


Registerbtn.addEventListener("click", () => {
    contaner.classList.add("active");
});
Loginbtn.addEventListener("click", () => {
    contaner.classList.remove("active");
});
