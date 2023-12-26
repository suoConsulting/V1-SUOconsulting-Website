






export const homeOperation = {
  openDrawar() {
    let content = document.querySelector(".mps1-nav-drawar-flex-container");
    if (content.style.display === "none") {
      content.style.display = "flex";
    } else {
      content.style.display = "none";
    }
  },

  stopMoving() {
    const content = document.querySelector(".content");
    content.style.animationPlayState = "paused";
  },

  resumeMoving() {
    const content = document.querySelector(".content");
    content.style.animationPlayState = "running";
  },

  openSearch(){
    
  }

  

  
 
};

