"use strict";

// Burger Menu
let btn = document.querySelector("#burger-button");
btn.addEventListener("click", menu);
let burger = document.querySelector("#burger-menu");
let display = "off";
function menu(){
    if (display == "off"){
        burger.classList.remove("menu__nav--noDisplay");
        setTimeout(function(){
            burger.classList.remove("menu__nav--display");
            btn.classList.add("menu__button--cross");
        },1);
        display = "on";
    }else if (display == "on"){
        burger.classList.add("menu__nav--display");
        btn.classList.remove("menu__button--cross");
        setTimeout(function(){burger.classList.add("menu__nav--noDisplay");},300);
        display = "off";
    }
}
