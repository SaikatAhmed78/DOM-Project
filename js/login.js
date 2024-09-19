
// document.getElementById('login-button').addEventListener('click', function(event){ 
// event.preventDefault();

// const phoneNumber = document.getElementById('phone-number').value;
// const pinNumber = document.getElementById('pin-number').value;

// if(phoneNumber === '5' && pinNumber  === 1234){
//     console.log('you are logged in');
// }
// else{
//     alert('check your email or phone')
// }

// })


document.getElementById('login-button').addEventListener('click', function(event){
event.preventDefault();

const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;

if(phoneNumber === '017' && pinNumber === '2580'){
    console.log('you are logged in');
    window.location.href = '/location.html'
}
else{
    alert('type your valid information')
}
})