

let so = [];
let notso = [];
let gosa_g = [];
// let per_gosa_round = [];
const button = document.getElementById('button');
const rand = document.getElementById('random');
const many = document.getElementById('many');
const so_r = document.getElementById('per_so');
const gosa_r = document.getElementById('per_gosa');
const average = document.getElementById('gosa_g');
const Basel = 6 / (Math.PI) ** 2;

const Basel_p = document.getElementById('basel');

// Basel_p.textContent = Basel;




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
  
    EA(random1, random2);
  
  }

  cons()

}

function cons() {

  console.log('互いに素',so.length)
  console.log('互いに素出ないとき',notso.length)
  
  const per_so = (so.length / (notso.length + so.length) ) ;
  
  console.log('互に素である割合',per_so)
  
  
  
  console.log('6/pi^2 =',Basel)
  
  let per_gosa = Math.abs((per_so - Basel) * 100 / Basel);
  
  console.log('パーセント誤差',per_gosa,'%')

  so_r.value = per_so

  gosa_r.value = per_gosa

  let per_gosa_round = Math.round(per_gosa * 100) / 100;

  

  // gosa_g.push(per_gosa_round);
  gosa_g.push(per_gosa);

  so = [];    //reset
  notso = [];

  console.log(gosa_g)

  m(per_gosa_round)
}



function for0() {

  if (rand.value.match(/^\d?\d+$/) && many.value.match(/^\d?\d+$/) && rand.value !== '0' && many.value !== '0' ) {

    for1()

  } else {
    alert('数を正確に入力してください(半角)')
  }

}

button.addEventListener('click', for0)




let k = (gosa_g.length ) ;
let graph_name = document.getElementsByClassName('graph' + k);

let graph_h = (per_gosa * 40 - 20) + 'px';
let graph_m_w = (26 + 45 * k ) + 'px';


function m(n) {

  
  let k = (gosa_g.length ) ;


  const create = document.createElement('div');
  create.className = 'graph' + k;
  create.textContent = '・'
  create.style.marginLeft = ( 26 + ((k - 1)  * 45) ) + 'px';
  create.style.marginBottom = ((n * 40 ) - 20) + 'px';
  create.style.position = 'absolute';
  create.style.bottom = '0';
  create.style.fontSize = '26px';
  create.title = n;


  
  document.getElementById('graph_main').appendChild(create);

  let sum = 0;

  for (let i = 0 ; i < k ; i++ ) {

    sum += gosa_g[i];
  }

  let ave = (sum / gosa_g.length);

  average.value = ave;
  

} 

