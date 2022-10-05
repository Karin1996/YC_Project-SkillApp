
let nav_menu = `
<nav>
    <div id="hamburger"></div>

    <menu>
        <li><a href="dashboard.html"><img class="icon" src="assets/default_image.png" alt="default_image"> <span> My Dashboard </span> </a></li>
        <li><a href="#"><img class="icon" src="assets/default_image.png" alt="default_image"> <span> Search Goals </span> </a></li>
    </menu>
    
    <div id="logout_div" onclick="deleteLocalStorage()">
        <a href="homepage.html"><img class="icon" src="assets/default_image.png" alt="default_image"> <span> Logout</span>  </a>
    </div>
</nav>
`;

// insert nav in body
document.body.insertAdjacentHTML("afterbegin", nav_menu);