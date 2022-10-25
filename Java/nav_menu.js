
let nav_menu = ` 
<nav>
    <div id="hamburger"><img class="burger" src="./Assets/hamburger.png" alt=""></div>

    <menu>
        <li><a href="./profile.html"> <span>Dashboard</span> </a></li>
        <li><a href="./addGoal.html"> <span>Add your own skill</span> </a></li>
    </menu>

    <menu>
        <li><a href="#"> <span>Skill Quiz</span> </a></li>
        <li><a href="#"> <span>Library</span> </a></li>
        <li><a href="./HomePage.html"> <span>Landing Page</span> </a></li>
    </menu>
    
    <menu>
        <li><a href="./accountinfo.html"> <span>User settings</span> </a></li>
        <div onclick="logout()"> <span>logout</span>  </div>
    </menu>
</nav>
`;



// insert nav in body
document.body.insertAdjacentHTML("afterbegin", nav_menu);