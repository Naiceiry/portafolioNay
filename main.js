let cerrar=document.querySelectorAll(".close")[0];
let cerrarG=document.querySelectorAll(".closeG")[0];
let cerrarA=document.querySelectorAll(".closeA")[0];
let cerrarjs=document.querySelectorAll(".closejs")[0];
let cerrarj8=document.querySelectorAll(".closej8")[0];
let cerrar6=document.querySelectorAll(".close6")[0];
let cerrar7=document.querySelectorAll(".close7")[0];

let abrir=document.querySelectorAll(".cta")[0];
let abrirg=document.querySelectorAll(".ctag")[0];
let abrira=document.querySelectorAll(".ctaa")[0];
let abrirjs=document.querySelectorAll(".ctajs")[0];
let abrirj8=document.querySelectorAll(".ctaj8")[0];
let abrir6=document.querySelectorAll(".cta6")[0];
let abrir7=document.querySelectorAll(".cta7")[0];

let modal=document.querySelectorAll(".modal")[0];
let modalC=document.querySelectorAll(".modal-container")[0];
let modalG=document.querySelectorAll(".modal-containerG")[0];
let modalA=document.querySelectorAll(".modal-containerA")[0];
let modaljs=document.querySelectorAll(".modal-containerjs")[0];
let modalj8=document.querySelectorAll(".modal-containerj8")[0];
let modal6=document.querySelectorAll(".modal-container6")[0];
let modal7=document.querySelectorAll(".modal-container7")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close");
});
abrirg.addEventListener("click", function(e){
    e.preventDefault();
    modalG.style.opacity="1";
    modalG.style.visibility="visible";
    modal.classList.toggle("modal-close");
});
abrira.addEventListener("click", function(e){
    e.preventDefault();
    modalA.style.opacity="1";
    modalA.style.visibility="visible";
    modal.classList.toggle("modal-close");
});
abrirjs.addEventListener("click", function(e){
    e.preventDefault();
    modaljs.style.opacity="1";
    modaljs.style.visibility="visible";
    modal.classList.toggle("modal-close");
});
abrirj8.addEventListener("click", function(e){
    e.preventDefault();
    modalj8.style.opacity="1";
    modalj8.style.visibility="visible";
    modal.classList.toggle("modal-close");
});
abrir6.addEventListener("click", function(e){
    e.preventDefault();
    modal6.style.opacity="1";
    modal6.style.visibility="visible";
    modal.classList.toggle("modal-close");
});
abrir7.addEventListener("click", function(e){
    e.preventDefault();
    modal7.style.opacity="1";
    modal7.style.visibility="visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
})
cerrarG.addEventListener("click", function(){
    modalG.style.opacity="0";
    modalG.style.visibility="hidden";
})
cerrarA.addEventListener("click", function(){
    modalA.style.opacity="0";
    modalA.style.visibility="hidden";
})
cerrarjs.addEventListener("click", function(){
    modaljs.style.opacity="0";
    modaljs.style.visibility="hidden";
})
cerrarj8.addEventListener("click", function(){
    modalj8.style.opacity="0";
    modalj8.style.visibility="hidden";
})
cerrar6.addEventListener("click", function(){
    modal6.style.opacity="0";
    modal6.style.visibility="hidden";
})
cerrar7.addEventListener("click", function(){
    modal7.style.opacity="0";
    modal7.style.visibility="hidden";
})

window.addEventListener("click", function(e){
    this.console.log(e.target )
    if (e.target == modalC )  {
        setTimeout(function() {
            modalC.style.opacity="0";
            modalC.style.visibility="hidden";
        }, 100)
    }
   
})
window.addEventListener("click", function(e){
    this.console.log(e.target )
    if (e.target == modalA )  {
        setTimeout(function() {
            modalA.style.opacity="0";
            modalA.style.visibility="hidden";
        }, 100)
    }
   
})
window.addEventListener("click", function(e){
    this.console.log(e.target )
    if (e.target == modalG )  {
        setTimeout(function() {
            modalG.style.opacity="0";
            modalG.style.visibility="hidden";
        }, 100)
    }
   
})

window.addEventListener("click", function(e){
    this.console.log(e.target )
    if (e.target == modaljs )  {
        setTimeout(function() {
            modaljs.style.opacity="0";
            modaljs.style.visibility="hidden";
        }, 100)
    }
   
})
window.addEventListener("click", function(e){
    this.console.log(e.target )
    if (e.target == modalj8 )  {
        setTimeout(function() {
            modalj8.style.opacity="0";
            modalj8.style.visibility="hidden";
        }, 100)
    }
   
})
window.addEventListener("click", function(e){
    this.console.log(e.target )
    if (e.target == modal6 )  {
        setTimeout(function() {
            modal6.style.opacity="0";
            modal6.style.visibility="hidden";
        }, 100)
    }
   
})
window.addEventListener("click", function(e){
    this.console.log(e.target )
    if (e.target == modal7 )  {
        setTimeout(function() {
            modal7.style.opacity="0";
            modal7.style.visibility="hidden";
        }, 100)
    }
   
})
document.getElementById("sm").onclick=function(){
    document.getElementById("nav").style.display="none";
}