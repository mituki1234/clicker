
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
    document.getElementById("coins").innerHTML = coins + "円";
    document.getElementById("coinneeded").innerHTML = coinneeded;
})

setInterval(function renderCoinsPS() {
    document.getElementById("coinsPS").innerHTML = "一秒間に稼ぐお金(cps): " + coinsPS;
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
    coins += coinsPS / 100;
}, 10)
setInterval(function levelbutton(){
        target = document.getElementById("levelup_button");
        if (coins >= coinneeded) {
          target.className = "buy";
        } else {
          target.className = "";
        }
} ,10)