document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){
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


    //  Date
    const date = new Date();
    date.setFullYear(2024);
    document.getElementById("demo").innerHTML = date;
    // Date
     
     const div = document.createElement('div');
     div.classList.add('bg-white');
     div.classList.add('border-2')
     div.classList.add('p-5');
     div.classList.add('m-5');

     div.classList.add('rounded-2xl');
     div.innerHTML = `
       
   <h1 class="  md:text-3xl text-black "> ${addMoney} Taka is Donated for famine-2024 at Noakhali,Bangladesh</h1>
   <p id="demo " class="mt-4">Date: ${date}</p>
   
   `
   ;
     document.getElementById('transaction-container2').appendChild(div);
    }

    else{
        alert('Invalid Donation Amount');
    }
})

// * Feni
document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('feni-donate-money-input');
    console.log(addMoney);
    const accountBalance = getInputFieldByInnerText('accountBalance');

    if(!isNaN(addMoney) && addMoney > 0){
     const mainAccountBalance = getInputFieldByInnerText('feni-main-account-balance');
     console.log(mainAccountBalance);

     const newBalance = mainAccountBalance + addMoney;
     console.log(newBalance);
     const mainNewBalance = accountBalance - addMoney;
     document.getElementById('feni-main-account-balance').innerText = newBalance;
     document.getElementById('accountBalance').innerText = mainNewBalance;
     my_modal_1.showModal();


     const date = new Date();
     date.setFullYear(2024);
     document.getElementById("demo").innerHTML = date;
     // Date
      
      const div = document.createElement('div');
      div.classList.add('bg-white');
      div.classList.add('border-2')
      div.classList.add('p-5');
      div.classList.add('m-5');
 
      div.classList.add('rounded-2xl');
      div.innerHTML = `
        
    <h1 class="  md:text-3xl text-black "> ${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
    <p id="demo " class="mt-4">Date: ${date}</p>
    `;
 
      
      document.getElementById('transaction-container2').appendChild(div);
    }
    else{
        alert('Invalid Donation Amount')
    }
})
// Feni

document.getElementById('quota-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('quota-donate-money-input');
    console.log(addMoney);
    const accountBalance = getInputFieldByInnerText('accountBalance');

    if(!isNaN(addMoney) && addMoney > 0){
     const mainAccountBalance = getInputFieldByInnerText('quota-main-account-balance');
     console.log(mainAccountBalance);
     const mainNewBalance = accountBalance - addMoney;
     const newBalance = mainAccountBalance + addMoney;
     console.log(newBalance);
     document.getElementById('quota-main-account-balance').innerText = newBalance;
     document.getElementById('accountBalance').innerText = mainNewBalance;

     my_modal_1.showModal();

     const date = new Date();
     date.setFullYear(2024);
     document.getElementById("demo").innerHTML = date;
     // Date
      
      const div = document.createElement('div');
      div.classList.add('bg-white');
      div.classList.add('border-2')
      div.classList.add('p-5');
      div.classList.add('m-5');
 
      div.classList.add('rounded-2xl');
      div.innerHTML = `
        
    <h1 class="  md:text-3xl font-bold "> ${addMoney} Taka is Donated for Aid for injured in the Quota Movement,Bangladesh</h1>
    <p id="demo " class="mt-4 font-light">Date: ${date}</p>
    `;
 
      
      document.getElementById('transaction-container2').appendChild(div);
        
    }
    else{
        alert('Invalid Donation Amount')
    }
})