// Controller (I/O) + Events + Talk to Service
import { homeOperation } from "../Services/HomeP-Services.mjs";
import { ArticleObj, artiobj2 } from "../model/article.mjs"

window.addEventListener('load', fnBinder);

function fnBinder() {
  contentSetter();
  featureHandler();
}





const navInsights = document.querySelector(".insights");
navInsights.addEventListener("click", homeOperation.openDrawar);


function featureHandler() {
  const newsContainer = document.querySelector(".container");
  newsContainer.addEventListener("mouseover", homeOperation.stopMoving);
  newsContainer.addEventListener("mouseout", homeOperation.resumeMoving);
  const navInsights = document.querySelector(".insights");
  navInsights.addEventListener("click", homeOperation.openDrawar);

  }



function contentSetter() {
  document.querySelector("#artiPage1").innerHTML = ArticleObj.headline;
  document.querySelector("#artipage2").innerHTML = artiobj2.headline;
  // document.querySelector("#artiPage3").innerHTML = ArticleObj.headline;
  document.querySelector("#artipage4").innerHTML = artiobj2.headline;

}


document.querySelector('#fbtn').addEventListener('click',sendData )
function sendData(event){
  console.log(event);
  const name = document.querySelector("#name").value;
  return name;


}








