// document.getElementById('history-btn').addEventListener('click', function(){
//     window.location.href='./history.html'
// });
// document.getElementById('donation-btn').addEventListener('click', function(){
//     window.location.href='./index.html'
// });


document.getElementById('history-btn').addEventListener('click', function(){
    showElementById('transaction-section');
})
document.getElementById('donation-btn').addEventListener('click', function(){
    showElementById('addMoney-container');
})

