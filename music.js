
function parallax(e){
    this.querySelectorAll('.layer').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        Layer.style.transform =  `translateX(${x}px) translateY(${y}px)`
    });
}
        
document.addEventListener("mousemove", parallax)


var audio = document.getElementById('audio')
var playP  = document.getElementById('playPause')
var cont = 0

function playPause(){
    if(cont == 0){
        cont = 1
        audio.play()
        playP.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }else{
        cont = 0
        audio.pause()
        playP.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}
var progress = document.getElementById('progress')
var pbar = document.getElementById('progress_bar')
var times = document.querySelectorAll('.time')
audio.ontimeupdate = function(e){
    progress.style.width = Math.floor(audio.
        currentTime*100/audio.
    duration)+"%"
    times(audio.currentTime*100/audio.duration)+"%"
}
//click para adicionar o momento//
pbar.onclick = function(e){

    audio.currentTime = ((e.offsetX/pbar.offsetWidth) * audio.duration)
}
 // Musica 2//

var audio2 = document.getElementById('audio2')
var playP2 = document.getElementById('playPause2')
var cont2 = 0
function playPause2(){
    if(cont2 == 0){
        cont2 = 1
        audio2.play()
        playP2.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }else{
        cont2 = 0
        audio2.pause()
        playP2.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}
var progress2 = document.getElementById('progress2')
var pbar2= document.getElementById('progress_bar2')
audio2.ontimeupdate = function(e){
    progress2.style.width = Math.floor(audio2.
        currentTime*100/audio2.
    duration)+"%"
}
//click para adicionar o momento//
pbar2.onclick = function(e){

    audio2.currentTime = ((e.offsetX/pbar2.offsetWidth) * audio2.duration)
}


var audio3 = document.getElementById('audio3')
var playP3 = document.getElementById('playPause3')
var cont3 = 0
function playPause3(){
    if(cont3 == 0){
        cont3 = 1
        audio3.play()
        playP3.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }else{
        cont3 = 0
        audio3.pause()
        playP3.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}
var progress3 = document.getElementById('progress3')
var pbar3= document.getElementById('progress_bar3')
audio3.ontimeupdate = function(e){
    progress3.style.width = Math.floor(audio3.
        currentTime*100/audio3.
    duration)+"%"
}
//click para adicionar o momento//
pbar3.onclick = function(e){

    audio3.currentTime = ((e.offsetX/pbar3.offsetWidth) * audio3.duration)
}


var audio4 = document.getElementById('audio4')
var playP4 = document.getElementById('playPause4')
var cont4 = 0
function playPause4(){
    if(cont4 == 0){
        cont4 = 1
        audio4.play()
        playP4.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }else{
        cont4 = 0
        audio4.pause()
        playP4.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}
var progress4 = document.getElementById('progress4')
var pbar4= document.getElementById('progress_bar4')
audio4.ontimeupdate = function(e){
    progress4.style.width = Math.floor(audio4.
        currentTime*100/audio4.
    duration)+"%"
}
//click para adicionar o momento//
pbar4.onclick = function(e){

    audio4.currentTime = ((e.offsetX/pbar4.offsetWidth) * audio4.duration)
}


var aviso = document.querySelector('.aviso')
var x = document.getElementById('fechar') 
var ouvir = document.getElementById('ouvir')
function premium(){
if(ouvir = aviso.style.display = 'block'){
}
}

function premiumX(){
    if(x = aviso.style.display = 'none'){
    }
}

var radio = document.querySelector('.manual-btn')
 var cont = 1
 document.getElementById('radio1').checked = true


 setInterval(() => {
     proximaImg()
 },2000)

 function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
 }


const wrapper = document.querySelector('main.card-premium')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
    pressed = true 
    startX = e.clientX
    this.style.cursor = 'grabbing'
})


wrapper.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if(!pressed){
       return
    }

    this.scrollLeft += startX - e.clientX

    
})

function MenuShow(){
var linksBar = document.querySelector('.links-container')
var menu = document.getElementById('menu')
if(burger = linksBar.style.display == 'block'){
    linksBar.style.display = 'none'
    menu.innerHTML = ' <i class="fa-solid fa-bars-staggered"></i>'
}else{
    linksBar.style.display = 'block'
    menu.innerHTML = '<i class="fa-solid fa-barcode"></i>'
}
}