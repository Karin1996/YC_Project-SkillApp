
let nav_menu = ` 
<nav>
    <div id="hamburger"><img class="burger" src="./Assets/hamburger.png" alt=""></div>

    <menu>
        <li><a href="#"> <span>Skill Quiz</span> </a></li>
        <li><a href="#"> <span>Library</span> </a></li>
        <li><a href="./HomePage.html"> <span>Home</span> </a></li>
    </menu>
    
    <div>
        <a href="./accountinfo.html"> <span>settings</span>  </a>
        <div onclick="logout()"> <span>logout</span>  </div>
    </div>
</nav>
`;



// insert nav in body
document.body.insertAdjacentHTML("afterbegin", nav_menu);