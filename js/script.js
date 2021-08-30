
let el = document.querySelector("#ans");
let texto = "AMAZON STARS";
let intervalo = 500;

function showtext(el,texto,intervalo){
  const char = texto.split("").reverse();
  const typer = setInterval(()=>{
    if(!char.length){
      return clearInterval(typer);
    }
    const next = char.pop();
    el.innerHTML += next;

  },intervalo);

}
showtext(el,texto,intervalo);

// IMAGENS 
let rotate = 0;
let imagem = document.querySelector("#img-1");
setInterval(()=>{
if(rotate== 360){rotate = 0}
rotate = rotate + 30;
imagem.style.transform = "rotateY("+rotate+"deg)"; 
    
 },70);
       
    
    	
