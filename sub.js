

let so = [];
let notso = [];
const button = document.querySelector('button');
const rand = document.getElementById('random');
const many = document.getElementById('many');
const so_r = document.getElementById('per_so');
const gosa_r = document.getElementById('per_gosa');




function EA(m, n) {
 
  if(m < n) {  // m >= nにする
    r = m;  //一時退避
    m = n;
    n = r;
  }

  while ((r = m % n) !== 0) {
    m = n;
    n = r;
  }

  if (n === 1) {
    so.push(n)
  } else {
    notso.push(n)
  }
}
function for1() {
  for (let i = 0; i < many.value; i++) {
    
    let random1 =  Math.ceil(Math.random() * rand.value);
    let random2 = Math.ceil(Math.random() * rand.value);
  
    // console.log(random1)
    EA(random1, random2);
  
  }

  cons()

}

function cons() {

  console.log('互いに素',so.length)
  console.log('互いに素出ないとき',notso.length)
  
  const per_so = (so.length / (notso.length + so.length) ) ;
  
  console.log('互に素である割合',per_so)
  
  const Basel = 6 / (Math.PI) ** 2;
  
  console.log('6/pi^2 =',Basel)
  
  const per_gosa = Math.abs((per_so - Basel) * 100 / Basel);
  
  console.log('パーセント誤差',per_gosa,'%')

  so_r.value = per_so

  gosa_r.value = per_gosa

  so = [];    //reset
  notso = [];
}

// function start(){

// }

function for0() {

  if (rand.value.match(/^\d?\d+$/) && many.value.match(/^\d?\d+$/)) {

    for1()

  } else {
    alert('数を正確に入力してください(半角)')
  }

}

button.addEventListener('click', for0)
