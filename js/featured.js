
// Show the cash out form

document.getElementById('show-cash-out-btn').addEventListener('click', function(){

   document.getElementById('cash-out-form').classList.remove('hidden');
   document.getElementById('add-money-form').classList.add('hidden');
});


// show add money form & hide the cash out form

document.getElementById('show-add-money-btn').addEventListener('click', function(){

    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})