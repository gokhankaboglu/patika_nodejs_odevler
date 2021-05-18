const arguments = process.argv.slice(2);

showCircleArea(arguments[0])


function showCircleArea(param1){
    let x = param1 ** 2
    let y = Math.PI
    let w = x * y
    let area = w.toFixed(2)
    console.log(`Yarıçapı ${param1} olan dairenin alanı: ${area}`);
}


