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
function showElementById(id){

document.getElementById('addMoney-container').classList.add('hidden');
document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
  
}