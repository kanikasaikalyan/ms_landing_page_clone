
let small=document.getElementById("menu_icon");
let menu=document.getElementById("display");

small.onclick=function(){
    menu.style.visibility='visible';
    console.log(menu)

    console.log('clicked');
}

document.getElementById("icon-close").onclick=function(){
    menu.style.visibility='hidden';

}