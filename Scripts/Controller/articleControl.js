import { ArticleObj } from "../model/article.mjs";

window.addEventListener('load', combinedFns);



function combinedFns(){
  Articontent ()
  AP1ImgSetter()

}



function AP1ImgSetter (){

  const apIsec1Img = document.querySelector(".APS1-image")
  .style.backgroundImage = `url('${ArticleObj.apPic1}')`;

  const apIMg1 = document.querySelector(".g1")
  .style.backgroundImage = `url('${ArticleObj.apPic2}')`;
  
  const apIMg2 = document.querySelector(".g5")
  .style.backgroundImage = `url('${ArticleObj.apPic3}')`;
  const footerImg = document.querySelector(".last-cover-page")
  .style.backgroundImage = `url('${ArticleObj.apFooterImg}')`;
 
  
}



function Articontent () {
const header = document.querySelector("#AP-headar").innerHTML = ArticleObj.tittle;
const titleCoverP = document.querySelector(".title").innerHTML = ArticleObj.tittle;
const haedlineCoverP = document.querySelector(".Headline").innerHTML = ArticleObj.headline;
const AutherName = document.querySelector(".auther").innerHTML = ArticleObj.autherName;
const desc1 = document.querySelector(".APS1-desc").innerHTML = ArticleObj.desc1 + "<br><br>" + ArticleObj.desc2
const desc2 = document.querySelector(".g2").innerHTML = ArticleObj.desc3;
const desc3 = document.querySelector(".g3").innerHTML = ArticleObj.desc3;
const desc4 = document.querySelector(".g4").innerHTML = ArticleObj.desc4;
const desc5 = document.querySelector(".g6").innerHTML = ArticleObj.desc5;
const desc6 = document.querySelector(".g7").innerHTML = ArticleObj.desc6;
const desc7 = document.querySelector(".g8").innerHTML = ArticleObj.desc7;
}


const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item, index) => {
  if ((Math.floor(index / 2) % 2) === 1) {
    item.classList.add('odd-row-item');
  }
});
