    let open = document.getElementById("open")
    let closed = document.getElementById("closed")
    let nave = document.getElementById("nave")
   
    

    open.addEventListener("click",()=>{
        
        nave.classList.add("active")

    })
    
    closed.addEventListener("click",()=>{
        nave.classList.remove("active")
        
    })