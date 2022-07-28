let select=document.querySelectorAll("select")
let div = document.querySelector(".text");
let titleH1 = document.querySelector("h1");
let fonts = document.querySelector(".fonts");
let color = document.querySelector(".color");
let fontSize = document.querySelector(".fontSize");
let btn=document.querySelector("button");

//check if there are saved values in localstorage:
if(window.localStorage.getItem("color")){
    
    //get the saved color and use it as a current color
    titleH1.style.color=window.localStorage.color;
    color.value = localStorage.getItem("color");
    
   
}
//check if there are saved values in localstorage:
if(window.localStorage.getItem("fonts")){
    
    //get the saved fontfamily and use it as a current font
    titleH1.style.fontFamily=window.localStorage.fonts;
    fonts.value = localStorage.getItem("fonts");
    
;
}
//check if there are saved values in localstorage:
if(window.localStorage.getItem("fontSize")){
   
    //get the saved fontsize and use it as a current fontsize
    titleH1.style.fontSize=window.localStorage.getItem("fontSize");
    fontSize.value = localStorage.getItem("fontSize");
  

}
//changing the style with button click
// btn.addEventListener("click",()=>{
//     console.log(fonts.value)
//     console.log(color.value)
//     console.log(fontSize.value)
//     titleH1.style.fontFamily=fonts.value;
//     titleH1.style.color=color.value;
//     titleH1.style.fontSize=fontSize.value
//     window.localStorage.setItem("color", this.color);
//     window.localStorage.setItem("fontSize", this.fontSize);
//     window.localStorage.setItem("fonts", this.fonts);
// })

//chaging the style every time we select something:
fonts.onchange = function () {
	titleH1.style.fontFamily = this.value;
	localStorage.setItem("fonts", this.value);

  
};

color.onchange = function () {
	titleH1.style.color = this.value;
	localStorage.setItem("color", this.value);

    
};

fontSize.onchange = function () {
	titleH1.style.fontSize = this.value;
	localStorage.setItem("fontSize", this.value);

};



