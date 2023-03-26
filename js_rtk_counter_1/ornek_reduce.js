function startTimer() {
    const time = process.hrtime();
    return time;
}

function endTimer(time) {
    function roundTo(decimalPlaces, numberToRound) {
        return +(Math.round(numberToRound + `e+${decimalPlaces}`) + `e-${decimalPlaces}`);
    }
    const diff = process.hrtime(time);
    const NS_PER_SEC = 1e9;
    const result = (diff[0] * NS_PER_SEC + diff[1]); // Result in Nanoseconds
    const elapsed = result * 0.0000010;
    return roundTo(6, elapsed); // Result in milliseconds
}


console.log('Reducer örneği')


const numbers = []

for (let i = 0; i < 100000; i++) {
    numbers.push(i)
}

let timer = startTimer()
/**
 * Çaycı yöntemi.
 */
let total = 0
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
console.log('>> Total: ', total)
console.log('Çaycı yöntemi total time: ' + endTimer(timer) + ' milisaniye')
console.log('----------------------------------------------')

///////////////////////////////////////////////////////////////////////

timer = startTimer()
/**
 * Okunması kolay ve anlaşılır yöntem.
 */
total = numbers.reduce((startValue, currentItem) => {
    //console.log('Params:', startValue, currentItem)

    return startValue + currentItem
}, 0)
console.log('>> Total: ', total)
console.log('Junior yöntemi total time: ' + endTimer(timer) + ' milisaniye')
console.log('----------------------------------------------')

////////////////////////////////////////////////////////////////////////

timer = startTimer()
/**
 * En iyi ve hızlı yöntem.
 */
total = numbers.reduce((start, current) => start + current, 0)
console.log('>> Total: ', total)
console.log('En iyi yöntem total time: ' + endTimer(timer) + ' milisaniye')
console.log('----------------------------------------------')




