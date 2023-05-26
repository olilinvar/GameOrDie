let totalCookies = 0;
let cookiesAddedPerClick = 1;
let grandmas = 0;
let grandmaCost = 20;
let goldenCookie = false;
let cookiesPerSecond = 0;

// function saveGame() {
//     localStorage.setItem("totalCookies", totalCookies);
//     localStorage.setItem("cookiesAddedPerClick", cookiesAddedPerClick);
//     localStorage.setItem("grandmas", grandmas);
//     localStorage.setItem("grandmaCost", grandmaCost);
//     localStorage.setItem("goldenCookie", goldenCookie);
// }

// function loadGame() {
//     totalCookies = localStorage.getItem("totalCookies");
//     cookiesAddedPerClick = localStorage.getItem("cookiesAddedPerClick");
//     grandmas = localStorage.getItem("grandmas");
//     grandmaCost = localStorage.getItem("grandmaCost");
//     goldenCookie = localStorage.getItem("goldenCookie");
// }

// timed buff function med multiplier eller additional grandmas

document.getElementById("cpsHTML").innerHTML = "cps: " + cookiesPerSecond;

bakeryname = prompt("insert bakery name:")

if (bakeryname === null) {
    bakeryname = ""
} else {
    document.getElementById("bakerynameHTML").innerHTML = bakeryname + " Bakery";
}


function addCookies() {
    totalCookies = totalCookies + cookiesAddedPerClick;
    document.getElementById("totalCookiesHTML").innerHTML = totalCookies;

    totalCookies
};

function buyGrandmas() {
    if (totalCookies === 30) {
        alert("easter egg unlocked")
    }
    else if (totalCookies >= grandmaCost) {
        totalCookies -= grandmaCost;
        grandmas++;
        grandmaCost = Math.round(grandmaCost * 1.2);
        cookiesPerSecond = cookiesPerSecond + 1;
        document.getElementById("totalCookiesHTML").innerHTML = totalCookies;
        document.getElementById("grannyinfo_cost").innerHTML = grandmaCost;
        document.getElementById("grannyinfo_owned").innerHTML = grandmas;
        document.getElementById("cpsHTML").innerHTML = "cps: " + cookiesPerSecond;
    }
    else {
        alert("not enough cookies to buy grandma")
    }
};

setInterval(function grandmaProduction() {
    totalCookies += cookiesPerSecond;
    document.getElementById("totalCookiesHTML").innerHTML = totalCookies;
}, 1000);













/*the message "you dont have enough cookies to buy a nother grandma" 
should be changed to "you dont have enough cookies to buy this" and 
it should be universal and expandable for all future cookie producers added*/

/*improved menu making room for future cookie producer unlocks*/

/*golden cookie with random spawn location and timing giving the player temporary but powerful buffs
cps multiplier
+100 grandmas for 20 seconds
*/

/*evil cookie identical to golden cookie but gives debuffs instead, 20% of golden cookies are evil, evil cookie looks evil wfter clicked */

/*add a shop for buffs, buff ideas include:
chance of spawning golden cookies multiplied
grandmas work more efficent
gain more cookies from clicking
*/

/*one time easter egg granting player 100x cps multiplier once discovered by buying a grandma at 420 cookies*/

// function easterEgg() {
//     if (totalCookies === 420 && ) { /*how do i detect exactly when a grandma is bought*/
//     /* when addcookies function is called upon, check if totalcookies === 420 ?? */
        
//     }
// }