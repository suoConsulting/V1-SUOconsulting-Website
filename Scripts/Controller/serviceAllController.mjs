
import {servicesArr} from "../model/services.mjs";

window.addEventListener('load', init)
function init(){
  contentSetter();
}
   

function contentSetter (){

       const pathname = window.location.pathname;
       if (pathname === '/view/services/servicesMain.html') {
        document.querySelector('.').style.backgroundImage = 'url("/Images/servicesIMg/investmentFDI.jpg")';
       let cardimg =  document.querySelector('#myimg1');
       cardimg.src ='/Images/servicesIMg/investmentFDI.jpg'
       
       }
       else if (pathname === '/view/services/service1.html') {
        let serviceObj = servicesArr[0];
        document.querySelector('.heading').innerHTML=serviceObj.Heading;
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/investmentFDI.jpg")';
        document.querySelector('.serviceDesc').innerHTML = serviceObj.desc;
       
       } else if (pathname === '/view/services/service2.html') {
        let serviceObj = servicesArr[1];
        // document.querySelector('title').innerHTML=servicesObj2.title;
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Start-up Consulting.avif")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc;

       } else if (pathname === '/view/services/service3.html'){
        let serviceObj = servicesArr[2];
        // document.querySelector('title').innerHTML=servicesObj3.title;
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Business Purpose & Strategy Consultancy.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc;

         
       } else if (pathname === '/view/services/service4.html'){
        let serviceObj = servicesArr[3];
        // document.querySelector('title').innerHTML=servicesObj4.title;
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/International Business.avif")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc;
        
      } else if (pathname === '/view/services/service5.html'){
        let serviceObj = servicesArr[4];
        // document.querySelector('title').innerHTML=servicesObj5.title;
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Tax Management & Strategy.avif")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc;
        
      
      }else if (pathname === '/view/services/service6.html'){
        let serviceObj = servicesArr[5];
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }
      else if (pathname === '/view/services/service7.html'){
        let serviceObj = servicesArr[6];
        console.log(serviceObj)
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }
      else if (pathname === '/view/services/service8.html'){
        let serviceObj = servicesArr[7];
        console.log(serviceObj)
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }
      else if (pathname === '/view/services/service9.html'){
        let serviceObj = servicesArr[8];
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }
      else if (pathname === '/view/services/service10.html'){
        let serviceObj = servicesArr[9];
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }
      else if (pathname === '/view/services/service11.html'){
        let serviceObj = servicesArr[10];
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }
      else if (pathname === '/view/services/service12.html'){
        let serviceObj = servicesArr[11];
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }
      else if (pathname === '/view/services/service13.html'){
        let serviceObj = servicesArr[12];
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }
      else if (pathname === '/view/services/service14.html'){
        let serviceObj = servicesArr[13];
        document.querySelector('.serviceImage').style.backgroundImage = 'url("/Images/servicesIMg/Anti Bribery Investigations & Support.jpg")';
        document.querySelector('.heading').innerHTML=serviceObj.heading;
        document.querySelector('.serviceDesc').innerHTML=serviceObj.desc; 
      }

     }