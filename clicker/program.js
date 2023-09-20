
var coins = 0;
var coinsPS = 0;
var coinsPC = 1;
var coinanimation = 0;
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

function getCoinsPS() {
    if (coins >= 50) {
        coins -= 50 + coinsPS * 25;
        coinsPS += 1;
        coinneeded = 50 + coinsPS * 25;
    } else {
        alert("Sorry, you don't have enough coins.")
    }
    setInterval(function coinPS() {
        coins += coinsPS;
    }, 1000)
}