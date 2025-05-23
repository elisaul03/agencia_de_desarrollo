document.addEventListener("DOMContentLoaded", (event) => {

    //seleccionar mis dos elementos principales

    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    mobile_btn.addEventListener("click", ()=>{
        let show = document.querySelector(".menu-mobile--show");
        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        }else{ mobile_menu.classList.add("menu-mobile--show");

        }
        
    });

    window.addEventListener("resize", ()=>{
        let window_width = parseInt(document.body.clientWidth);

        if(window_width >= 1000){
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    //para cerrar el menu con el boton x

    let btn_close = document.querySelector(".menu-mobile__close");
    btn_close.addEventListener("click", showHiddenMenu);

    //despliegue de submenu

    let menu_item = document.querySelectorAll(".menu-mobile__item");
        menu_item.forEach(item => {
            item.addEventListener("click", (event) =>{
                let submenu = item.lastElementChild;
                if(submenu.className ==="menu-mobile__submenu-mobile"){
                    if(submenu.style.display==="block"){
                        submenu.style.display = "none";
                    }else{
                        submenu.style.display = "block";
                    }
                }


            });
        });

});