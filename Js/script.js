// const mobile =document.getElementById("mobile")
// const mobile =document.querySelector("#mobile")
const mobile = $("#mobile")
const desktop = $("#desktop")
const flowwork = $("#flowwork")

const descricaoMObile = $("#descricaoMObile")
const descricaoDescktop = $("#descricaoDescktop")
const descricaoFlowwork = $("#descricaoFlowwork")

//  mobile.addEventlistener('click', mostrarDescMobile)

//  function mostrarDescMobile(){

//  }
// function anonima
mobile.on('click' , function(){
   descricaoMObile.slideToggle(500)
   descricaoDescktop.slideUp(100)
   descricaoFlowwork.slideUp(100)
})
desktop.on('click' , function(){
   descricaoDescktop.slideToggle(500)
   descricaoFlowwork.slideUp(100)
   descricaoMObile.slideUp(100)
})
flowwork.on('click' , function(){
   descricaoFlowwork.slideToggle(500)
   descricaoDescktop.slideUp(100)
   descricaoMObile.slideUp(100)
})