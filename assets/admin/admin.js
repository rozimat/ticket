

const login = document.querySelector('#login');
const parol = document.querySelector('#parol');
const form = document.querySelector('#form');

form.addEventListener('click', (e)=>{
  e.preventDefault();
  const loginCheked = 'rt_blog';
  const parolCheked = '20021127';
  if (login.value === loginCheked && parol.value === parolCheked){
    window.location.assign("admin.html")
    console.log('Parol is valid');
  }
  else{
    console.log('parol invalid');
  }


})

//speaker

const speakerForm = document.querySelector('.form');
const sName = document.querySelector('#name');
const sFieled = document.querySelector('#fieled');
const sImg = document.querySelector('#img');


//schedul

const allschedul = document.querySelector('#schedul');
const point = document.querySelector('#point');

const dFrom = document.querySelector('#from');
const dTo = document.querySelector('#to');
const dEvent = document.querySelector('#event');
const addBtn = document.querySelector('#addDate');





//sponsor
const sponsorPlat = document.querySelector('#sponsor1');
const platinum = document.querySelector('#platinum');

const sponsorGold = document.querySelector('#sponsor2');
const gold = document.querySelector('#gold');


const sponsorSilver = document.querySelector('#sponsor3');  
const silver = document.querySelector('#silver');







