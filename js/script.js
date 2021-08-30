

// fazer o texto digitar sozinho
let el = document.querySelector("#ans");
let texto = "AMAZON STARS";
let intervalo = 500;

function showtext(el,texto,intervalo){
  const char = texto.split("").reverse(); /// colocou em array as letras
  const typer = setInterval(()=>{
    // verificação se ainda existe caracteres
    if(!char.length){
      return clearInterval(typer);
    }
    // Digita os dados na tela
    const next = char.pop();
    el.innerHTML+= next;

  },intervalo);

}

showtext(el,texto,intervalo);
//IMAGENS 
let rotate = 0;
let imagem = document.querySelector("#img-1");
setInterval(()=>{
if(rotate== 360){rotate = 0}
rotate = rotate + 30;
imagem.style.transform="rotateY("+rotate+"deg)"; 
    
 },70);
       

  //PAGINA XTREINOS

  let hr = document.querySelector("#hr");
  function horas(){
     let d = new Date();
     let h = d.getHours();
     let m = d.getMinutes();
     let s = d.getSeconds();
      hr.innerHTML= "HORARIO  "+h+' : '+m+' : '+s;

  }

  setInterval(()=>{
    horas();
  },1000)
       
 

