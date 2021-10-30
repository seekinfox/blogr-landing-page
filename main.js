function show() { //ref 1
    'use strict';
    document.getElementById("display").classList.toggle('block');
}

var menu = document.querySelectorAll('.menu-icon'); //ref3
menu.forEach(svg => {
    svg.addEventListener("click", () => {

        svg.classList.toggle('ham-menu');
    });
});


var drop = document.querySelectorAll(".drop"); //ref2

drop.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});



// note for future 

//1 menu was closing whn ii clicked on the menu item- > 
// before - i put onclick even on main nav container 
// solved - i moved onclick event to the menu icon div ref no in html

//2 ref2 
//before put .drop-click class on eventhandler
// --issues
// .active did not work 
//--reason 
// drop-click was not the parent of all the related items, it is an seperate child entity
//solved - put container .drop in eventHandler 
// .querry sellector takes the class as a parent and for each 
// makes class active available to all children items..

//ref3 
//created topggle for menu icon 
// it worked..
