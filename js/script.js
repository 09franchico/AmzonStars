

let rotate = 0;
let imagem = document.querySelector("#img-1");
setInterval(()=>{

if(rotate== 360){rotate = 0}
rotate = rotate + 30;
imagem.style.transform = "rotateY("+rotate+"deg)"; 
    
 },70);
       
    
    	
