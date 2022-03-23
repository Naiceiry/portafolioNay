let cerrar=document.querySelectorAll(".close")[0];
let cerrarG=document.querySelectorAll(".closeG")[0];
let cerrarA=document.querySelectorAll(".closeA")[0];
let abrir=document.querySelectorAll(".cta")[0];
let abrirg=document.querySelectorAll(".ctag")[0];
let abrira=document.querySelectorAll(".ctaa")[0];
let modal=document.querySelectorAll(".modal")[0];
let modalC=document.querySelectorAll(".modal-container")[0];
let modalG=document.querySelectorAll(".modal-containerG")[0];
let modalA=document.querySelectorAll(".modal-containerA")[0];

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