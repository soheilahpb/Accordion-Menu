let _btn = document.querySelectorAll(".btn")
let i = 1
console.log(_btn);
_btn.forEach((val) => {
    val.addEventListener('click', () => {
        val.parentElement.nextElementSibling.classList.toggle("h-[220px]")
        let _child = val.children
        _child[2].classList.toggle("rotate-[180deg]")
    })
})



// let i=1
// document.getElementById("btn1").addEventListener('click' , () => {
//     if (i%2) {
//         document.getElementsByClassName("first-body")[0].style.height = "220px"
//         document.getElementById("down").style.display = "none"
//         document.getElementById("up").style.display = "flex"
//         i++
//     }else{
//         document.getElementsByClassName("first-body")[0].style.height = "0"
//         document.getElementById("down").style.display = "flex"
//         document.getElementById("up").style.display = "none"
//         i++
//     }


// })