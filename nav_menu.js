
let nav_menu = ` 
<nav>
    <div id="hamburger">X</div>

    <menu>
        <li><a href="#"><img class="icon" src="img/default_image.png" alt="default_image"> <span>Lorem</span> </a></li>
        <li><a href="#"><img class="icon" src="img/default_image.png" alt="default_image"> <span>Lorem</span> </a></li>
        <li><a href="#"><img class="icon" src="img/default_image.png" alt="default_image"> <span>Lorem</span> </a></li>
        <li><a href="#"><img class="icon" src="img/default_image.png" alt="default_image"> <span>Lorem</span> </a></li>
    </menu>
    
    <div>
        <a href="#"><img class="icon" src="img/default_image.png" alt="default_image"> <span>settings</span>  </a>
        <a href="#"><img class="icon" src="img/default_image.png" alt="default_image"> <span>logout</span>  </a>
    </div>
</nav>
`;

// insert nav in body
document.body.insertAdjacentHTML("afterbegin", nav_menu);