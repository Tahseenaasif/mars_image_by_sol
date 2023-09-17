let btn=document.getElementsByClassName("btn")
let input1=document.getElementsByClassName("input")[0];
let imgcont=document.getElementById('img-cont');
let btnprev=document.getElementsByClassName("btnprev")
let btnnext=document.getElementsByClassName("btnnxt")
let ihtml="";
let url="";
let page=0;

// (function () {
//   btnprev.setAttribute("disabled", "true");
//   btnnext.setAttribute("disabled", "true");
// })()

function phtonext(){
  if(input1.value=="" ){
    alert("date can not be left blanck")
  }
  imgcont.innerHTML="";
url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="
url+=input1.value;
url+="page=";
url+=page;
url+="&api_key=xVAAKOz1CFKTAJjcgv21ESKtaiJbXEKGW31A80GG"
console.log(url);
let xhr=new XMLHttpRequest();

xhr.open("GET",url,true);
xhr.onload=()=>{
  if(xhr.status==200){
      
      let xhrresponse=JSON.parse(xhr.response );
      // console.log(xhrresponse);
      
      for(item of xhrresponse.photos){
          // console.log(item);
           ihtml+= ` <img src="${item.img_src}">`;
        }
         imgcont.innerHTML=ihtml;
       
  }
}
xhr.send();
}

btn[0].addEventListener("click",phtonext);

btnprev[0].addEventListener("click",()=>{
  if(page>=1){
    page-=1;
  phtonext();
  }
  
});

btnnext[0].addEventListener("click",()=>{
 
      page+=1;
      
      phtonext();
    
   
  
  
});
