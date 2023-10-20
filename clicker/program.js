
var coins = 0;
var coinsPS = 0;
var coinsPC = 1;
var coinanimation = 0;
var clickpower = 1;
var coinneeded = 50 + coinsPS * 25;
function gainCoin() {
    coins += coinsPC;
}

setInterval(function renderCoins() {
    document.getElementById("coins").innerHTML = "Coins: " + coins;
    document.getElementById("coinneeded").innerHTML = "coins needed:" +  coinneeded;
})

setInterval(function renderCoinsPS() {
    document.getElementById("coinsPS").innerHTML = "Coins per second: " + coinsPS;
})
function clickpower(){
    clickpower++;
}
function getCoinsPS() {
    if (coins >= coinneeded) {
        coins -= 50 + coinsPS * 25;
        coinsPS += clickpower;
        coinneeded = 50 + coinsPS * 25;
    } else {
        alert("Sorry, you don't have enough coins.")
    }
}
setInterval(function coinPS() {
    coins += coinsPS;
}, 1000)