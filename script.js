let clientsDetails =[];
const details = (ev)=>{
    ev.preventDefault();
    let Pizza ={
        size: document.getElementById("#exampleFormControlSelect1").value,
        fName: document.getElementById("#firstName").value,
        lName: document.getElementById("#lastName").value,
        eMail: document.getElementById("#emailAddress").value,
        pType: document.getElementById("#pizzaType").value,
        topping: document.getElementById("#Toppings").value,
    console.log(Pizza)
}
    clientsDetails.push(Pizza);
    document.forms[0].reset();
   
}