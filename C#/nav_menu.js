
let nav_menu = `
<nav>
    <div id="hamburger"></div>

    <menu>
        <li><a href="dashboard.html"><img class="icon" src="assets/dashboard.png" alt="dashboard"> <span> My Dashboard </span> </a></li>
        <li><a href="goaltracks.html"><img class="icon" src="assets/goal.png" alt="goal"> <span> Search Skills </span> </a></li>
        <li><a href="https://mvs.outsystemscloud.com/MySkillsTools/"><img class="icon" src="assets/library.png" alt="library"> <span> Library </span> </a></li>
        <li><a href="https://python-bigdata.azurewebsites.net/static/index-f.html"><img class="icon" src="assets/quiz.png" alt="quiz"> <span> Quiz </span> </a></li>
    </menu>
    
    <div id="logout_div" >
    <menu>
    <li>
        <a href="user_settings.html" ><img class="icon" src="assets/settings.png" alt="settings"> <span> Your account</span>  </a>
        <a href="homepage.html" onclick="deleteLocalStorage()"><img class="icon" src="assets/logout.png" alt="logout"> <span> Logout</span>  </a>
    </li>  
    </menu>  
    </div>
</nav>
`;

// insert nav in body
document.body.insertAdjacentHTML("afterbegin", nav_menu);