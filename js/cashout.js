
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOutInput)
    const pinInput = document.getElementById('pin-input').value;
    
    if(pinInput === '1234'){

            const balance = document.getElementById('current-balance').innerText;

            const balanceNumber = parseFloat(balance);
            
            const updateBalance = balanceNumber - cashOutNumber;

            document.getElementById('current-balance').innerText = updateBalance;
    }
    else{
        alert('Failed....! try again letter')
    }
})
