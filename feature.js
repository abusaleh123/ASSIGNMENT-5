document.getElementById('history-btn').addEventListener('click', function(){
    showElementById('transaction-section');
    document.getElementById('donation-btn').classList.remove('bg-[#b4f461]');
    document.getElementById('history-btn').classList.add('bg-[#b4f461]');

    
    // document.getElementById('history-btn').classList.add('bg-[#b4f461]');

});
document.getElementById('donation-btn').addEventListener('click', function(){
    showElementById('addMoney-container');
    document.getElementById('donation-btn').classList.add('bg-[#b4f461]');
    document.getElementById('history-btn').classList.remove('bg-[#b4f461]');


    
});
document.getElementById('history-btn').addEventListener('click', function(){
    showElementById('transaction-section')
})

// document.getElementById('history-btn').addEventListener('click', function(){
//     document.getElementById('donation-btn').classList.remove('bg-[#b4f461]');
// });
// document.getElementById('donation-btn').addEventListener('click', function(){
//     document.getElementById('donation-btn').classList.add('bg-[#b4f461]');
// });






