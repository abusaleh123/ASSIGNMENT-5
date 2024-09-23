document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('donate-money-input');
    console.log(addMoney);
    const accountBalance = getInputFieldByInnerText('accountBalance');

    if(!isNaN(addMoney) && addMoney > 0){
     const mainAccountBalance = getInputFieldByInnerText('main-account-balance');
     console.log(mainAccountBalance);

     const newBalance = mainAccountBalance + addMoney;
     console.log(newBalance);
     const mainNewBalance = accountBalance - addMoney;
     document.getElementById('main-account-balance').innerText = newBalance;
     document.getElementById('accountBalance').innerText = mainNewBalance;
     my_modal_1.showModal();
    }
    else{
        alert('Invalid Donation Amount')
    }
})


document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('feni-donate-money-input');
    console.log(addMoney);

    if(!isNaN(addMoney) && addMoney > 0){
     const mainAccountBalance = getInputFieldByInnerText('feni-main-account-balance');
     console.log(mainAccountBalance);

     const newBalance = mainAccountBalance + addMoney;
     console.log(newBalance);
     document.getElementById('feni-main-account-balance').innerText = newBalance;
     my_modal_1.showModal();
    }
    else{
        alert('Invalid Donation Amount')
    }
})

document.getElementById('quota-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('quota-donate-money-input');
    console.log(addMoney);

    if(!isNaN(addMoney) && addMoney > 0){
     const mainAccountBalance = getInputFieldByInnerText('quota-main-account-balance');
     console.log(mainAccountBalance);

     const newBalance = mainAccountBalance + addMoney;
     console.log(newBalance);
     document.getElementById('quota-main-account-balance').innerText = newBalance;
     my_modal_1.showModal();
        
    }
    else{
        alert('Invalid Donation Amount')
    }
})