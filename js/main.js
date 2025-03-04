const reelOne = document.querySelector('#reelOne')
const reelTwo = document.querySelector('#reelTwo')
const reelThree = document.querySelector('#reelThree')
const betMin = document.querySelector('#betMin')
const betMax = document.querySelector('#betMax')
const total = document.querySelector('#total') // should I set a hard value for this like 1000?

betMin.addEventListener('click', test)
betMax.addEventListener('click', testTwo)

function test() {
    console.log('betMin')
}

function testTwo() {
    console.log('betMax')
}

