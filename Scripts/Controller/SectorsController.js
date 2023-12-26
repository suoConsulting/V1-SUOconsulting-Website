import { sectorsData } from "../model/sectors.mjs";


window.addEventListener('load', init)

function init(){
    contentSetter();
}

function contentSetter (){
    
    const pathName = window.location.pathname;
    if (pathName === '/view/sectors/sector1.html'){
       let  sectorObj = sectorsData[0];
        document.querySelector('.content').innerHTML= sectorObj.desc;
    }else if (pathName === '/view/sectors/sector2.html'){
        let  sectorObj = sectorsData[1];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector3.html'){
        let  sectorObj = sectorsData[2];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector4.html'){
        let  sectorObj = sectorsData[3];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector5.html'){
        let  sectorObj = sectorsData[4];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector6.html'){
        let  sectorObj = sectorsData[5];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector7.html'){
        let  sectorObj = sectorsData[6];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector8.html'){
        let  sectorObj = sectorsData[7];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector9.html'){
        let  sectorObj = sectorsData[8];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector10.html'){
        let  sectorObj = sectorsData[9];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector11.html'){
        let  sectorObj = sectorsData[10];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector12.html'){
        let  sectorObj = sectorsData[11];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector13.html'){
        let  sectorObj = sectorsData[12];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector14.html'){
        let  sectorObj = sectorsData[13];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector15.html'){
        let  sectorObj = sectorsData[14];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector16.html'){
        let  sectorObj = sectorsData[15];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }else if (pathName === '/view/sectors/sector17.html'){
        let  sectorObj = sectorsData[16];
         document.querySelector('.content').innerHTML= sectorObj.desc;
     }

}

