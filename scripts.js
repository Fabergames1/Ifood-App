let plate;
let drink;
let dessert;

function chooseChicken(){
   document.getElementById("chicken").style.borderColor = "green";
   document.getElementById("beef").style.borderColor = "white";
   document.getElementById("x-tudo").style.borderColor = "white";
   plate = "Frango";
}

function chooseBeef(){
    document.getElementById("beef").style.borderColor = "green";
    document.getElementById("chicken").style.borderColor = "white";
    document.getElementById("x-tudo").style.borderColor = "white";
    plate = "Carne";
 }

 function chooseXtudo(){
    document.getElementById("x-tudo").style.borderColor = "green";
    document.getElementById("chicken").style.borderColor = "white";
    document.getElementById("beef").style.borderColor = "white";
    plate = "X-tudo";
 }

function chooseCoca(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("juice").style.borderColor = "white";
    document.getElementById("pepsi").style.borderColor = "white";
    drink = "Coca";
}
 
function chooseJuice(){
    document.getElementById("juice").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("pepsi").style.borderColor = "white";
    drink = "Suco";
}

function choosePepsi(){
    document.getElementById("pepsi").style.borderColor = "green";
    document.getElementById("juice").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    drink = "Pepsi";
}

function choosePudding(){
    document.getElementById("pudding").style.borderColor = "green";
    document.getElementById("iceCream").style.borderColor = "white";
    dessert = "Pudim"
}

function chooseIceCream(){
    document.getElementById("iceCream").style.borderColor = "green";
    document.getElementById("pudding").style.borderColor = "white";
    dessert = "Sorvete"
}
 
function finalizeOrder(){
    if (document.getElementById("chicken").style.borderColor == "green" ||  document.getElementById("beef").style.borderColor == "green" || document.getElementById("x-tudo").style.borderColor == "green"  ) {
    }else{
        alert("Selecione um dos pratos!")
    }
    if (document.getElementById("coca").style.borderColor == "green" ||  document.getElementById("juice").style.borderColor == "green" || document.getElementById("pepsi").style.borderColor == "green" ) {
    }else{
        alert("Selecione uma das bebidas!")
    }
    if (document.getElementById("pudding").style.borderColor == "green" ||  document.getElementById("iceCream").style.borderColor == "green" ){
    }else{
        alert("Selecione uma das sobremesas!")
    }
   let message
   message = "Olá, gostaria de pedir um combo: " + plate +", "+ drink +" e "+ dessert
   window.open("https://wa.me/+5516997183264?text=" + message)
}