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
        document.querySelector('#total').innerHTML = total
    } else {
        total -= 10
        document.querySelector('#total').innerHTML = total
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
        total += 10000
        document.querySelector('#total').innerHTML = total
    } else {
        total -= 500
        document.querySelector('#total').innerHTML = total
    }
}

