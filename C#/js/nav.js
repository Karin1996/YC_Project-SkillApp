// Get the first (and only) nav tag
let nav = document.getElementsByTagName("nav")[0];
let main = document.getElementsByTagName("main")[0];
let openWidth = 300;
let closedWidth = nav.style.width;

document.getElementById("hamburger").addEventListener("click", checkMenuState);

function checkMenuState(){
    //Menu had class open
    if(nav.classList.contains("open")){
        //Close the menu
        menuOpen(true);
    }
    else{
        //Open the menu
        menuOpen(false);
    }
}

function menuOpen(open){
    let spans = nav.getElementsByTagName("span");
    //if the menu is already open, close it
    if(open){
        nav.classList.remove("open");
        document.getElementById("hamburger").style.backgroundImage = "url('assets/hamburger.png')";
        nav.style.width = closedWidth;
        main.style.width = 100% - closedWidth;

        for(let i=0; i < spans.length; i++){
           spans[i].style.display = "none";
        }
    }
    //menu is closed, open it
    else{
        //add open class
        nav.classList.add("open");
        document.getElementById("hamburger").style.backgroundImage = "url('assets/close.png')";
        nav.style.width = openWidth + "px";
        main.style.width = 100% - (openWidth + "px");

        for(let i=0; i < spans.length; i++){
            spans[i].style.display = "inline-block";
        }
    }
}