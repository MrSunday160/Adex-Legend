const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-menu")

burger.addEventListener("click", () =>{
    burger.classList.toggle("active")
    nav.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    burger.classList.remove("active")
    nav.classList.remove("active")
}))