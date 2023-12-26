import { artiobj2 } from "../model/article.mjs";

window.addEventListener('load', funbinder);

function funbinder (){
    contentSetter();
    ap2ImageSetter();
}

function contentSetter (){
    document.querySelector('.header-Image-container').style.backgroundImage = "url('/Images/Article2/header.jpg')";
    document.querySelector('.ap2s1-description').innerHTML = artiobj2.desc1;
    document.querySelector('.s3').innerHTML = artiobj2.desc3;
    document.querySelector('.s4').innerHTML = artiobj2.desc4;
    document.querySelector('.s5').innerHTML = artiobj2.desc5;
    
    
}
