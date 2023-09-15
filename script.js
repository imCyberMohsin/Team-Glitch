//* Navbar Script 

// Getting Elements
const dropdownBtn = document.querySelector(".dropdownBtn");
const navBar = document.querySelector('.navItems');

const menuDrop = () => {
    dropdownBtn.addEventListener('click', () =>{
        navBar.classList.toggle('unhideItems');
    })
}

menuDrop();