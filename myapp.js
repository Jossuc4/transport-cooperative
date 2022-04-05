var tana={
    fianara:412,
    mahajanga:573,
    toamasina:400,
    toliara:800,
    antsiranana:950
}
var fianara={
    toliara:600,
    toamasina:tana.fianara + tana.toamasina,
    mahajanga:tana.fianara + tana.mahajanga,
    antsiranana:tana.fianara + tana.antsiranana
}
var toliara={
    tana:tana.toliara,
    fianara:fianara.toliara,
    toamasina:tana.toliara + tana.toamasina,
    mahajanga:tana.toliara + tana.mahajanga,
    antsiranana:tana.toliara + tana.antsiranana
}
var mahajanga={
    tana:tana.mahajanga,
    fianara:tana.mahajanga + tana.fianara,
    toamasina:tana.mahajanga + tana.toamasina,
    toliara:tana.mahajanga + tana.toliara,
    antsiranana:487
}
var antsiranana={
    tana:tana.antsiranana,
    fianara:tana.antsiranana + tana.fianara,
    toamasina:tana.antsiranana + tana.toamasina,
    mahajanga:487,
    toliara:tana.antsiranana + tana.toliara
}
var toamasina={
    tana:tana.toamasina,
    fianara:tana.toamasina + tana.fianara,
    mahajanga:tana.toamasina + tana.mahajanga,
    antsiranana:tana.toamasina + tana.antsiranana
}

var calculer=document.getElementById('calculer')
var depart=document.getElementById('zoneD')
var arrive=document.getElementById('zoneA')

var distancing=document.getElementById('distance')
var duration=document.getElementById('duration')


calculer.addEventListener('click',function(){

    var onVient=depart.options[depart.selectedIndex].textContent
    var onVa=arrive.options[arrive.selectedIndex].textContent


    console.log(onVa)
    distancing.innerHTML = "<mark>"+onVient.onVa+" Km</mark>"
})