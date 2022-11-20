/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionsArray=document.querySelectorAll("section");
const navList=document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function secToActive(setLoc){
    let index=0;
    for(const sec of sectionsArray){
        if(index!=setLoc){
            if (sec.classList.contains("your-active-class")) {
                sec.classList.remove("your-active-class");
              }
        }
        else{
            sec.classList.add("your-active-class");
        }
        index++;
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function activeSec(){
    let Loc=0;
    for(const sec of sectionsArray){
        let re=sec.getBoundingClientRect();
        if((re.top<window.innerHeight/2 && re.top>0) || (re.bottom>window.innerHeight/2) ){break;}
        Loc++;
    }
    secToActive(Loc);
    liSelect(Loc);
}

// build the Navigation bar
for(const sec of sectionsArray){
    const secL=document.createElement("li");
    secL.textContent=sec.dataset.nav;
    secL.addEventListener("click", function(){sec.scrollIntoView(true);});
    secL.className="menu__link";
    secL.style.flex="auto";
    secL.style.cursor="pointer";
    navList.appendChild(secL);
    navList.style.cssText="display:flex;flex-wrap:wrap";
}

// Add class "active" to section when near top of viewport


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll",activeSec);


//scroll Button with style
document.documentElement.style.scrollBehavior = "smooth";
const scrollButton=document.createElement("i");
const ft=document.querySelector("body");
////old one
//scrollButton.innerHTML="🔼";
scrollButton.className="fas fa-arrow-circle-up";
const buttonStyleArray=[
    "padding:0",
    "margin:0",
    "font-size:4vw",
    "width:4vw",
    "height:4vw",
    "position:fixed",
    "bottom:1vw",
    "right:1vw",
    "cursor:pointer",
    "visibility:hidden",
    "color:#eee"
];
scrollButton.style.cssText=buttonStyleArray.join(";");

ft.appendChild(scrollButton);
const mainHero=document.querySelector("h1");
scrollButton.addEventListener("click", function(){mainHero.scrollIntoView(false);});


//Listen to scroll again to show/hide icon according to the windows width and element size
document.addEventListener("scroll",dispscrollButton);
function dispscrollButton(){
    let elemSize=mainHero.getBoundingClientRect();
    if(elemSize.top>(-window.innerWidth)/2){
        scrollButton.style.visibility="hidden";
    }
    else{
        scrollButton.style.visibility="visible";
    }
}


//function to select link from nav bar
const listItems=document.querySelectorAll(".navbar__menu li");
// //change nav buttom border style
function liSelect(loc){
    let item=0;
    for(const listItem of listItems){
        if(item==loc){
            listItem.style.borderTop ="thick solid rgba(0,13,60,1)";
            listItem.style.borderBottom="thick solid rgba(0,13,60,1)";
        }
        else{
            listItem.style.borderTop ="none";
            listItem.style.borderBottom="none";
        }
        item++;
    }
}


// show/hide header while not scrolling
const headeBar=document.querySelector(".page__header");
document.addEventListener("scroll",timeReset);


let time=0;
function timeStart() {
    headeBar.style.visibility="hidden";
}
function timeReset() {
    headeBar.style.visibility="visible";
    clearTimeout(time);
    time=setTimeout(timeStart, 5000);
}


//convert paragraph to see more pharagh
const divsArray=document.querySelectorAll(".landing__container" );
for(const divElem of divsArray){
    //slice div element into two parts : essentialPart+hidden part(spanElement)
    let result = divElem.innerHTML.indexOf("</p>");
    let essentialPart=divElem.innerHTML.slice(0,result+4);

    let spanElement=document.createElement("span");
    spanElement.innerHTML=divElem.innerHTML.slice(result+5,divElem.innerHTML.length);
    spanElement.style.display="none";

    //construct a see more/see less button
    let buttonElement=document.createElement("button");
    buttonElement.innerHTML="See more";
    buttonElement.style.cssText="background:white;border:none;color:rgba(0,13,60,1);display:inline-flex;cursor:pointer;float:right;line-height: 1.6em;opacity: 50%;";

    divElem.innerHTML=essentialPart;
    divElem.appendChild(spanElement);
    divElem.appendChild(buttonElement);

    buttonElement.addEventListener("click", function(){
        if(buttonElement.innerHTML=="See more"){
            buttonElement.innerHTML="See less";
            spanElement.style.display="inline";
        }
        else{
            buttonElement.innerHTML="See more";
            spanElement.style.display="none";
        }
    });
}


//align all paragraphs to justify
const parasArray=document.querySelectorAll("p");
for(const para of parasArray){
    para.style.textAlign="justify";
}