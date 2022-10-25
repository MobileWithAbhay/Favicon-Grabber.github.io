var result=document.getElementById('result');
var url_input=document.getElementById('url');
var grab=document.getElementById('Grabber');
let downloadbtn=document.querySelector('#down');
let img=document.querySelector('img');

grab.addEventListener("click",()=>{
  if (url_input!=""){
    var url2=`https://www.google.com/s2/favicons?domain=${url_input.value}`
    img.src=url2;
    ;}
});
downloadbtn.addEventListener("click",()=>{
  let imgPath=img.getAttribute('src');
  let fileName=getFileName(imgPath);
  saveAs(imgPath,fileName);
});
function getFileName(str){
  return str.substring(str.lastIndexOf('/'+1));
}