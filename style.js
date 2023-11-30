var menu=document.getElementById("menuu");

function openside(){
    menu.style.right='0';
}
function closeside(){
    menu.style.right='-200px';
}

// typimg Atomimation

var typed=new Typed(".typing",{
    strings:["Men Cloths","Women Cloths","Winter wear","Summer Weer","children cloths","Many More"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


var state=false;

function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        state=false;
        document.getElementById("eye").style.color='black';
    }
    else{
        document.getElementById("password").setAttribute("type", "text");
        state=true;
        document.getElementById("eye").style.color='green';
    }
}

