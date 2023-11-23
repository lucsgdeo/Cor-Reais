function Local(){
    let dados = { "id":Date.now(), "email":"will@gmail.com"}
       
    let dadosJSON = JSON.stringify(dados);
    localStorage.setItem("allUsers", dadosJSON); 
}

function Create(){
    var dados = JSON.parse(localStorage.getItem("allUsers"))
    let data = []
    data.push(dados)
    
    let email = document.querySelector(".form-control").value
    alert(email)
    let newUser = { id:Date.now(), email:email}
    
    data.push(newUser)
    
    localStorage.setItem("allUsers", JSON.stringify(data))
    
    alert(JSON.stringify(data))
}
