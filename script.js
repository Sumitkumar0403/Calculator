let input= document.querySelector(".input")
let buttons= document.querySelectorAll('button')
let string="";

buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='C'){
            string=``;
            input.value=``;
        }
        else if(e.target.innerHTML=="DEL"){
            string= string.substring(0,(string.length)-1)
            input.value=string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string
        }
        
    })
})

window.addEventListener('keypress',(e)=>{
   if(e.key=='='|| e.key=='Enter'){
    string=eval(string)
    input.value = string;
   }
  
   else{
    string += e.key;
    input.value = string;
   }
   

  
})