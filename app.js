function randoColors(){
    const hex="0123456789ABCDEF"
    let color='#';
    for(let i=0; i<6; i++){
        color +=[Math.floor( Math.random() * 16)]
    }
    return color
}
let interNationid;
const startChaningColors= function () {
 function ChangBg(){
  document.body.style.backgroundColor=randoColors();
 }
if(!interNationid){
 interNationid=setInterval(ChangBg,100)}
}

const stopChaningColors= function () {
 clearInterval(interNationid);
 interNationid = null;
 document.body.style.backgroundColor='white'
}

console.log(randoColors());

document.querySelector("#btn-start").addEventListener('click',startChaningColors)
document.querySelector("#btn-stop").addEventListener('click',stopChaningColors)
