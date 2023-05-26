var winnerEl = document.getElementById("winner")
var winnerCountEl = document.getElementById("winnercount")
var apEl = document.getElementById("apbtn")
var frpEl = document.getElementById("frpbtn")
var hoyreEl = document.getElementById("hoyrebtn")
var spEl = document.getElementById("spbtn")
var svEl = document.getElementById("svbtn")

var winnercount = Math.max(ap, frp, hoyre, sp, sv)
var ap = 0
var frp = 0
var hoyre = 0
var sp = 0
var sv = 0

console.log(winnercount)

function apvote() {
    ap++
    console.log(ap)
    localStorage.setItem("ap_local", ap)
    apcount.innerText = ap + " ap"
}

function frpvote() {
    frp++
    console.log(frp)
    localStorage.setItem("frp_local", frp)
    frpcount.innerText = frp + " frp"
}

function hoyrevote() {
    hoyre++
    console.log(hoyre)
    localStorage.setItem("hoyre_local", hoyre)
    hoyrecount.innerText = hoyre + " høyre"
}

function spvote() {
    sp++
    console.log(sp)
    localStorage.setItem("sp_local", sp)
    spcount.innerText = sp + " sp"
}

function svvote() {
    sv++
    console.log(sv)
    localStorage.setItem("sv_local", sv)
    svcount.innerText = sv + " sv"
}

// function updatewinnercount() {
//     winnercount = 
// }
