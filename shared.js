function getInputFieldById (id){
    const addMoney = document.getElementById(id).value;

    const inputNumber = parseFloat(addMoney);
    return inputNumber;
}

function getInputFieldByInnerText (id){
    const accountBAlance = document.getElementById(id).innerText;
    const inputNumber = parseFloat(accountBAlance);
    return(inputNumber);
}


// function showElementById(id){
//     const showElement = document.getElementById('quota-donate-btn').classList.add('hidden');

//     const show  = document.getElementById(id).classList.remove('hidden')
// }