// bottoni
const btnStart= document.getElementById('start')
const livello2=document.getElementById('difficolta2')
const livello3=document.getElementById('difficolta3')



// elementi 
const container=document.getElementById('square-container')
let listaBombs=[]
const messaggio= document.getElementById('messaggio')
let counter=1



btnStart.addEventListener('click', start)
livello2.addEventListener('click', difficolta2)
livello3.addEventListener('click', difficolta3)
 


// FUNZIONI




function start(){
  reset()
  const bomb =generateBomb()
  console.log(bomb)
  for(let i=1; i<=100; i++){
  const square=generateSquare(i)
  container.append(square)}
  
 
 
}

function generateSquare(num){
  const cell= document.createElement('div')
  cell.className ='square';
  cell.numero=num

  cell.addEventListener('click', function(){
    console.log(num)
    this.classList.add('blue')
   
  if (counter>=100-listaBombs.length){
      counter++
      messaggio.innerHTML+=`hai vinto`
    }
  else if(listaBombs.includes(num)){
    this.classList.add('red')
    messaggio.innerHTML+=`Hai perso.<br> Il tuo punteggio è di ${counter-1} su 100`
    
  }
  else{
    console.log(counter)
    counter++
  }
  })
  
  return cell
}



function reset(){
  container.innerHTML=''
  counter=1
  listaBombs=[]
  messaggio.innerHTML=''

 
}

function generateBomb(){

  const numBombs= 16
  do{
  const numeroRandom= Math.ceil(Math.random()*100)
  console.log(numeroRandom)
  if(listaBombs.includes(numeroRandom)){
  numeroRandom}
  else{ listaBombs.push(numeroRandom)
  console.log(listaBombs)}
 
  }
  while(listaBombs.length<numBombs)
  return listaBombs
}



 
  
  
  

  
  












function difficolta2(){
  reset()
   for(let i=1; i<=81; i++){
 const square2=generateSquare2(i)
 container.append(square2)
 
}
}


function difficolta3(){
    reset()
     for(let i=1; i<=49; i++){
   const square=generateSquare3(i)
   container.append(square)
   
  }
  }
function generateSquare2(num){
  const cell= document.createElement('div')
  cell.className ='square2';
  cell.numero=num

  cell.addEventListener('click', function(){
    console.log(num)
    this.classList.add('blue')
  }) 
  
  return cell}


  
  function generateSquare3(num){
    const cell= document.createElement('div')
    cell.className ='square3';
    cell.numero=num
  
    cell.addEventListener('click', function(){
      console.log(num)
      this.classList.add('blue')
    }) 
    
    return cell}