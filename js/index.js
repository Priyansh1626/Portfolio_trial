window.onscroll = () => {
    let header = document.querySelector('.header_container');
    let brand_name = document.querySelector('.brand_name');
    let nav_link = document.getElementsByClassName('nav_link');
    let top = window.scrollY;

    if (top > 113) {
        header.classList.add('bg-light');
        brand_name.children[0].children[0].style.color = "black";
        nav_link[0].children[0].style.color = "black";
        nav_link[1].children[0].style.color = "black";
        nav_link[2].children[0].style.color = "black";
        nav_link[3].children[0].style.color = "black";
    
    }

    else {
        header.classList.remove('bg-light');
        brand_name.children[0].children[0].style.color = "white";
        nav_link[0].children[0].style.color = "rgb(200,200,200)";
        nav_link[1].children[0].style.color = "rgb(200,200,200)";
        nav_link[2].children[0].style.color = "rgb(200,200,200)";
        nav_link[3].children[0].style.color = "rgb(200,200,200)";
    }
}

