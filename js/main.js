const betMin = document.querySelector('#betMin')
const betMax = document.querySelector('#betMax')

betMin.addEventListener('click', betMinimum)
betMax.addEventListener('click', betMaximum)

total = 1000

function betMinimum() {

    reelOne = parseInt(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
    reelTwo = parseInt(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
    reelThree = parseInt(Math.floor(Math.random() * (5 - 1 + 1)) + 1)

    document.querySelector('#reelOne').innerHTML = reelOne
    document.querySelector('#reelTwo').innerHTML = reelTwo
    document.querySelector('#reelThree').innerHTML = reelThree
    
    
    if (reelOne === reelTwo && reelTwo === reelThree) {
        total += 100
        document.querySelector('#total').innerHTML = `Current total: ${total}`
    } else {
        total -= 10
        document.querySelector('#total').innerHTML = `Current total: ${total}`
    }
}

function betMaximum() {

    reelOne = parseInt(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
    reelTwo = parseInt(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
    reelThree = parseInt(Math.floor(Math.random() * (5 - 1 + 1)) + 1)

    document.querySelector('#reelOne').innerHTML = reelOne
    document.querySelector('#reelTwo').innerHTML = reelTwo
    document.querySelector('#reelThree').innerHTML = reelThree

    if (reelOne === reelTwo && reelTwo === reelThree) {
        total += 5000
        document.querySelector('#total').innerHTML = `Current total: ${total}`
    } else {
        total -= 50
        document.querySelector('#total').innerHTML = `Current total: ${total}`
    }
}

//Hello world ! :D
var coin = document.getElementById("coin");
function flip() {
    var frameNumber = 1;
    var frameSwitch = setInterval(function () {
        if (frameNumber > 8) {
            frameNumber = 1;
            //clearInterval(frameSwitch);
        }
        else {
            coin.className = "coinBoxFrame" + frameNumber;
            frameNumber++;
        }
    }, 100);
}
flip();