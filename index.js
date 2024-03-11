document.title = "FAQ "
let btn = document.querySelectorAll(".hidden");
let p = document.querySelectorAll(".p");

btn.forEach(function(e, index){
    e.addEventListener('click',function(){
        p.forEach((ee,i)=>{
            if (i === index) {
                ee.classList.toggle("vis");
            } else {
                ee.classList.remove("vis");
            }
        })
    })
})

